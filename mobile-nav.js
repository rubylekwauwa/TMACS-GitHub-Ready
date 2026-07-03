(function(){
  function isMobile(){ return window.innerWidth <= 768; }

  function navButtons(){ return document.querySelectorAll('.mobile-bottom-nav button[data-view]'); }

  function activateMobileNav(view){
    navButtons().forEach(function(button){
      button.classList.toggle('mobile-active', button.dataset.view === view);
    });
  }

  function removeCelebration(){
    var cards = document.querySelectorAll('.mobile-results-celebration');
    for (var i = 0; i < cards.length; i += 1) cards[i].remove();
    document.body.classList.remove('mobile-celebration-active');
  }

  function resetBrowseResults(){
    if (!isMobile()) return;
    document.body.classList.remove('mobile-personalized-results');
    removeCelebration();

    var ids = ['search','specialtyFilter','focusFilter','matchKeyword'];
    for (var i = 0; i < ids.length; i += 1) {
      var field = document.getElementById(ids[i]);
      if (field) field.value = '';
    }

    var selectIds = ['matchSpecialty','matchFocus'];
    for (var j = 0; j < selectIds.length; j += 1) {
      var select = document.getElementById(selectIds[j]);
      if (select) select.selectedIndex = 0;
    }

    if (typeof resetResultsHeader === 'function') resetResultsHeader();
    if (typeof refresh === 'function') refresh(true);
  }

  function getMatchStats(){
    var els = document.querySelectorAll('#mentorList .match-score');
    var scores = [];
    for (var i = 0; i < els.length; i += 1) {
      var match = (els[i].textContent || '').match(/(\d+)/);
      if (match) scores.push(Number(match[1]));
    }
    var best = 0, excellent = 0, strong = 0;
    for (var j = 0; j < scores.length; j += 1) {
      best = Math.max(best, scores[j]);
      if (scores[j] >= 75) excellent += 1;
      else if (scores[j] >= 50) strong += 1;
    }
    return { total:excellent + strong, best:best, excellent:excellent, strong:strong };
  }

  function revealMatches(){
    var card = document.querySelector('.mobile-results-celebration');
    if (!card) return;
    card.classList.add('leaving');
    window.setTimeout(function(){
      removeCelebration();
      window.setMobileView('browse');
      var title = document.getElementById('resultsTitle');
      if (title) title.scrollIntoView({ behavior:'smooth', block:'start' });
    }, 420);
  }

  function showCelebration(){
    if (!isMobile()) return;
    var title = document.getElementById('resultsTitle');
    if (!title || !/Personalized Mentor Recommendations/i.test(title.textContent || '')) return;
    if (document.querySelector('.mobile-results-celebration')) return;

    var stats = getMatchStats();
    if (!stats.total) return;

    var card = document.createElement('section');
    card.className = 'mobile-results-celebration';
    card.setAttribute('aria-label', 'Personalized match celebration');
    card.innerHTML = '' +
      '<div class="confetti" aria-hidden="true"></div>' +
      '<div class="mobile-results-phone">' +
        '<div class="mobile-results-kicker">Match Celebration</div>' +
        '<h3>Great news!</h3>' +
        '<p>We found <strong>' + stats.total + '</strong> mentor match' + (stats.total === 1 ? '' : 'es') + ' for you.</p>' +
        '<div class="mobile-match-stat best"><strong>' + stats.best + '%</strong><span>Highest Match</span></div>' +
        '<div class="mobile-match-stat excellent"><strong>' + stats.excellent + '</strong><span>Excellent Matches</span></div>' +
        '<div class="mobile-match-stat strong"><strong>' + stats.strong + '</strong><span>Strong Matches</span></div>' +
        '<button type="button" class="mobile-explore-matches">Reveal Matches -></button>' +
      '</div>';
    document.body.appendChild(card);
    document.body.classList.add('mobile-celebration-active');
    window.clearTimeout(window.__mobileCelebrationTimer);
    window.__mobileCelebrationTimer = window.setTimeout(revealMatches, 3600);
  }

  function resetMapToAllMentors(){
    window.setTimeout(function(){
      var allMentors = window.mentors || (typeof mentors !== 'undefined' ? mentors : null);
      if (typeof resetResultsHeader === 'function') resetResultsHeader();
      if (typeof renderWelcomePanel === 'function') renderWelcomePanel();
      if (typeof render === 'function' && Array.isArray(allMentors)) {
        try { render(allMentors, 'browse'); } catch (error) {}
      }

      var mapObj = window.mapboxMap || window.map;
      if (mapObj && typeof mapObj.resize === 'function') mapObj.resize();
      if (typeof viewAllMentorsOnMap === 'function') viewAllMentorsOnMap();
      else if (mapObj && typeof mapObj.flyTo === 'function') mapObj.flyTo({ center:[-98.5795,39.8283], zoom:3.1, essential:true });
      window.dispatchEvent(new Event('resize'));
    }, 260);
  }

  window.setMobileView = function(view){
    if (!isMobile()) return;
    document.body.setAttribute('data-mobile-view', view);
    activateMobileNav(view);
    if (view === 'guide' && typeof renderWelcomePanel === 'function') renderWelcomePanel();
    if (view === 'map') resetMapToAllMentors();
    window.scrollTo({ top:0, behavior:'smooth' });
  };

  window.scrollToMobileSection = function(section){
    var views = { match:'match', browse:'browse', map:'map', tutorial:'guide', guide:'guide' };
    window.setMobileView(views[section] || 'match');
  };

  function openFeedback(){
    var trigger = document.getElementById('openFeedbackModal');
    if (trigger) trigger.click();
  }

  function moveMobileTourCue(cueName){
    if (!isMobile()) return false;

    if (cueName !== 'find-map' && cueName !== 'map-access') document.body.classList.remove('mobile-tour-map-nav-cue');
    if (cueName !== 'complete') document.body.classList.remove('mobile-tour-final-fade');
    if (cueName !== 'complete' && cueName !== 'settle') document.body.classList.remove('mobile-tour-settled');
    var currentCard = document.querySelector('.welcome-card');
    if (currentCard && cueName !== 'settle') currentCard.classList.remove('mobile-tour-complete-card');

    if (typeof clearWelcomeTourClasses === 'function' && cueName !== 'map-access') clearWelcomeTourClasses(false);

    function highlight(selector, highlights, block){
      window.setTimeout(function(){
        if (typeof addTourHighlights === 'function') addTourHighlights(highlights || [selector], false);
        var target = document.querySelector(selector);
        if (target) target.scrollIntoView({ behavior:'smooth', block:block || 'center' });
      }, 220);
    }

    function showGuide(selector, highlights, afterRender){
      window.setMobileView('guide');
      window.setTimeout(function(){
        var detailContent = document.getElementById('detailContent');
        var step1 = document.getElementById('welcomeStep1');
        var step2 = document.getElementById('welcomeStep2');
        var step3 = document.getElementById('welcomeStep3');
        var schedulePreview = document.getElementById('schedulePreview');
        var connectPop = document.getElementById('connectPop');
        if (afterRender) afterRender({ detailContent:detailContent, step1:step1, step2:step2, step3:step3, schedulePreview:schedulePreview, connectPop:connectPop });
        if (highlights && typeof addTourHighlights === 'function') addTourHighlights(highlights, false);
        var target = document.querySelector(selector);
        if (target) target.scrollIntoView({ behavior:'smooth', block:'center' });
      }, 240);
    }

    if (cueName === 'intro') {
      showGuide('#detailPanel', ['#detailPanel']);
      return true;
    }

    if (cueName === 'find-search') {
      showGuide('#welcomeStep1', ['#welcomeStep1'], function(parts){
        if (parts.step1) parts.step1.classList.add('tour-step-active');
      });
      window.setTimeout(function(){
        if (typeof clearWelcomeTourClasses === 'function') clearWelcomeTourClasses(false);
        window.setMobileView('match');
        highlight('.match-box', ['.match-box']);
      }, 1350);
      return true;
    }

    if (cueName === 'find-browse') {
      window.setMobileView('browse');
      highlight('#resultsTitle', ['#resultsTitle', '#mentorList'], 'start');
      return true;
    }

    if (cueName === 'find-map' || cueName === 'map-access') {
      window.setMobileView('map');
      document.body.classList.add('mobile-tour-map-nav-cue');
      window.clearTimeout(window.__mobileMapNavCueTimer);
      window.__mobileMapNavCueTimer = window.setTimeout(function(){
        document.body.classList.remove('mobile-tour-map-nav-cue');
      }, 8800);
      var mapAlreadyHighlighted = document.querySelector('.map-shell.tour-highlight');
      var mapHighlights = cueName === 'map-access'
        ? (mapAlreadyHighlighted ? ['.map-access-note'] : ['.map-shell', '.map-access-note'])
        : ['.map-shell'];
      highlight('.map-shell', mapHighlights);
      return true;
    }

    if (cueName === 'find-all') {
      window.setMobileView('browse');
      highlight('#mentorList', ['#resultsTitle', '#mentorList'], 'start');
      return true;
    }

    if (cueName === 'schedule' || cueName === 'schedule-button') {
      showGuide(cueName === 'schedule-button' ? '#schedulePreview' : '#welcomeStep2', ['#welcomeStep2','#schedulePreview','.preview-button'], function(parts){
        if (parts.step1) parts.step1.classList.add('tour-step-complete');
        if (parts.step2) parts.step2.classList.add('tour-step-active');
        if (parts.schedulePreview) parts.schedulePreview.classList.add('visible');
        if (parts.detailContent && parts.step2) parts.detailContent.scrollTo({ top:Math.max(parts.step2.offsetTop - 12, 0), behavior:'smooth' });
      });
      return true;
    }

    if (cueName === 'connect') {
      showGuide('#welcomeStep3', ['#welcomeStep3', '#connectPop'], function(parts){
        if (parts.step1) parts.step1.classList.add('tour-step-complete');
        if (parts.step2) parts.step2.classList.add('tour-step-complete');
        if (parts.step3) parts.step3.classList.add('tour-step-active');
        if (parts.schedulePreview) parts.schedulePreview.classList.remove('visible');
        if (parts.connectPop) parts.connectPop.classList.add('visible');
        if (parts.detailContent && parts.step3) parts.detailContent.scrollTo({ top:Math.max(parts.step3.offsetTop - 16, 0), behavior:'smooth' });
      });
      return true;
    }


    if (cueName === 'reset') {
      document.body.classList.remove('mobile-tour-settled', 'mobile-tour-final-fade');
      showGuide('#detailPanel', null, function(parts){
        if (typeof clearWelcomeTourClasses === 'function') clearWelcomeTourClasses(true);
        var card = document.querySelector('.welcome-card');
        if (card) card.classList.remove('mobile-tour-complete-card');
        if (parts.detailContent) parts.detailContent.scrollTo({ top:0, behavior:'smooth' });
      });
      return true;
    }

    if (cueName === 'complete' || cueName === 'settle') {
      document.body.classList.add('mobile-tour-settled');
      if (cueName === 'complete') document.body.classList.add('mobile-tour-final-fade');
      showGuide('#detailPanel', null, function(parts){
        if (typeof clearWelcomeTourClasses === 'function') clearWelcomeTourClasses(false);
        if (parts.step1) parts.step1.classList.add('tour-step-complete');
        if (parts.step2) parts.step2.classList.add('tour-step-complete');
        if (parts.step3) parts.step3.classList.add('tour-step-complete');
        if (parts.schedulePreview) parts.schedulePreview.classList.remove('visible');
        if (parts.connectPop) parts.connectPop.classList.remove('visible');
        var card = document.querySelector('.welcome-card');
        if (card) card.classList.add('mobile-tour-complete-card');
        if (parts.detailContent) parts.detailContent.scrollTo({ top:0, behavior:'smooth' });
      });
      return true;
    }
    return false;
  }

  document.addEventListener('DOMContentLoaded', function(){
    if (!isMobile()) return;
    var views = ['match','browse','map','guide'];
    navButtons().forEach(function(button, index){ button.dataset.view = views[index] || button.dataset.view; });
    document.querySelectorAll('.mobile-bottom-nav button[data-action="feedback"]').forEach(function(button){ delete button.dataset.view; });
    var requested = new URLSearchParams(window.location.search).get('view') || document.body.getAttribute('data-mobile-view') || 'match';
    window.setMobileView(requested);

    var root = document.querySelector('.sidebar');
    if (root) {
      var observer = new MutationObserver(function(){
        window.clearTimeout(window.__mobileCelebrationBuildTimer);
        window.__mobileCelebrationBuildTimer = window.setTimeout(showCelebration, 130);
      });
      observer.observe(root, { childList:true, subtree:true, characterData:true });
    }

    var originalCue = window.applyVoiceTourCue;
    window.applyVoiceTourCue = function(cueName){
      if (moveMobileTourCue(cueName)) return;
      if (typeof originalCue === 'function') return originalCue(cueName);
    };
  });

  var mobileTourTimers = [];

  function clearMobileTourTimers(){
    for (var i = 0; i < mobileTourTimers.length; i += 1) window.clearTimeout(mobileTourTimers[i]);
    mobileTourTimers = [];
  }

  function startMobileVoiceTour(){
    clearMobileTourTimers();
    window.setMobileView('guide');

    var audio = document.getElementById('tourAudio');
    if (audio) {
      try {
        audio.pause();
        audio.currentTime = 0;
        audio.muted = true;
        var beginPlayback = function(){
          audio.currentTime = 0;
          var playPromise = audio.play();
          if (playPromise && typeof playPromise.then === 'function') {
            playPromise.then(function(){
              window.setTimeout(function(){ audio.currentTime = 0; audio.muted = false; }, 120);
            }).catch(function(){ audio.muted = false; });
          } else {
            audio.muted = false;
          }
        };
        if (audio.readyState < 1) {
          audio.addEventListener('loadedmetadata', beginPlayback, { once:true });
          audio.load();
        } else {
          beginPlayback();
        }
      } catch (error) {}
    }

    var cues = [
      { delay:0, cue:'intro' },
      { delay:18000, cue:'find-search' },
      { delay:23400, cue:'find-browse' },
      { delay:27200, cue:'find-map' },
      { delay:31400, cue:'map-access' },
      { delay:38000, cue:'find-all' },
      { delay:40600, cue:'schedule' },
      { delay:47000, cue:'connect' },
      { delay:57200, cue:'complete' },
      { delay:65000, cue:'reset' }
    ];

    for (var i = 0; i < cues.length; i += 1) {
      (function(item){
        mobileTourTimers.push(window.setTimeout(function(){ moveMobileTourCue(item.cue); }, item.delay));
      })(cues[i]);
    }
  }

  document.addEventListener('click', function(event){
    var voiceButton = event.target.closest('.voice-tour-button');
    if (voiceButton && isMobile()) {
      event.preventDefault();
      event.stopImmediatePropagation();
      startMobileVoiceTour();
      return;
    }

    var feedbackButton = event.target.closest('.mobile-bottom-nav button[data-action="feedback"]');
    if (feedbackButton && isMobile()) { event.preventDefault(); openFeedback(); return; }

    var revealButton = event.target.closest('.mobile-explore-matches');
    if (revealButton && isMobile()) { event.preventDefault(); revealMatches(); return; }

    var button = event.target.closest('.mobile-bottom-nav button[data-view]');
    if (!button || !isMobile()) return;
    event.preventDefault();
    if (button.dataset.view === 'browse') resetBrowseResults();
    window.setMobileView(button.dataset.view || 'match');
  }, true);

  window.TMACSMobileEnhancements = {
    resetBrowseResults:resetBrowseResults,
    showCelebration:showCelebration,
    revealMatches:revealMatches,
    moveMobileTourCue:moveMobileTourCue,
    startMobileVoiceTour:startMobileVoiceTour
  };
})();
