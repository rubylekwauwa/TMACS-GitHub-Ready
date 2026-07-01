(function () {
  function isMobile() {
    return window.innerWidth <= 768;
  }

  function setMobileView(view) {
    if (!isMobile()) return;

    document.body.setAttribute("data-mobile-view", view);

    document.querySelectorAll(".mobile-bottom-nav button").forEach(btn => {
      btn.classList.remove("mobile-active");
    });

    const active = document.querySelector(`.mobile-bottom-nav button[data-view="${view}"]`);
    if (active) active.classList.add("mobile-active");

    if (view === "guide" && typeof renderWelcomePanel === "function" && !selectedMentorName) {
  renderWelcomePanel();
}

    if (view === "map" && window.map) {
      setTimeout(() => map.resize(), 250);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.scrollToMobileSection = function (section) {
    const viewMap = {
      match: "match",
      browse: "browse",
      map: "map",
      tutorial: "guide"
    };

    setMobileView(viewMap[section] || "home");
  };

  window.startMobileApp = function () {
    setMobileView("match");
  };

  function enhanceMatchButton() {
    const matchBox = document.querySelector(".match-box");
    const matchButton = matchBox ? matchBox.querySelector("button") : null;

    if (!matchButton || matchButton.dataset.mobileEnhanced === "true") return;

    matchButton.dataset.mobileEnhanced = "true";

    matchButton.addEventListener("click", function () {
      if (!isMobile()) return;

      document.body.classList.add("mobile-matching");

      setTimeout(() => {
        document.body.classList.remove("mobile-matching");
        setMobileView("browse");
      }, 900);
    });
  }

 function enhanceMentorCards() {
  document.addEventListener("click", function (event) {
    const card = event.target.closest(".mentor-card");
    if (!card || !isMobile()) return;

    setTimeout(() => {
      document.body.setAttribute("data-mobile-view", "profile");

      document.querySelectorAll(".mobile-bottom-nav button").forEach(btn => {
        btn.classList.remove("mobile-active");
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 250);
  });
}

  document.addEventListener("DOMContentLoaded", function () {
    if (!isMobile()) return;

    document.body.setAttribute("data-mobile-view", "home");

    const nav = document.querySelector(".mobile-bottom-nav");
    if (nav) {
      const buttons = nav.querySelectorAll("button");
      const views = ["match", "browse", "map", "guide"];

      buttons.forEach((button, index) => {
        button.setAttribute("data-view", views[index]);
      });
    }

    enhanceMatchButton();
    enhanceMentorCards();
  });

  window.addEventListener("resize", function () {
    if (!isMobile()) {
      document.body.removeAttribute("data-mobile-view");
    }
  });
})();
window.addEventListener("scroll", function () {
  if (window.innerWidth > 768) return;

  if (window.scrollY > 60) {
    document.body.classList.add("header-condensed");
  } else {
    document.body.classList.remove("header-condensed");
  }
});
function goBackToMobileResults() {
  if (window.innerWidth > 768) return;

  selectedMentorName = null;

  document.body.setAttribute("data-mobile-view", "browse");

  document.querySelectorAll(".mobile-bottom-nav button").forEach(btn => {
    btn.classList.remove("mobile-active");
  });

  const browseButton = document.querySelector('.mobile-bottom-nav button[data-view="browse"]');
  if (browseButton) browseButton.classList.add("mobile-active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}