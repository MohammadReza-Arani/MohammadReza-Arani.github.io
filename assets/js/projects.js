/* Academic Pages - Projects & Research Controller */
(function() {
  /* Slideshow gallery index */
  var slideIndex = 1;

  /* Smooth scroll to target project section with header offset */
  function scrollToProject(targetId) {
    var targetElem = document.getElementById(targetId);
    if (targetElem) {
      var yOffset = -75;
      var y = targetElem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      targetElem.classList.remove('flash-highlight');
      void targetElem.offsetWidth;
      targetElem.classList.add('flash-highlight');

      var tocLinks = document.querySelectorAll('.proj-toc-link');
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
  function toggleMobileProjectsToc(forceState) {
    var backdrop = document.getElementById('proj-mobile-toc-backdrop');
    var drawer = document.getElementById('proj-mobile-toc-drawer');
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

  /* Gallery Slideshow Controls */
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var slides = document.querySelectorAll('.projects-content-scope .mySlides');
    var dots = document.querySelectorAll('.projects-content-scope .demo');
    var captionText = document.getElementById('caption');
    if (!slides || slides.length === 0) return;

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (var j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace(/\s*\bactive\b/g, '');
    }

    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = 'block';
    }
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].className += ' active';
      if (captionText) {
        captionText.innerHTML = dots[slideIndex - 1].alt || '';
      }
    }
  }

  /* Expose functions on window for inline handlers */
  window.scrollToProject = scrollToProject;
  window.toggleMobileProjectsToc = toggleMobileProjectsToc;
  window.plusSlides = plusSlides;
  window.currentSlide = currentSlide;

  /* Delegated event delegation on document */
  document.addEventListener('click', function(e) {
    var target = e.target;
    if (!target) return;

    var mobileFab = target.closest('#proj-mobile-toc-fab');
    if (mobileFab) {
      if (e.preventDefault) e.preventDefault();
      toggleMobileProjectsToc(true);
      return;
    }

    var mobileBackdrop = target.closest('#proj-mobile-toc-backdrop');
    if (mobileBackdrop) {
      if (e.preventDefault) e.preventDefault();
      toggleMobileProjectsToc(false);
      return;
    }

    var mobileClose = target.closest('.proj-mobile-drawer-close');
    if (mobileClose) {
      if (e.preventDefault) e.preventDefault();
      toggleMobileProjectsToc(false);
      return;
    }

    var tocLink = target.closest('.proj-toc-link');
    if (tocLink) {
      if (e.preventDefault) e.preventDefault();
      var projectId = tocLink.getAttribute('data-target');
      if (projectId) {
        scrollToProject(projectId);
        toggleMobileProjectsToc(false);
      }
      return;
    }
  });

  /* Scrollspy: Highlight TOC link corresponding to active section */
  var scrollTimer = null;
  var projectIds = [
    'Traffic_Sensor',
    'SSIW_Sensor',
    'Optimization_GD',
    'Machine_LAB',
    'Classifier_BSS',
    'FDTD',
    'QML',
    'Array_Opt'
  ];

  window.addEventListener('scroll', function() {
    if (scrollTimer) clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function() {
      var currentId = '';
      for (var i = 0; i < projectIds.length; i++) {
        var elem = document.getElementById(projectIds[i]);
        if (elem) {
          var rect = elem.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 100) {
            currentId = projectIds[i];
          }
        }
      }
      if (currentId) {
        var links = document.querySelectorAll('.proj-toc-link');
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

  /* URL Hash navigation on page load */
  function checkHash() {
    if (window.location.hash) {
      var hashId = window.location.hash.substring(1);
      if (document.getElementById(hashId)) {
        setTimeout(function() {
          scrollToProject(hashId);
        }, 300);
      }
    }
  }

  /* Initialization */
  function init() {
    showSlides(slideIndex);
    checkHash();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();