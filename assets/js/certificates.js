/* Academic Pages - Certificates & Credentials Controller */
(function() {
  /* Expand all domain accordions */
  function expandAllCertificates() {
    var accordions = document.querySelectorAll('.cert-category-accordion');
    for (var i = 0; i < accordions.length; i++) {
      accordions[i].open = true;
      accordions[i].setAttribute('open', '');
    }
  }

  /* Collapse all domain accordions */
  function collapseAllCertificates() {
    var accordions = document.querySelectorAll('.cert-category-accordion');
    for (var i = 0; i < accordions.length; i++) {
      accordions[i].open = false;
      accordions[i].removeAttribute('open');
    }
  }

  /* Filter certificates based on search query */
  function filterCertificates(queryVal) {
    var query = (queryVal || '').trim().toLowerCase();
    var clearBtn = document.getElementById('cert-search-clear');
    var statusElem = document.getElementById('cert-search-status');
    var accordions = document.querySelectorAll('.cert-category-accordion');

    if (clearBtn) {
      clearBtn.style.display = (query.length > 0) ? 'block' : 'none';
    }

    if (query.length > 0) {
      var matchCount = 0;
      var visibleCats = 0;

      for (var i = 0; i < accordions.length; i++) {
        var acc = accordions[i];
        var cards = acc.querySelectorAll('.cert-card');
        var catMatches = 0;

        for (var j = 0; j < cards.length; j++) {
          var card = cards[j];
          var courseName = (card.getAttribute('data-course') || '').toLowerCase();
          var cardText = (card.textContent || card.innerText || '').toLowerCase();
          if (courseName.indexOf(query) !== -1 || cardText.indexOf(query) !== -1) {
            card.style.display = 'flex';
            catMatches++;
            matchCount++;
          } else {
            card.style.display = 'none';
          }
        }

        if (catMatches > 0) {
          acc.style.display = 'block';
          acc.open = true;
          acc.setAttribute('open', '');
          visibleCats++;
        } else {
          acc.style.display = 'none';
        }
      }

      if (statusElem) {
        statusElem.style.display = 'block';
        statusElem.textContent = 'Found ' + matchCount + ' ' + (matchCount === 1 ? 'certificate' : 'certificates') + ' matching "' + queryVal.trim() + '" across ' + visibleCats + ' ' + (visibleCats === 1 ? 'domain' : 'domains') + '.';
      }
    } else {
      if (statusElem) {
        statusElem.style.display = 'none';
        statusElem.textContent = '';
      }
      for (var k = 0; k < accordions.length; k++) {
        accordions[k].style.display = 'block';
        var allCards = accordions[k].querySelectorAll('.cert-card');
        for (var c = 0; c < allCards.length; c++) {
          allCards[c].style.display = 'flex';
        }
      }
    }
  }

  /* Clear search input and restore view */
  function clearCertSearch() {
    var searchInput = document.getElementById('cert-search-input');
    if (searchInput) {
      searchInput.value = '';
      filterCertificates('');
      searchInput.focus();
    }
  }

  /* Smooth scroll to specific domain category */
  function scrollToDomain(targetId) {
    var targetElem = document.getElementById(targetId);
    if (targetElem) {
      targetElem.open = true;
      targetElem.setAttribute('open', '');

      var yOffset = -75;
      var y = targetElem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      targetElem.classList.remove('flash-highlight');
      void targetElem.offsetWidth;
      targetElem.classList.add('flash-highlight');

      var tocLinks = document.querySelectorAll('.certs-toc-link');
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

  /* Toggle mobile drawer */
  function toggleMobileToc(forceState) {
    var backdrop = document.getElementById('certs-mobile-toc-backdrop');
    var drawer = document.getElementById('certs-mobile-toc-drawer');
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

  /* Expose functions on window for inline handlers */
  window.expandAllCertificates = expandAllCertificates;
  window.collapseAllCertificates = collapseAllCertificates;
  window.filterCertificates = filterCertificates;
  window.clearCertSearch = clearCertSearch;
  window.scrollToDomain = scrollToDomain;
  window.toggleMobileToc = toggleMobileToc;

  /* Delegated event delegation on document */
  document.addEventListener('click', function(e) {
    var target = e.target;
    if (!target) return;

    var expandBtn = target.closest('#global-expand-btn');
    if (expandBtn) {
      if (e.preventDefault) e.preventDefault();
      expandAllCertificates();
      return;
    }

    var collapseBtn = target.closest('#global-collapse-btn');
    if (collapseBtn) {
      if (e.preventDefault) e.preventDefault();
      collapseAllCertificates();
      return;
    }

    var clearBtn = target.closest('#cert-search-clear');
    if (clearBtn) {
      if (e.preventDefault) e.preventDefault();
      clearCertSearch();
      return;
    }

    var mobileFab = target.closest('#certs-mobile-toc-fab');
    if (mobileFab) {
      if (e.preventDefault) e.preventDefault();
      toggleMobileToc(true);
      return;
    }

    var mobileBackdrop = target.closest('#certs-mobile-toc-backdrop');
    if (mobileBackdrop) {
      if (e.preventDefault) e.preventDefault();
      toggleMobileToc(false);
      return;
    }

    var mobileClose = target.closest('.certs-mobile-drawer-close');
    if (mobileClose) {
      if (e.preventDefault) e.preventDefault();
      toggleMobileToc(false);
      return;
    }

    var tocLink = target.closest('.certs-toc-link');
    if (tocLink) {
      if (e.preventDefault) e.preventDefault();
      var domainId = tocLink.getAttribute('data-target');
      if (domainId) {
        scrollToDomain(domainId);
        toggleMobileToc(false);
      }
      return;
    }
  });

  /* Search input listener */
  document.addEventListener('input', function(e) {
    if (e.target && e.target.id === 'cert-search-input') {
      filterCertificates(e.target.value);
    }
  });

  /* Escape key to clear search */
  document.addEventListener('keyup', function(e) {
    if (e.target && e.target.id === 'cert-search-input' && e.key === 'Escape') {
      clearCertSearch();
    }
  });

  /* TOC Scrollspy */
  var scrollTimer = null;
  window.addEventListener('scroll', function() {
    if (scrollTimer) clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function() {
      var accordions = document.querySelectorAll('.cert-category-accordion');
      var currentId = '';
      for (var i = 0; i < accordions.length; i++) {
        var rect = accordions[i].getBoundingClientRect();
        if (rect.top <= 180 && rect.bottom >= 100) {
          currentId = accordions[i].id;
        }
      }
      if (currentId) {
        var links = document.querySelectorAll('.certs-toc-link');
        for (var j = 0; j < links.length; j++) {
          if (links[j].getAttribute('data-target') === currentId) {
            links[j].classList.add('active');
          } else {
            links[j].classList.remove('active');
          }
        }
      }
    }, 60);
  }, { passive: true });

  /* URL Hash navigation on load */
  function checkHash() {
    if (window.location.hash) {
      var hashId = window.location.hash.substring(1);
      if (document.getElementById(hashId)) {
        setTimeout(function() {
          scrollToDomain(hashId);
        }, 250);
      }
    }
  }

  /* Ensure all header navigation tabs remain visible on all screen sizes */
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
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      checkHash();
      ensureNavTabsVisible();
    });
  } else {
    checkHash();
    ensureNavTabsVisible();
  }
})();