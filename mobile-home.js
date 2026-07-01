document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 768) return;

  document.body.classList.remove("mobile-home-hidden");

  const home = document.createElement("section");
  home.id = "mobileHome";

  home.innerHTML = `
    <div class="mobile-home-top">
      <div class="mobile-home-shield">Yale</div>

      <div>
        <div class="mobile-home-logo">T-MACS<br>Alumni Mentor Network</div>
        <div class="mobile-home-tag">Teacher • Mentor • Advisor • Coach • Sponsor</div>
      </div>

      <div class="mobile-home-menu">☰</div>
    </div>

 <div class="mobile-home-content">
  <div class="mobile-home-description">
    Connecting Yale Psychiatry trainees with alumni mentors across the United States and beyond.
  </div>

  <div class="mobile-home-headline">
    Find mentors<br>who can help<br>you thrive. ✨
  </div>

  <div class="mobile-home-line"></div>

  <div class="mobile-home-sub">
    Build relationships.<br>
    Receive guidance.<br>
    Explore your future.
  </div>
</div>

</div>

<div class="mobile-home-buttons">
    <div class="mobile-home-buttons">
      <button class="mobile-home-card mobile-home-primary" id="launchMatch" type="button">
        <span class="mobile-home-icon">✨</span>
        <span class="mobile-home-card-text">
          <strong>Find Your Match</strong>
          <small>Get matched with mentors based on your goals and interests.</small>
        </span>
        <span class="mobile-home-arrow">›</span>
      </button>

      <button class="mobile-home-card mobile-home-secondary" id="launchBrowse" type="button">
        <span class="mobile-home-icon">👥</span>
        <span class="mobile-home-card-text">
          <strong>Browse All Mentors</strong>
          <small>Explore our network of alumni mentors across the United States.</small>
        </span>
        <span class="mobile-home-arrow">›</span>
      </button>

      <button class="mobile-home-card mobile-home-secondary" id="launchTour" type="button">
        <span class="mobile-home-icon">▶️</span>
        <span class="mobile-home-card-text">
          <strong>Take a Tour</strong>
          <small>Learn how T-MACS can support your mentoring journey.</small>
        </span>
        <span class="mobile-home-arrow">›</span>
      </button>
    </div>
  `;

  document.body.prepend(home);

  function openApp(view) {
    document.body.classList.add("mobile-home-hidden");

    setTimeout(() => {
      if (typeof setMobileView === "function") {
        setMobileView(view);
      } else {
        document.body.setAttribute("data-mobile-view", view);
      }
    }, 250);
  }

  document.getElementById("launchMatch").addEventListener("click", () => openApp("match"));
  document.getElementById("launchBrowse").addEventListener("click", () => openApp("browse"));
  document.getElementById("launchTour").addEventListener("click", () => openApp("guide"));
});