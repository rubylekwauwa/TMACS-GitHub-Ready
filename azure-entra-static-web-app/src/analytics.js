(function () {
  "use strict";

  // Central analytics boundary for T-MACS. Only allowlisted, non-identifying
  // values can reach Microsoft Clarity; all failures are intentionally silent.
  var CLARITY_PROJECT_ID = "x2jiagxeku";
  var CLARITY_SCRIPT_ID = "tmacs-clarity-loader";
  var VISIT_STORAGE_KEY = "tmacs_analytics_has_visited";
  var memoryOnce = Object.create(null);
  var initialized = false;

  var allowedEvents = new Set([
    "landing_page_viewed",
    "yale_sign_in_clicked",
    "app_loaded",
    "mobile_navigation_selected",
    "desktop_navigation_selected",
    "match_view_opened",
    "browse_view_opened",
    "map_view_opened",
    "tour_view_opened"
  ]);

  var allowedTagValues = {
    device_experience: new Set(["mobile", "desktop"]),
    entry_route: new Set(["public_landing", "authenticated_app"]),
    selected_navigation_mode: new Set(["match", "browse", "map", "tour"]),
    visit_type: new Set(["first_time", "returning"]),
    application_area: new Set(["public", "authenticated"])
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
    if (!valueAllowlist || !valueAllowlist.has(safeValue)) return false;
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
    setAnalyticsTag("selected_navigation_mode", mode);
    trackEvent(eventByMode[mode]);
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

        var href = target.getAttribute("href") || "";
        if (href.indexOf("/.auth/login/aad") !== -1) trackEvent("yale_sign_in_clicked");

        var mode = navigationModeFromElement(target);
        if (!mode) return;
        var navigationEvent = getDeviceExperience() === "mobile"
          ? "mobile_navigation_selected"
          : "desktop_navigation_selected";
        trackEvent(navigationEvent, { selected_navigation_mode: mode });
        if (isApp) trackViewOpened(mode);
      } catch (error) {
        // Delegated analytics must never interfere with the original click.
      }
    }, false);
  }

  window.TMACSAnalytics = Object.freeze({
    initializeAnalytics: initializeAnalytics,
    trackEvent: trackEvent,
    setAnalyticsTag: setAnalyticsTag
  });

  initializeAnalytics();
})();
