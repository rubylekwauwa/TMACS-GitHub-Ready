(function(){
  function isMobile(){
    return window.innerWidth <= 768;
  }

  function removeMobileMatchCelebration(){
    var cards = document.querySelectorAll('.mobile-results-celebration');
    for (var i = 0; i < cards.length; i += 1) cards[i].remove();
    document.body.classList.remove('mobile-celebration-active');
  }

  function resetBrowseResults(){
    if (!isMobile()) return;

    document.body.classList.remove('mobile-personalized-results');
    removeMobileMatchCelebration();

    var ids = ['search', 'specialtyFilter', 'focusFilter', 'matchKeyword'];
    for (var i = 0; i < ids.length; i += 1) {
      var field = document.getElementById(ids[i]);
      if (field) field.value = '';
    }

    var selectIds = ['matchSpecialty', 'matchFocus'];
    for (var j = 0; j < selectIds.length; j += 1) {
      var select = document.getElementById(selectIds[j]);
      if (select) select.selectedIndex = 0;
    }

    if (typeof resetResultsHeader === 'function') resetResultsHeader();
    if (typeof refresh === 'function') refresh(true);
    else if (typeof filterMentors === 'function') filterMentors();
  }

  function getMatchStats(){
    var scoreEls = document.querySelectorAll('#mentorList .match-score');
    var scores = [];
    for (var i = 0; i < scoreEls.length; i += 1) {
      var text = scoreEls[i].textContent || '';
      var found = text.match(/(\d+)/);
      if (found) scores.push(Number(found[1]));
    }

    var best = 0;
    var excellent = 0;
    var strong = 0;
    for (var k = 0; k < scores.length; k += 1) {
      best = Math.max(best, scores[k]);
      if (scores[k] >= 75) excellent += 1;
      else if (scores[k] >= 50) strong += 1;
    }

    return { total:excellent + strong, best:best, excellent:excellent, strong:strong };
  }

  function showMobileMatchCelebration(){
    if (!isMobile()) return;

    var title = document.getElementById('resultsTitle');
    if (!title || !/Personalized Mentor Recommendations/i.test(title.textContent || '')) {
      removeMobileMatchCelebration();
      return;
    }

    var stats = getMatchStats();
    if (!stats.total) return;

    var card = document.querySelector('.mobile-results-celebration');
    if (!card) {
      card = document.createElement('section');
      card.className = 'mobile-results-celebration';
      card.setAttribute('aria-label', 'Personalized match celebration');
      document.body.appendChild(card);
    }

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

    document.body.classList.add('mobile-celebration-active');
    card.classList.remove('leaving');

    window.clearTimeout(window.__mobileCelebrationTimer);
    window.__mobileCelebrationTimer = window.setTimeout(revealMatches, 3600);
  }

  function revealMatches(){
    var card = document.querySelector('.mobile-results-celebration');
    if (!card) return;

    card.classList.add('leaving');
    window.setTimeout(function(){
      removeMobileMatchCelebration();
      if (typeof window.setMobileView === 'function') window.setMobileView('browse');
      var title = document.getElementById('resultsTitle');
      if (title) title.scrollIntoView({ behavior:'smooth', block:'start' });
    }, 420);
  }

  function moveMobileTourCue(cueName){
    if (!isMobile()) return false;

    var detailContent = document.getElementById('detailContent');
    var step1 = document.getElementById('welcomeStep1');
    var step2 = document.getElementById('welcomeStep2');
    var step3 = document.getElementById('welcomeStep3');
    var schedulePreview = document.getElementById('schedulePreview');
    var connectPop = document.getElementById('connectPop');

    if (typeof clearWelcomeTourClasses === 'function') clearWelcomeTourClasses(false);

    function show(view, selector, highlights){
      if (typeof window.setMobileView === 'function') window.setMobileView(view);
      window.setTimeout(function(){
        if (typeof addTourHighlights === 'function') addTourHighlights(highlights || [selector], false);
        var target = document.querySelector(selector);
        if (target) target.scrollIntoView({ behavior:'smooth', block:'center' });
      }, 180);
    }

    if (cueName === 'intro') {
      show('guide', '#detailPanel', ['#detailPanel']);
      return true;
    }
    if (cueName === 'find-search') {
      if (step1) step1.classList.add('tour-step-active');
      show('guide', '#welcomeStep1', ['#welcomeStep1']);
      return true;
    }
    if (cueName === 'find-browse') {
      if (step1) step1.classList.add('tour-step-active');
      show('guide', '#welcomeStep1', ['#welcomeStep1']);
      return true;
    }
    if (cueName === 'find-map' || cueName === 'map-access' || cueName === 'find-all') {
      if (step1) step1.classList.add('tour-step-active');
      show('guide', '#welcomeStep1', ['#welcomeStep1']);
      return true;
    }
    if (cueName === 'schedule' || cueName === 'schedule-button') {
      if (step1) step1.classList.add('tour-step-complete');
      if (step2) step2.classList.add('tour-step-active');
      if (schedulePreview) schedulePreview.classList.add('visible');
      show('guide', cueName === 'schedule-button' ? '#schedulePreview' : '#welcomeStep2', ['#welcomeStep2', '#schedulePreview', '.preview-button']);
      if (detailContent && step2) detailContent.scrollTo({ top: Math.max(step2.offsetTop - 12, 0), behavior:'smooth' });
      return true;
    }
    if (cueName === 'connect' || cueName === 'complete' || cueName === 'settle') {
      if (step1) step1.classList.add('tour-step-complete');
      if (step2) step2.classList.add('tour-step-complete');
      if (step3) step3.classList.add(cueName === 'complete' || cueName === 'settle' ? 'tour-step-complete' : 'tour-step-active');
      if (connectPop) connectPop.classList.add('visible');
      show('guide', '#welcomeStep3', ['#welcomeStep3']);
      if (detailContent && cueName === 'settle') detailContent.scrollTo({ top:0, behavior:'smooth' });
      return true;
    }

    return false;
  }

  document.addEventListener('click', function(event){
    var browseButton = event.target.closest('.mobile-bottom-nav button[data-view="browse"]');
    if (!browseButton || !isMobile()) return;
    resetBrowseResults();
  }, true);

  document.addEventListener('click', function(event){
    var revealButton = event.target.closest('.mobile-explore-matches');
    if (!revealButton) return;
    revealMatches();
  });

  var observer;
  function startObserver(){
    var root = document.querySelector('.sidebar');
    if (!root || observer) return;
    observer = new MutationObserver(function(){
      window.clearTimeout(window.__mobileMatchSummaryTimer);
      window.__mobileMatchSummaryTimer = window.setTimeout(showMobileMatchCelebration, 120);
    });
    observer.observe(root, { childList:true, subtree:true, characterData:true });
  }

  document.addEventListener('DOMContentLoaded', function(){
    startObserver();
    window.setTimeout(showMobileMatchCelebration, 250);

    var originalCue = window.applyVoiceTourCue;
    window.applyVoiceTourCue = function(cueName){
      if (moveMobileTourCue(cueName)) return;
      if (typeof originalCue === 'function') return originalCue(cueName);
    };
  });

  window.TMACSMobileEnhancements = {
    resetBrowseResults: resetBrowseResults,
    showMobileMatchCelebration: showMobileMatchCelebration,
    revealMatches: revealMatches,
    moveMobileTourCue: moveMobileTourCue
  };
})();
