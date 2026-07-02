
  function isMobile() {
    return window.innerWidth <= 768;
  }

  window.setMobileView = function (view) {
    if (!isMobile()) return;

    document.body.setAttribute("data-mobile-view", view);

    if (view === "browse") {
  document.body.classList.remove("mobile-personalized-results");

  const celebration = document.querySelector(".mobile-match-celebration-screen");
  if (celebration) celebration.classList.remove("visible", "fade-out");

  setTimeout(() => {
    const browseTarget =
      document.querySelector(".browse-title") ||
      document.querySelector("#mentorList") ||
      document.querySelector(".sidebar");

    if (browseTarget) {
      browseTarget.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 150);
}

    document.querySelectorAll(".mobile-bottom-nav button").forEach(btn => {
      btn.classList.remove("mobile-active");
    });

    const active = document.querySelector(`.mobile-bottom-nav button[data-view="${view}"]`);
    if (active) active.classList.add("mobile-active");

    if (view === "guide" && typeof renderWelcomePanel === "function") {
      renderWelcomePanel();
    }

 if (view === "map") {
  setTimeout(() => {
    const mapObj =
      (window.mapboxMap && typeof window.mapboxMap.flyTo === "function")
        ? window.mapboxMap
        : (window.map && typeof window.map.flyTo === "function")
          ? window.map
          : null;

    if (mapObj) {
      mapObj.resize();

      mapObj.flyTo({
        center: [-98, 43],
        zoom: 2.8,
        essential: true
      });
    }

    window.dispatchEvent(new Event("resize"));
  }, 350);
}

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.scrollToMobileSection = function (section) {
    const map = {
      match: "match",
      browse: "browse",
      map: "map",
      tutorial: "guide"
    };

    window.setMobileView(map[section] || "match");
  };

function showCelebrationScreen() {
  let celebration = document.querySelector(".mobile-match-celebration-screen");

  if (!celebration) {
    celebration = document.createElement("div");
    celebration.className = "mobile-match-celebration-screen";
    celebration.innerHTML = `
      <div class="celebration-icon">🎉</div>
      <h2>Congratulations!</h2>
      <p>We found personalized mentor matches for you.</p>
    `;
    document.body.appendChild(celebration);
  }

  celebration.classList.remove("fade-out");

  requestAnimationFrame(() => {
    celebration.classList.add("visible");
  });

  setTimeout(() => {
    celebration.classList.add("fade-out");

    setTimeout(() => {
      celebration.classList.remove("visible", "fade-out");

      if (typeof setMobileView === "function") {
        setMobileView("browse");
      } else {
        document.body.setAttribute("data-mobile-view", "browse");
      }

      setTimeout(() => {
        const topMatches = document.querySelector(".browse-title") || document.querySelector("#mentorList");
        if (topMatches) {
          topMatches.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 250);
    }, 450);
  }, 2500);
}
function enhanceMatchButton() {
  const matchBox = document.querySelector(".match-box");
  const matchButton = matchBox ? matchBox.querySelector("button") : null;

  if (!matchButton || matchButton.dataset.mobileEnhanced === "true") return;

  matchButton.dataset.mobileEnhanced = "true";

  matchButton.addEventListener("click", function () {
    if (!isMobile()) return;

    setTimeout(() => {
      showCelebrationScreen();
    }, 300);
  });
}

  function enhanceMentorCards() {
    document.addEventListener("click", function (event) {
      const card = event.target.closest(".mentor-card");
      if (!card || !isMobile()) return;

      setTimeout(() => {
        window.setMobileView("profile");
      }, 250);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!isMobile()) return;

    document.body.setAttribute("data-mobile-view", "match");

    document.querySelectorAll(".mobile-bottom-nav button").forEach((button, index) => {
      const views = ["match", "browse", "map", "guide"];
      button.setAttribute("data-view", views[index]);
    });

    enhanceMatchButton();
    enhanceMentorCards();
  });

  window.addEventListener("resize", function () {
    if (!isMobile()) {
      document.body.removeAttribute("data-mobile-view");
    }
  });
  document.addEventListener("click", function(event){
  const backButton = event.target.closest(".back-button, .back-to-results, [data-view='browse'], [data-mobile-back='matches']");

  if (!backButton || window.innerWidth > 768) return;

  event.preventDefault();

  if (typeof setMobileView === "function") {
    setMobileView("browse");
  } else {
    document.body.setAttribute("data-mobile-view", "browse");
  }
});window.goBackToMobileResults = function () {
  if (typeof setMobileView === "function") {
    setMobileView("browse");
  } else {
    document.body.setAttribute("data-mobile-view", "browse");
  }

  setTimeout(() => {
    const results =
      document.querySelector(".browse-title") ||
      document.querySelector("#mentorList");

    if (results) {
      results.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, 200);
};
window.goBackToMobileResults = function () {
  if (typeof setMobileView === "function") {
    setMobileView("browse");
  } else {
    document.body.setAttribute("data-mobile-view", "browse");
  }

  setTimeout(() => {
    const target =
      document.querySelector(".browse-title") ||
      document.querySelector("#mentorList") ||
      document.querySelector(".sidebar");

    if (target) {
      target.scrollIntoView({ behavior:"smooth", block:"start" });
    }
  }, 250);
};

document.addEventListener("click", function(event){
  const back = event.target.closest(
    ".back-button, .back-to-results, [data-mobile-back='matches'], [onclick*='goBackToMobileResults']"
  );

  if (!back || window.innerWidth > 768) return;

  event.preventDefault();
  window.goBackToMobileResults();
});document.addEventListener("click", function(event){
  const voiceButton = event.target.closest(
    "#startVoiceTour, .voice-tour-button, [onclick*='startWelcomeVoiceTour']"
  );

  if (!voiceButton || window.innerWidth > 768) return;

  const audio =
    document.querySelector("audio") ||
    document.getElementById("welcomeTourAudio") ||
    document.getElementById("welcomeAudio");

  if (audio) {
    audio.muted = false;
    audio.volume = 1;
    audio.play().catch(err => console.log("Audio play blocked:", err));
  }

  if (typeof startWelcomeVoiceTour === "function") {
    startWelcomeVoiceTour();
  }
});
document.addEventListener("click", function(event){
  const navButton = event.target.closest(".mobile-bottom-nav button");
  if (!navButton || window.innerWidth > 768) return;

  const view = navButton.dataset.view;
  if (!view) return;

  event.preventDefault();

  if (view === "browse") {
    document.body.classList.remove("mobile-personalized-results");

    document.querySelectorAll(".mobile-match-celebration-screen, .mobile-match-celebration")
      .forEach(el => el.remove());

    const keywordInput = document.querySelector("input[type='text'], input[type='search']");
    if (keywordInput) keywordInput.value = "";

    const selects = document.querySelectorAll(".match-box select");
    selects.forEach(select => select.selectedIndex = 0);

    if (typeof filterMentors === "function") {
      filterMentors();
    }
  }

  setMobileView(view);

  if (view === "browse") {
    setTimeout(() => {
      const target = document.querySelector(".browse-title") || document.querySelector("#mentorList");
      if (target) target.scrollIntoView({ behavior:"smooth", block:"start" });
    }, 200);
  }
});function resetToAllMentors() {
  document.body.classList.remove("mobile-personalized-results");

  document.querySelectorAll(".mobile-match-celebration-screen, .mobile-match-celebration")
    .forEach(el => el.remove());

  const inputs = document.querySelectorAll(".match-box input, .match-box select");
  inputs.forEach(el => {
    if (el.tagName === "SELECT") el.selectedIndex = 0;
    else el.value = "";
  });

  if (typeof filterMentors === "function") filterMentors();
  if (typeof renderMentors === "function") renderMentors(window.mentors || mentors || []);
  if (typeof displayMentors === "function") displayMentors(window.mentors || mentors || []);
}

document.addEventListener("click", function(event){
  const browseButton = event.target.closest(".mobile-bottom-nav button[data-view='browse']");
  if (!browseButton || window.innerWidth > 768) return;

  event.preventDefault();
  resetToAllMentors();
  setMobileView("browse");

  setTimeout(() => {
    const target = document.querySelector(".browse-title") || document.querySelector("#mentorList");
    if (target) target.scrollIntoView({ behavior:"smooth", block:"start" });
  }, 250);
});window.applyVoiceTourCue = function(cueName) {
  if (window.innerWidth > 768) return;

  document.querySelectorAll(".mobile-tour-highlight")
    .forEach(el => el.classList.remove("mobile-tour-highlight"));

  function highlight(selector){
    const el = document.querySelector(selector);
    if (el) {
      el.classList.add("mobile-tour-highlight");
      el.scrollIntoView({ behavior:"smooth", block:"center" });
    }
  }

  if (cueName === "find-search" || cueName === "match") {
    setMobileView("match");
    setTimeout(() => highlight(".match-box"), 300);
  }

  if (cueName === "find-browse" || cueName === "browse") {
    setMobileView("browse");
    setTimeout(() => highlight("#mentorList"), 300);
  }

  if (cueName === "find-map" || cueName === "map-access" || cueName === "map") {
    setMobileView("map");
    setTimeout(() => highlight(".map-shell"), 300);
  }

  if (cueName === "schedule" || cueName === "connect" || cueName === "complete") {
    setMobileView("guide");
    setTimeout(() => highlight("#detailPanel"), 300);
  }
};
})();