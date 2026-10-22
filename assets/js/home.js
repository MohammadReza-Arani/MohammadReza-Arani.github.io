/* Academic Pages - Home Page & Floating Table of Contents Controller */
(function() {
  /* Section IDs in sequential order */
  var homeSectionIds = [
    'biography',
    'research-interests',
    'tools-softwares',
    'hobbies',
    'contact-me'
  ];

  /* Smooth scroll to section with offset */
  function scrollToHomeSection(targetId) {
    var targetElem = document.getElementById(targetId);
    if (targetElem) {
      var yOffset = -75;
      var y = targetElem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      targetElem.classList.remove('flash-highlight');
      void targetElem.offsetWidth;
      targetElem.classList.add('flash-highlight');

      var tocLinks = document.querySelectorAll('.home-toc-link');
      for (var i = 0; i < tocLinks.length; i++) {
        if (tocLinks[i].getAttribute('data-target') === targetId) {
          tocLinks[i].classList.add('active');
        } else {
          tocLinks[i].classList.remove('active');
        }
      }

      if (history.pushState) {
        history.pushState(null, null, '#' + targetId);
      }
    }
  }

  /* Mobile TOC Drawer Toggle */
  function toggleMobileHomeToc(forceState) {
    var backdrop = document.getElementById('home-mobile-toc-backdrop');
    var drawer = document.getElementById('home-mobile-toc-drawer');
    if (!backdrop || !drawer) return;

    var isOpening = (forceState !== undefined) ? forceState : (drawer.style.display !== 'block');
    if (isOpening) {
      backdrop.style.display = 'block';
      drawer.style.display = 'block';
      document.body.style.overflow = 'hidden';
    } else {
      backdrop.style.display = 'none';
      drawer.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  /* Expose global functions */
  window.scrollToHomeSection = scrollToHomeSection;
  window.toggleMobileHomeToc = toggleMobileHomeToc;

  /* Delegated clicks */
  document.addEventListener('click', function(e) {
    var target = e.target;
    if (!target) return;

    var mobileFab = target.closest('#home-mobile-toc-fab');
    if (mobileFab) {
      if (e.preventDefault) e.preventDefault();
      toggleMobileHomeToc(true);
      return;
    }

    var mobileBackdrop = target.closest('#home-mobile-toc-backdrop');
    if (mobileBackdrop) {
      if (e.preventDefault) e.preventDefault();
      toggleMobileHomeToc(false);
      return;
    }

    var mobileClose = target.closest('.home-mobile-drawer-close');
    if (mobileClose) {
      if (e.preventDefault) e.preventDefault();
      toggleMobileHomeToc(false);
      return;
    }

    var tocLink = target.closest('.home-toc-link');
    if (tocLink) {
      if (e.preventDefault) e.preventDefault();
      var sectionId = tocLink.getAttribute('data-target');
      if (sectionId) {
        scrollToHomeSection(sectionId);
        toggleMobileHomeToc(false);
      }
      return;
    }
  });

  /* Bulletproof scrollspy */
  var scrollTimer = null;
  function updateActiveHomeToc() {
    var currentId = '';
    for (var i = homeSectionIds.length - 1; i >= 0; i--) {
      var elem = document.getElementById(homeSectionIds[i]);
      if (elem) {
        var rect = elem.getBoundingClientRect();
        if (rect.top <= 200) {
          currentId = homeSectionIds[i];
          break;
        }
      }
    }
    if ((window.innerHeight + window.pageYOffset) >= (document.documentElement.scrollHeight - 120)) {
      currentId = homeSectionIds[homeSectionIds.length - 1];
    } else if (!currentId && homeSectionIds.length > 0) {
      currentId = homeSectionIds[0];
    }

    if (currentId) {
      var links = document.querySelectorAll('.home-toc-link');
      for (var j = 0; j < links.length; j++) {
        if (links[j].getAttribute('data-target') === currentId) {
          links[j].classList.add('active');
        } else {
          links[j].classList.remove('active');
        }
      }
    }
  }

  window.addEventListener('scroll', function() {
    if (scrollTimer) clearTimeout(scrollTimer);
    scrollTimer = setTimeout(updateActiveHomeToc, 35);
  }, { passive: true });

  /* URL Hash navigation on page load */
  function checkHash() {
    if (window.location.hash) {
      var hashId = window.location.hash.substring(1);
      if (document.getElementById(hashId)) {
        setTimeout(function() {
          scrollToHomeSection(hashId);
        }, 200);
      }
    } else {
      updateActiveHomeToc();
    }
  }

  /* Keep top navigation tabs visible across all screen sizes */
  function ensureNavTabsVisible() {
    var vlinks = document.querySelector('#site-nav .visible-links');
    var hlinks = document.querySelector('#site-nav .hidden-links');
    var btn = document.querySelector('#site-nav button');
    if (vlinks && hlinks) {
      while (hlinks.children.length > 0) {
        vlinks.appendChild(hlinks.children[0]);
      }
      if (btn) btn.classList.add('hidden');
      hlinks.classList.add('hidden');
    }
  }
  window.addEventListener('resize', ensureNavTabsVisible);

  /* Initialization */
  function init() {
    checkHash();
    ensureNavTabsVisible();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
