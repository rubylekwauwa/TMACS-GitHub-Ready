(function () {
  "use strict";

  // Central analytics boundary for T-MACS. Only allowlisted, non-identifying
  // values can reach Microsoft Clarity; all failures are intentionally silent.
  var CLARITY_PROJECT_ID = "x2jiagxeku";
  var CLARITY_SCRIPT_ID = "tmacs-clarity-loader";
  var VISIT_STORAGE_KEY = "tmacs_analytics_has_visited";
  var memoryOnce = Object.create(null);
  var initialized = false;
  var activeMentorProfileId = "";
  var viewedProfileSections = Object.create(null);
  var profileSectionObserver = null;

  var allowedEvents = new Set([
    "landing_page_viewed",
    "yale_sign_in_clicked",
    "app_loaded",
    "mobile_navigation_selected",
    "desktop_navigation_selected",
    "match_view_opened",
    "browse_view_opened",
    "map_view_opened",
    "tour_view_opened",
    "mentor_card_clicked",
    "mentor_profile_opened",
    "mentor_profile_replaced",
    "mentor_profile_section_viewed",
    "mentor_profile_closed",
    "scheduling_option_clicked",
    "email_mentor_clicked",
    "bookings_link_clicked",
    "external_scheduling_link_clicked",
    "scheduling_intent_reached",
    "match_started",
    "match_filter_selected",
    "match_filter_removed",
    "match_completed",
    "match_results_displayed",
    "match_result_opened",
    "match_reset",
    "no_match_results_seen",
    "browse_started",
    "browse_filter_selected",
    "browse_filter_removed",
    "browse_search_used",
    "browse_results_displayed",
    "browse_reset",
    "empty_results_seen"
  ]);

  var allowedTagValues = {
    device_experience: new Set(["mobile", "desktop"]),
    entry_route: new Set(["public_landing", "authenticated_app"]),
    selected_navigation_mode: new Set(["match", "browse", "map", "tour"]),
    visit_type: new Set(["first_time", "returning"]),
    application_area: new Set(["public", "authenticated"]),
    scheduling_method: new Set(["email", "bookings", "external"]),
    profile_section: new Set(["specialties", "focus_areas", "overview", "availability", "scheduling"]),
    filter_type: new Set(["specialty", "focus", "keyword"]),
    active_filter_count_band: new Set(["zero", "one", "two", "three"]),
    result_count_band: new Set(["zero", "one_to_five", "six_to_ten", "eleven_plus"]),
    match_score_band: new Set(["under_50", "50_to_74", "75_to_99", "100"]),
    keyword_used: new Set(["yes", "no"]),
    keyword_length_band: new Set(["none", "under_10", "10_to_24", "25_plus"]),
    search_used: new Set(["yes", "no"]),
    search_length_band: new Set(["none", "under_10", "10_to_24", "25_plus"])
  };

  function normalizeToken(value) {
    if (typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean") return "";
    return String(value)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9_-]+/g, "_")
      .replace(/^_+|_+$/g, "")
      .slice(0, 48);
  }

  function safeClarityCall() {
    try {
      if (typeof window.clarity !== "function") return false;
      window.clarity.apply(window, arguments);
      return true;
    } catch (error) {
      return false;
    }
  }

  function installClarity() {
    try {
      if (typeof window.clarity !== "function") {
        window.clarity = function () {
          (window.clarity.q = window.clarity.q || []).push(arguments);
        };
      }

      if (document.getElementById(CLARITY_SCRIPT_ID) ||
          document.querySelector('script[src*="clarity.ms/tag/' + CLARITY_PROJECT_ID + '"]')) return;

      var script = document.createElement("script");
      script.id = CLARITY_SCRIPT_ID;
      script.async = true;
      script.src = "https://www.clarity.ms/tag/" + CLARITY_PROJECT_ID;
      var firstScript = document.getElementsByTagName("script")[0];
      if (firstScript && firstScript.parentNode) firstScript.parentNode.insertBefore(script, firstScript);
      else (document.head || document.documentElement).appendChild(script);
    } catch (error) {
      // Analytics must never affect application behavior.
    }
  }

  function setAnalyticsTag(tagName, value) {
    var safeName = normalizeToken(tagName);
    var safeValue = normalizeToken(value);
    var valueAllowlist = allowedTagValues[safeName];
    var isMentorIdTag = safeName === "mentor_id" || safeName === "previous_mentor_id";
    if (isMentorIdTag && !/^mentor_[0-9]{3}$/.test(safeValue)) return false;
    if (!isMentorIdTag && (!valueAllowlist || !valueAllowlist.has(safeValue))) return false;
    return safeClarityCall("set", safeName, safeValue);
  }

  function trackEvent(eventName, properties) {
    var safeName = normalizeToken(eventName);
    if (!allowedEvents.has(safeName)) return false;

    // Clarity custom events accept an event name, not an arbitrary properties
    // object. Approved dimensions are represented as allowlisted custom tags.
    if (properties && typeof properties === "object") {
      Object.keys(properties).forEach(function (key) {
        setAnalyticsTag(key, properties[key]);
      });
    }

    return safeClarityCall("event", safeName);
  }

  function once(key, callback) {
    var safeKey = normalizeToken(key);
    if (!safeKey || memoryOnce[safeKey]) return;
    memoryOnce[safeKey] = true;
    callback();
  }

  function oncePerSession(key, callback) {
    var safeKey = normalizeToken(key);
    if (!safeKey) return;
    try {
      var storageKey = "tmacs_analytics_once_" + safeKey;
      if (window.sessionStorage.getItem(storageKey) === "yes") return;
      window.sessionStorage.setItem(storageKey, "yes");
    } catch (error) {
      if (memoryOnce["session_" + safeKey]) return;
      memoryOnce["session_" + safeKey] = true;
    }
    callback();
  }

  function isOpaqueMentorId(value) {
    return /^mentor_[0-9]{3}$/.test(normalizeToken(value));
  }

  function disconnectProfileSectionObserver() {
    try {
      if (profileSectionObserver) profileSectionObserver.disconnect();
    } catch (error) {}
    profileSectionObserver = null;
  }

  function trackMentorProfileOpened(mentorId) {
    var safeMentorId = normalizeToken(mentorId);
    if (!isOpaqueMentorId(safeMentorId) || activeMentorProfileId === safeMentorId) return false;

    if (activeMentorProfileId) {
      trackEvent("mentor_profile_replaced", {
        previous_mentor_id: activeMentorProfileId,
        mentor_id: safeMentorId
      });
    }

    disconnectProfileSectionObserver();
    activeMentorProfileId = safeMentorId;
    viewedProfileSections = Object.create(null);
    trackEvent("mentor_profile_opened", { mentor_id: safeMentorId });
    return true;
  }

  function trackMentorProfileClosed(mentorId) {
    var safeMentorId = normalizeToken(mentorId || activeMentorProfileId);
    if (!activeMentorProfileId || safeMentorId !== activeMentorProfileId) return false;
    trackEvent("mentor_profile_closed", { mentor_id: activeMentorProfileId });
    activeMentorProfileId = "";
    viewedProfileSections = Object.create(null);
    disconnectProfileSectionObserver();
    return true;
  }

  function trackMentorProfileSection(mentorId, section) {
    var safeMentorId = normalizeToken(mentorId);
    var safeSection = normalizeToken(section);
    if (safeMentorId !== activeMentorProfileId ||
        !isOpaqueMentorId(safeMentorId) ||
        !allowedTagValues.profile_section.has(safeSection) ||
        viewedProfileSections[safeSection]) return false;
    viewedProfileSections[safeSection] = true;
    trackEvent("mentor_profile_section_viewed", {
      mentor_id: safeMentorId,
      profile_section: safeSection
    });
    return true;
  }

  function observeMentorProfileSections(root, mentorId) {
    var safeMentorId = normalizeToken(mentorId);
    if (!root || safeMentorId !== activeMentorProfileId || !isOpaqueMentorId(safeMentorId)) return false;
    disconnectProfileSectionObserver();
    if (typeof window.IntersectionObserver !== "function") return false;

    try {
      profileSectionObserver = new window.IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.5) return;
          var section = entry.target.getAttribute("data-profile-section");
          if (trackMentorProfileSection(safeMentorId, section) && profileSectionObserver) {
            profileSectionObserver.unobserve(entry.target);
          }
        });
      }, { threshold: [0.5] });

      root.querySelectorAll("[data-profile-section]").forEach(function (element) {
        profileSectionObserver.observe(element);
      });
      return true;
    } catch (error) {
      disconnectProfileSectionObserver();
      return false;
    }
  }

  function getVisitType() {
    try {
      var returning = window.localStorage.getItem(VISIT_STORAGE_KEY) === "yes";
      window.localStorage.setItem(VISIT_STORAGE_KEY, "yes");
      return returning ? "returning" : "first_time";
    } catch (error) {
      return "returning";
    }
  }

  function getDeviceExperience() {
    try {
      return window.matchMedia && window.matchMedia("(max-width: 768px)").matches ? "mobile" : "desktop";
    } catch (error) {
      return "desktop";
    }
  }

  function navigationModeFromElement(element) {
    if (!element) return "";
    var explicitView = element.getAttribute("data-view");
    if (explicitView === "guide") explicitView = "tour";
    if (["match", "browse", "map", "tour"].indexOf(explicitView) !== -1) return explicitView;

    var idModes = { launchMatch: "match", launchBrowse: "browse", launchTour: "tour" };
    if (idModes[element.id]) return idModes[element.id];

    var href = element.getAttribute("href") || "";
    try { href = decodeURIComponent(decodeURIComponent(href)); } catch (error) {}
    var match = href.match(/[?&]view=(match|browse|map|guide|tour)/i);
    if (!match) return "";
    return match[1].toLowerCase() === "guide" ? "tour" : match[1].toLowerCase();
  }

  function trackViewOpened(mode) {
    var eventByMode = {
      match: "match_view_opened",
      browse: "browse_view_opened",
      map: "map_view_opened",
      tour: "tour_view_opened"
    };
    if (!eventByMode[mode]) return;
    var emitViewEvent = function () {
      setAnalyticsTag("selected_navigation_mode", mode);
      trackEvent(eventByMode[mode]);
    };
    if (mode === "match") once("match_view_opened", emitViewEvent);
    else if (mode === "browse") once("browse_view_opened", emitViewEvent);
    else emitViewEvent();
  }

  function trackMatchViewOpened() {
    trackViewOpened("match");
  }

  function trackBrowseViewOpened() {
    trackViewOpened("browse");
  }

  function initializeAnalytics() {
    if (initialized) return;
    initialized = true;
    installClarity();

    var isApp = window.location.pathname.indexOf("/app") === 0;
    var device = getDeviceExperience();
    setAnalyticsTag("device_experience", device);
    setAnalyticsTag("visit_type", getVisitType());
    setAnalyticsTag("entry_route", isApp ? "authenticated_app" : "public_landing");
    setAnalyticsTag("application_area", isApp ? "authenticated" : "public");

    if (isApp) {
      once("app_loaded", function () { trackEvent("app_loaded"); });
      try {
        var requestedView = new URLSearchParams(window.location.search).get("view") || "";
        if (requestedView === "guide") requestedView = "tour";
        if (requestedView) trackViewOpened(requestedView);
      } catch (error) {}
    } else if (window.location.pathname === "/" || /\/index\.html$/i.test(window.location.pathname)) {
      once("landing_page_viewed", function () { trackEvent("landing_page_viewed"); });
    }

    document.addEventListener("click", function (event) {
      try {
        var target = event.target && event.target.closest
          ? event.target.closest("a, button")
          : null;
        if (!target) return;

        var mentorCard = target.closest(".mentor-card[data-mentor-analytics-id]");
        if (mentorCard) {
          trackEvent("mentor_card_clicked", {
            mentor_id: mentorCard.getAttribute("data-mentor-analytics-id")
          });
        }

        if (target.matches(".mobile-back-to-results")) trackMentorProfileClosed();

        if (target.matches("a.booking-button[data-mentor-analytics-id][data-scheduling-method]")) {
          var schedulingMentorId = target.getAttribute("data-mentor-analytics-id");
          var schedulingMethod = target.getAttribute("data-scheduling-method");
          var schedulingProperties = {
            mentor_id: schedulingMentorId,
            scheduling_method: schedulingMethod
          };
          if (isOpaqueMentorId(schedulingMentorId) &&
              allowedTagValues.scheduling_method.has(normalizeToken(schedulingMethod))) {
            trackEvent("scheduling_option_clicked", schedulingProperties);
            if (schedulingMethod === "email") trackEvent("email_mentor_clicked", schedulingProperties);
            if (schedulingMethod === "bookings") trackEvent("bookings_link_clicked", schedulingProperties);
            if (schedulingMethod === "external") trackEvent("external_scheduling_link_clicked", schedulingProperties);
            oncePerSession("scheduling_intent_reached", function () {
              trackEvent("scheduling_intent_reached", schedulingProperties);
            });
          }
        }

        var href = target.getAttribute("href") || "";
        if (href.indexOf("/.auth/login/aad") !== -1) trackEvent("yale_sign_in_clicked");

        var mode = navigationModeFromElement(target);
        if (!mode) return;
        var navigationEvent = getDeviceExperience() === "mobile"
          ? "mobile_navigation_selected"
          : "desktop_navigation_selected";
        trackEvent(navigationEvent, { selected_navigation_mode: mode });
        if (isApp) {
          if (mode === "tour") trackMentorProfileClosed();
          trackViewOpened(mode);
        }
      } catch (error) {
        // Delegated analytics must never interfere with the original click.
      }
    }, true);
  }

  window.TMACSAnalytics = Object.freeze({
    initializeAnalytics: initializeAnalytics,
    trackEvent: trackEvent,
    setAnalyticsTag: setAnalyticsTag,
    trackMatchViewOpened: trackMatchViewOpened,
    trackBrowseViewOpened: trackBrowseViewOpened,
    trackMentorProfileOpened: trackMentorProfileOpened,
    trackMentorProfileClosed: trackMentorProfileClosed,
    observeMentorProfileSections: observeMentorProfileSections
  });

  initializeAnalytics();
})();
