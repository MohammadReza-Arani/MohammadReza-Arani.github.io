---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: false
redirect_from:
  - /publications.html
---
{% include base_path %}

<div class="publications-scope">

  <!-- Top Hero Banner Card -->
  <div class="pub-hero-card" style="background-image: linear-gradient(135deg, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.82) 100%), url('{{ base_path }}/images/projects_hero_bg.jpg');">
    <div class="pub-hero-content">
      <div class="pub-hero-badge">
        <i class="fas fa-university"></i>
        <span>University of Tehran &bull; Department of Electrical &amp; Computer Engineering</span>
      </div>
      <h1 class="pub-hero-title">
        <span class="pub-hero-icon"><i class="fas fa-book-open"></i></span>
        <span>Publications &amp; Academic Research</span>
      </h1>
      <p class="pub-hero-subtitle">
        Peer-reviewed journal articles, academic graduate and undergraduate theses, and research contributions spanning smart grid telemetry, 77 GHz RF radar sensors, and multidimensional sensor array optimization.
      </p>
      <div class="pub-hero-stats">
        <div class="pub-stat-pill">
          <span class="pub-stat-icon"><i class="fas fa-file-alt"></i></span>
          <div class="pub-stat-info">
            <span class="pub-stat-val">1 Article</span>
            <span class="pub-stat-lbl">Scientia Iranica</span>
          </div>
        </div>
        <div class="pub-stat-pill">
          <span class="pub-stat-icon"><i class="fas fa-graduation-cap"></i></span>
          <div class="pub-stat-info">
            <span class="pub-stat-val">2 Theses</span>
            <span class="pub-stat-lbl">M.Sc. &amp; B.Sc. Degrees</span>
          </div>
        </div>
        <a href="https://scholar.google.com/citations?hl=en&user=hgi3rPAAAAAJ" target="_blank" rel="noopener noreferrer" class="pub-scholar-btn">
          <i class="fas fa-graduation-cap"></i>
          <span>Google Scholar Profile</span>
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  </div>

  <!-- Multi-Column Layout: Center Content Area + Right Floating Sticky TOC -->
  <div class="pub-page-layout">

    <!-- MAIN CONTENT AREA -->
    <main class="pub-main-content">

      <!-- Section 1: Peer-Reviewed Journal Articles -->
      <section class="pub-section-card" id="journal-articles">
        <div class="pub-section-header">
          <div class="pub-section-title-wrap">
            <span class="pub-section-icon"><i class="fas fa-award"></i></span>
            <h2 class="pub-section-title">Peer-Reviewed Journal Articles</h2>
          </div>
          <span class="pub-section-subtitle"><i class="fas fa-check-circle"></i> Published in Indexed Academic Journals</span>
        </div>

        <div class="pub-entry-card">
          <div class="pub-entry-badge-row">
            <span class="pub-type-badge journal"><i class="fas fa-file-invoice"></i> Journal Paper</span>
            <span class="pub-year-badge"><i class="fas fa-calendar-alt"></i> 2022</span>
            <span class="pub-venue-badge"><i class="fas fa-landmark"></i> Scientia Iranica</span>
          </div>

          <h3 class="pub-entry-title">
            <a href="https://scientiairanica.sharif.edu/article_22050.html" target="_blank" rel="noopener noreferrer">
              Smart microgrid Educational Laboratory: An Integrated Electric and communications infrastructure platform
            </a>
          </h3>

          <p class="pub-entry-authors">
            M. Abedini, T. Vahabzadeh, S. A. Ahmadi, M. H. Karimi, H. Manoochehri, <strong>M. Arani</strong>, et al.
          </p>

          <p class="pub-entry-venue">
            <i class="fas fa-book"></i> <em>Scientia Iranica</em>, International Journal of Science and Technology, Volume 29, Issue 5, Pages 2552&ndash;2565, Sharif University of Technology, 2022.
          </p>

          <div class="pub-tag-list">
            <span class="pub-tag"><i class="fas fa-bolt"></i> Smart Microgrid</span>
            <span class="pub-tag"><i class="fas fa-wifi"></i> XBee Telemetry</span>
            <span class="pub-tag"><i class="fas fa-microchip"></i> Raspberry Pi</span>
            <span class="pub-tag"><i class="fab fa-python"></i> PyQt5 GUI</span>
            <span class="pub-tag"><i class="fas fa-network-wired"></i> SCADA &amp; Monitoring</span>
          </div>

          <!-- Abstract Collapsible Accordion -->
          <details class="pub-abstract-details">
            <summary class="pub-abstract-summary">
              <i class="fas fa-align-left"></i>
              <span>View Abstract</span>
              <i class="fas fa-chevron-down pub-chevron"></i>
            </summary>
            <div class="pub-abstract-body">
              <p>
                This paper presents the practical design and implementation of an integrated electrical and wireless communications infrastructure platform for an educational smart microgrid and electric machines laboratory at the University of Tehran. The platform integrates wireless XBee end-point sensor nodes with Python-based graphical user interfaces (PyQt5) running on Raspberry Pi microcomputers to monitor, acquire, and analyze real-time electrical machine parameters, active/reactive power flows, and network telemetry states. The hardware-software architecture provides students and researchers with hands-on experimentation in distributed energy resources, remote SCADA supervision, and real-time power network state estimation.
              </p>
            </div>
          </details>

          <!-- Action Buttons Bar -->
          <div class="pub-actions-bar">
            <a href="https://scientiairanica.sharif.edu/article_22050.html" target="_blank" rel="noopener noreferrer" class="pub-btn pub-btn-primary">
              <i class="fas fa-external-link-alt"></i> Official Publisher
            </a>
            <a href="https://scientiairanica.sharif.edu/article_22050_dc11eeb3e084737c7a12cab06c43fd08.pdf" target="_blank" rel="noopener noreferrer" class="pub-btn pub-btn-secondary">
              <i class="fas fa-file-pdf"></i> Download PDF
            </a>
            <button type="button" class="pub-btn pub-btn-outline" onclick="copyBibtex('bibtex-abedini-2022', this)">
              <i class="fas fa-quote-right"></i> Copy BibTeX
            </button>
          </div>

          <!-- Hidden BibTeX for Copying -->
          <pre id="bibtex-abedini-2022" style="display:none;">@article{abedini2022smart,
  title={Smart microgrid Educational Laboratory: An Integrated Electric and communications infrastructure platform},
  author={Abedini, M. and Vahabzadeh, T. and Ahmadi, S. A. and Karimi, M. H. and Manoochehri, H. and Arani, M. and others},
  journal={Scientia Iranica},
  volume={29},
  number={5},
  pages={2552--2565},
  year={2022},
  publisher={Sharif University of Technology},
  url={https://scientiairanica.sharif.edu/article_22050.html}
}</pre>
        </div>
      </section>

      <!-- Section 2: Academic Theses & Dissertations -->
      <section class="pub-section-card" id="theses-dissertations">
        <div class="pub-section-header">
          <div class="pub-section-title-wrap">
            <span class="pub-section-icon"><i class="fas fa-graduation-cap"></i></span>
            <h2 class="pub-section-title">Academic Theses &amp; Dissertations</h2>
          </div>
          <span class="pub-section-subtitle"><i class="fas fa-university"></i> Graduate &amp; Undergraduate Degree Research at University of Tehran</span>
        </div>

        <!-- M.Sc. Master's Thesis Card -->
        <div class="pub-entry-card thesis-card">
          <div class="pub-entry-badge-row">
            <span class="pub-type-badge msc"><i class="fas fa-user-graduate"></i> M.Sc. Graduate Thesis</span>
            <span class="pub-year-badge"><i class="fas fa-calendar-alt"></i> 2022 &ndash; 2024</span>
            <span class="pub-venue-badge"><i class="fas fa-university"></i> Univ. of Tehran</span>
          </div>

          <h3 class="pub-entry-title">
            A Novel Framework to Optimize Sensor Arrays in Multi-Dimensions with Physical Constraints for Medical Brain Stimulation and Neural Signal Processing
          </h3>

          <p class="pub-entry-authors">
            <strong>MohammadReza Arani Bidhendi</strong> &bull; Advisor: <strong>Dr. S. Akhavan</strong>
          </p>

          <p class="pub-entry-venue">
            <i class="fas fa-building"></i> Department of Electrical &amp; Computer Engineering, University of Tehran. Degree: Master of Science in Electrical Engineering (Field and Wave) &bull; Defended &amp; Conferred: September 21, 2024.
          </p>

          <div class="pub-thesis-highlights">
            <div class="thesis-highlight-item">
              <i class="fas fa-crosshairs"></i>
              <span><strong>Multidimensional Optimization:</strong> Formulated convex and non-convex mathematical programming to optimize transmitter (TX) and receiver (RX) electrode and coil geometries in 1D, 2D, and 3D space.</span>
            </div>
            <div class="thesis-highlight-item">
              <i class="fas fa-wave-square"></i>
              <span><strong>Medical Biophysics:</strong> Enforced safety power diversity limits, targeted field depth penetration, and maximum spatial resolution for transcranial neuro-stimulation and non-invasive brain EEG telemetry.</span>
            </div>
          </div>

          <div class="pub-tag-list">
            <span class="pub-tag"><i class="fas fa-brain"></i> Neural Signal Processing</span>
            <span class="pub-tag"><i class="fas fa-square-root-alt"></i> Convex Optimization</span>
            <span class="pub-tag"><i class="fas fa-broadcast-tower"></i> Sensor Array Synthesis</span>
            <span class="pub-tag"><i class="fas fa-notes-medical"></i> Brain Stimulation</span>
          </div>

          <div class="pub-actions-bar">
            <a href="{{ base_path }}/Projects/#bsp-eeg" class="pub-btn pub-btn-primary">
              <i class="fas fa-project-diagram"></i> View Research Project
            </a>
            <a href="{{ base_path }}/cv/#research-experience" class="pub-btn pub-btn-secondary">
              <i class="fas fa-file-alt"></i> CV Research Details
            </a>
          </div>
        </div>

        <!-- B.Sc. Undergraduate Thesis Card -->
        <div class="pub-entry-card thesis-card">
          <div class="pub-entry-badge-row">
            <span class="pub-type-badge bsc"><i class="fas fa-award"></i> B.Sc. Undergraduate Project</span>
            <span class="pub-year-badge"><i class="fas fa-calendar-alt"></i> 2021</span>
            <span class="pub-venue-badge"><i class="fas fa-university"></i> Univ. of Tehran</span>
          </div>

          <h3 class="pub-entry-title">
            Design and Full-Wave Simulation of 77 GHz Slotted Substrate Integrated Waveguide (SIW) Sensors and Millimeter-Wave Radar Antennas
          </h3>

          <p class="pub-entry-authors">
            <strong>MohammadReza Arani Bidhendi</strong> &bull; Advisor: <strong>Prof. M. Kamarei</strong>
          </p>

          <p class="pub-entry-venue">
            <i class="fas fa-building"></i> Department of Electrical &amp; Computer Engineering, University of Tehran. Graduated with <strong>Brilliant Talent Quota</strong> (Exam Exemption).
          </p>

          <div class="pub-thesis-highlights">
            <div class="thesis-highlight-item">
              <i class="fas fa-satellite-dish"></i>
              <span><strong>77 GHz Radar Front-End:</strong> Designed conformal slotted SIW antenna arrays operating at 77 GHz for automotive and high-resolution industrial sensing.</span>
            </div>
            <div class="thesis-highlight-item">
              <i class="fas fa-chart-line"></i>
              <span><strong>Electromagnetic Rigor:</strong> Conducted comprehensive full-wave HFSS and CST Studio simulations analyzing S-parameters, radiation patterns, cross-polarization, and mutual coupling.</span>
            </div>
          </div>

          <div class="pub-tag-list">
            <span class="pub-tag"><i class="fas fa-satellite-dish"></i> 77 GHz Radar</span>
            <span class="pub-tag"><i class="fas fa-wave-square"></i> Slotted SIW</span>
            <span class="pub-tag"><i class="fas fa-cogs"></i> HFSS &amp; CST Studio</span>
            <span class="pub-tag"><i class="fas fa-car-crash"></i> Autonomous Vehicles</span>
          </div>

          <div class="pub-actions-bar">
            <a href="{{ base_path }}/Projects/#siw-radar" class="pub-btn pub-btn-primary">
              <i class="fas fa-project-diagram"></i> View 77 GHz SIW Project
            </a>
            <a href="{{ base_path }}/cv/#education" class="pub-btn pub-btn-secondary">
              <i class="fas fa-graduation-cap"></i> View Degree Details
            </a>
          </div>
        </div>
      </section>

      <!-- Section 3: Scholarly Profiles & Citation Indices -->
      <section class="pub-section-card" id="citation-metrics">
        <div class="pub-section-header">
          <div class="pub-section-title-wrap">
            <span class="pub-section-icon"><i class="fas fa-chart-line"></i></span>
            <h2 class="pub-section-title">Scholarly Profiles &amp; Indices</h2>
          </div>
          <span class="pub-section-subtitle"><i class="fas fa-link"></i> Verified External Author Profiles</span>
        </div>

        <div class="pub-profiles-grid">
          <a href="https://scholar.google.com/citations?hl=en&user=hgi3rPAAAAAJ" target="_blank" rel="noopener noreferrer" class="pub-profile-box scholar">
            <div class="profile-box-icon"><i class="fas fa-graduation-cap"></i></div>
            <div class="profile-box-info">
              <span class="profile-box-name">Google Scholar</span>
              <span class="profile-box-sub">Citations &bull; h-index &bull; Verified profile</span>
            </div>
            <i class="fas fa-chevron-right profile-box-arrow"></i>
          </a>

          <a href="https://www.researchgate.net/profile/Mohammadreza-Arani" target="_blank" rel="noopener noreferrer" class="pub-profile-box rg">
            <div class="profile-box-icon"><i class="fab fa-researchgate"></i></div>
            <div class="profile-box-info">
              <span class="profile-box-name">ResearchGate</span>
              <span class="profile-box-sub">RG Score &bull; Research Network &bull; Publications</span>
            </div>
            <i class="fas fa-chevron-right profile-box-arrow"></i>
          </a>

          <a href="https://scientiairanica.sharif.edu/article_22050.html" target="_blank" rel="noopener noreferrer" class="pub-profile-box scientia">
            <div class="profile-box-icon"><i class="fas fa-landmark"></i></div>
            <div class="profile-box-info">
              <span class="profile-box-name">Scientia Iranica</span>
              <span class="profile-box-sub">Sharif Univ. of Tech. &bull; Published Article</span>
            </div>
            <i class="fas fa-chevron-right profile-box-arrow"></i>
          </a>

          <a href="https://ut.ac.ir/en" target="_blank" rel="noopener noreferrer" class="pub-profile-box ut">
            <div class="profile-box-icon"><i class="fas fa-university"></i></div>
            <div class="profile-box-info">
              <span class="profile-box-name">University of Tehran</span>
              <span class="profile-box-sub">Dept. of Electrical &amp; Computer Engineering</span>
            </div>
            <i class="fas fa-chevron-right profile-box-arrow"></i>
          </a>
        </div>
      </section>

    </main>

    <!-- RIGHT FLOATING STICKY TABLE OF CONTENTS -->
    <aside class="pub-toc-sidebar" aria-label="Publications Table of Contents">
      <div class="pub-sticky-toc-box">
        <div class="pub-toc-header">
          <h4 class="pub-toc-title"><i class="fas fa-bookmark"></i> On This Page</h4>
        </div>
        <nav class="pub-toc-nav">
          <ul class="pub-toc-menu">
            <li class="pub-toc-item">
              <a href="#journal-articles" class="pub-toc-link active" onclick="scrollToPubSection('journal-articles'); return false;">
                <span class="pub-toc-icon"><i class="fas fa-award"></i></span>
                <span class="pub-toc-text">Journal Articles</span>
              </a>
            </li>
            <li class="pub-toc-item">
              <a href="#theses-dissertations" class="pub-toc-link" onclick="scrollToPubSection('theses-dissertations'); return false;">
                <span class="pub-toc-icon"><i class="fas fa-graduation-cap"></i></span>
                <span class="pub-toc-text">Theses &amp; Dissertations</span>
              </a>
            </li>
            <li class="pub-toc-item">
              <a href="#citation-metrics" class="pub-toc-link" onclick="scrollToPubSection('citation-metrics'); return false;">
                <span class="pub-toc-icon"><i class="fas fa-chart-line"></i></span>
                <span class="pub-toc-text">Scholarly Profiles</span>
              </a>
            </li>
          </ul>
        </nav>
        <div class="pub-toc-footer">
          <a href="#" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); return false;" class="pub-toc-top-btn">
            <i class="fas fa-arrow-up"></i> Top of Page
          </a>
        </div>
      </div>
    </aside>

  </div>

  <!-- Mobile Floating Action Button (FAB) -->
  <button type="button" class="pub-mobile-toc-fab" id="pub-mobile-toc-fab" onclick="togglePubMobileDrawer(true)" aria-label="Open Table of Contents">
    <i class="fas fa-list-ul"></i>
    <span>Page TOC</span>
  </button>

  <!-- Mobile TOC Drawer & Backdrop -->
  <div class="pub-mobile-toc-backdrop" id="pub-mobile-toc-backdrop" style="display:none;" onclick="togglePubMobileDrawer(false)"></div>
  <div class="pub-mobile-toc-drawer" id="pub-mobile-toc-drawer" style="display:none;">
    <div class="pub-mobile-drawer-header">
      <div class="pub-mobile-drawer-title">
        <i class="fas fa-bookmark"></i>
        <span>On This Page</span>
      </div>
      <button type="button" class="pub-mobile-drawer-close" onclick="togglePubMobileDrawer(false)" aria-label="Close Table of Contents">&times;</button>
    </div>
    <nav class="pub-mobile-drawer-nav">
      <ul class="pub-mobile-drawer-list">
        <li><a href="#journal-articles" onclick="togglePubMobileDrawer(false); scrollToPubSection('journal-articles'); return false;"><i class="fas fa-award"></i> Journal Articles</a></li>
        <li><a href="#theses-dissertations" onclick="togglePubMobileDrawer(false); scrollToPubSection('theses-dissertations'); return false;"><i class="fas fa-graduation-cap"></i> Theses &amp; Dissertations</a></li>
        <li><a href="#citation-metrics" onclick="togglePubMobileDrawer(false); scrollToPubSection('citation-metrics'); return false;"><i class="fas fa-chart-line"></i> Scholarly Profiles</a></li>
      </ul>
    </nav>
  </div>

</div>

<!-- Interactive Client-side Script for BibTeX Copy & Smooth Navigation -->
<script>
function copyBibtex(id, btn) {
  var el = document.getElementById(id);
  if (!el) return;
  var text = el.innerText || el.textContent;
  navigator.clipboard.writeText(text).then(function() {
    var origHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check" style="color:#10b981;"></i> Copied!';
    btn.style.borderColor = '#10b981';
    setTimeout(function() {
      btn.innerHTML = origHTML;
      btn.style.borderColor = '';
    }, 2500);
  }).catch(function(err) {
    alert('Citation copied: \n\n' + text);
  });
}

function scrollToPubSection(id) {
  var el = document.getElementById(id);
  if (el) {
    var offset = 80;
    var bodyRect = document.body.getBoundingClientRect().top;
    var elementRect = el.getBoundingClientRect().top;
    var elementPosition = elementRect - bodyRect;
    var offsetPosition = elementPosition - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
}

function togglePubMobileDrawer(open) {
  var drawer = document.getElementById('pub-mobile-toc-drawer');
  var backdrop = document.getElementById('pub-mobile-toc-backdrop');
  if (drawer && backdrop) {
    if (open) {
      drawer.style.display = 'block';
      backdrop.style.display = 'block';
    } else {
      drawer.style.display = 'none';
      backdrop.style.display = 'none';
    }
  }
}

// Active TOC indicator on scroll
window.addEventListener('scroll', function() {
  var sections = ['journal-articles', 'theses-dissertations', 'citation-metrics'];
  var scrollPos = window.scrollY + 120;
  for (var i = sections.length - 1; i >= 0; i--) {
    var el = document.getElementById(sections[i]);
    if (el && el.offsetTop <= scrollPos) {
      var links = document.querySelectorAll('.pub-toc-link');
      links.forEach(function(l) { l.classList.remove('active'); });
      var activeLink = document.querySelector('.pub-toc-link[href="#' + sections[i] + '"]');
      if (activeLink) activeLink.classList.add('active');
      break;
    }
  }
});
</script>

<!-- Publications Responsive Styles -->
<style>
/* Full-Width Page Overrides */
#main {
  max-width: 98% !important;
  width: 98% !important;
  margin-left: auto !important;
  margin-right: auto !important;
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
  overflow: visible !important;
}

.archive {
  width: 100% !important;
  max-width: 100% !important;
  float: none !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding: 0 !important;
  overflow: visible !important;
}

.archive > .page__title,
.breadcrumbs {
  display: none !important;
}

.publications-scope {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: #1e293b;
  width: 100% !important;
  box-sizing: border-box;
}

.publications-scope * {
  box-sizing: border-box;
}

/* Top Hero Banner */
.pub-hero-card {
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 16px;
  padding: 2.5rem 2.2rem 2.2rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.pub-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(14, 165, 233, 0.2);
  color: #7dd3fc;
  border: 1px solid rgba(56, 189, 248, 0.3);
  padding: 5px 14px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-bottom: 1rem;
}

.pub-hero-title {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 2.1rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 0.85rem 0;
  line-height: 1.25;
}

.pub-hero-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #0ea5e9, #0284c7);
  border-radius: 12px;
  color: #ffffff;
  font-size: 1.3rem;
  flex-shrink: 0;
}

.pub-hero-subtitle {
  font-size: 1rem;
  line-height: 1.6;
  color: #cbd5e1;
  max-width: 900px;
  margin: 0 0 1.5rem 0;
}

.pub-hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.pub-stat-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 8px 14px;
  border-radius: 10px;
}

.pub-stat-icon {
  font-size: 1.1rem;
  color: #38bdf8;
}

.pub-stat-info {
  display: flex;
  flex-direction: column;
}

.pub-stat-val {
  font-size: 0.88rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
}

.pub-stat-lbl {
  font-size: 0.72rem;
  color: #94a3b8;
}

.pub-scholar-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #0284c7, #0369a1);
  color: #ffffff !important;
  text-decoration: none !important;
  padding: 9px 18px;
  border-radius: 10px;
  font-size: 0.86rem;
  font-weight: 600;
  margin-left: auto;
  box-shadow: 0 4px 12px rgba(2, 132, 199, 0.3);
  transition: all 0.2s ease;
}

.pub-scholar-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(2, 132, 199, 0.45);
}

/* Page Layout - Crucial: align-items stretch allows sticky TOC sidebar to span full content height */
.pub-page-layout {
  display: flex;
  align-items: stretch;
  gap: 1.5rem;
  width: 100%;
}

.pub-main-content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

/* Section Cards */
.pub-section-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.75rem 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
}

.pub-section-header {
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 0.9rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.pub-section-title-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
}

.pub-section-icon {
  font-size: 1.2rem;
  color: #0ea5e9;
}

.pub-section-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
}

.pub-section-subtitle {
  font-size: 0.84rem;
  font-weight: 500;
  color: #64748b;
}

/* Publication Entry Cards */
.pub-entry-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.4rem 1.6rem;
  margin-bottom: 1.25rem;
  transition: all 0.2s ease;
}

.pub-entry-card:hover {
  border-color: #cbd5e1;
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.05);
}

.pub-entry-badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-bottom: 0.75rem;
}

.pub-type-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.pub-type-badge.journal { background: #dbeafe; color: #1e40af; }
.pub-type-badge.msc { background: #fef3c7; color: #92400e; }
.pub-type-badge.bsc { background: #e0e7ff; color: #3730a3; }

.pub-year-badge {
  font-size: 0.76rem;
  font-weight: 600;
  color: #475569;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 2px 9px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.pub-venue-badge {
  font-size: 0.76rem;
  font-weight: 600;
  color: #0369a1;
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  padding: 2px 9px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.pub-entry-title {
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.4;
  margin: 0 0 0.5rem 0;
  color: #0f172a;
}

.pub-entry-title a {
  color: #0f172a !important;
  text-decoration: none !important;
  transition: color 0.2s ease;
}

.pub-entry-title a:hover {
  color: #0284c7 !important;
}

.pub-entry-authors {
  font-size: 0.9rem;
  color: #334155;
  margin: 0 0 0.4rem 0;
  line-height: 1.5;
}

.pub-entry-authors strong {
  color: #0284c7;
  font-weight: 700;
}

.pub-entry-venue {
  font-size: 0.84rem;
  color: #64748b;
  margin: 0 0 0.9rem 0;
  line-height: 1.5;
}

/* Tag List */
.pub-tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 1rem;
}

.pub-tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  color: #475569;
  padding: 3px 9px;
  border-radius: 6px;
  font-size: 0.74rem;
  font-weight: 600;
}

.pub-tag i {
  color: #0ea5e9;
  font-size: 0.75rem;
}

/* Abstract Accordion */
.pub-abstract-details {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
}

.pub-abstract-summary {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #334155;
  cursor: pointer;
  background: #f8fafc;
  user-select: none;
}

.pub-abstract-summary i:first-child {
  color: #0ea5e9;
}

.pub-abstract-summary .pub-chevron {
  margin-left: auto;
  font-size: 0.75rem;
  color: #94a3b8;
  transition: transform 0.2s ease;
}

.pub-abstract-details[open] .pub-chevron {
  transform: rotate(180deg);
}

.pub-abstract-body {
  padding: 12px 14px;
  font-size: 0.85rem;
  line-height: 1.6;
  color: #475569;
  border-top: 1px solid #e2e8f0;
}

.pub-abstract-body p {
  margin: 0;
}

/* Actions Bar */
.pub-actions-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.pub-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 14px;
  border-radius: 7px;
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none !important;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pub-btn-primary {
  background: linear-gradient(135deg, #0ea5e9, #0284c7);
  color: #ffffff !important;
  border: none;
}

.pub-btn-primary:hover {
  background: linear-gradient(135deg, #0284c7, #0369a1);
  transform: translateY(-1px);
}

.pub-btn-secondary {
  background: #f1f5f9;
  color: #1e293b !important;
  border: 1px solid #cbd5e1;
}

.pub-btn-secondary:hover {
  background: #e2e8f0;
}

.pub-btn-outline {
  background: #ffffff;
  color: #0284c7 !important;
  border: 1px solid #bae6fd;
}

.pub-btn-outline:hover {
  background: #f0f9ff;
  border-color: #0284c7;
}

/* Thesis Highlights */
.pub-thesis-highlights {
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 10px 14px;
  margin-bottom: 1rem;
}

.thesis-highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  font-size: 0.84rem;
  line-height: 1.5;
  color: #334155;
}

.thesis-highlight-item i {
  color: #0ea5e9;
  font-size: 0.85rem;
  margin-top: 3px;
  flex-shrink: 0;
}

/* Profiles Grid */
.pub-profiles-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

@media (min-width: 600px) {
  .pub-profiles-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.pub-profile-box {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 12px 16px;
  text-decoration: none !important;
  color: inherit !important;
  transition: all 0.2s ease;
}

.pub-profile-box:hover {
  transform: translateY(-2px);
  border-color: #0ea5e9;
  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.1);
}

.profile-box-icon {
  width: 38px;
  height: 38px;
  border-radius: 9px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  flex-shrink: 0;
}

.pub-profile-box.scholar .profile-box-icon { background: #e0f2fe; color: #0284c7; }
.pub-profile-box.rg .profile-box-icon { background: #ccfbf1; color: #0d9488; }
.pub-profile-box.scientia .profile-box-icon { background: #fef3c7; color: #d97706; }
.pub-profile-box.ut .profile-box-icon { background: #ede9fe; color: #7c3aed; }

.profile-box-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.profile-box-name {
  font-size: 0.88rem;
  font-weight: 700;
  color: #0f172a;
}

.profile-box-sub {
  font-size: 0.74rem;
  color: #64748b;
}

.profile-box-arrow {
  color: #cbd5e1;
  font-size: 0.8rem;
}

/* Floating Sticky Table of Contents Sidebar */
.pub-toc-sidebar {
  width: 220px;
  min-width: 220px;
  max-width: 220px;
  flex-shrink: 0;
  align-self: stretch; /* Crucial: stretches full column height so sticky works */
  position: relative;
}

.pub-sticky-toc-box {
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
  max-height: calc(100vh - 95px);
  overflow-y: auto;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 1rem 0.9rem;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);
}

.pub-toc-header {
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 0.65rem;
  margin-bottom: 0.65rem;
}

.pub-toc-title {
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #0f172a;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 7px;
}

.pub-toc-title i {
  color: #0ea5e9;
}

.pub-toc-menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

.pub-toc-item {
  margin-bottom: 4px;
}

.pub-toc-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 0.79rem;
  font-weight: 600;
  color: #64748b !important;
  text-decoration: none !important;
  transition: all 0.15s ease;
}

.pub-toc-link:hover {
  background: #f1f5f9;
  color: #0f172a !important;
}

.pub-toc-link.active {
  background: #e0f2fe;
  color: #0284c7 !important;
  font-weight: 700;
}

.pub-toc-icon {
  font-size: 0.82rem;
  color: #0ea5e9;
  width: 14px;
  text-align: center;
}

.pub-toc-footer {
  border-top: 1px solid #f1f5f9;
  padding-top: 0.65rem;
  margin-top: 0.75rem;
}

.pub-toc-top-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.74rem;
  font-weight: 600;
  color: #64748b !important;
  text-decoration: none !important;
}

.pub-toc-top-btn:hover {
  color: #0284c7 !important;
}

/* Mobile FAB and Drawer */
.pub-mobile-toc-fab {
  display: none;
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: linear-gradient(135deg, #0ea5e9, #0284c7);
  color: #ffffff;
  border: none;
  border-radius: 50px;
  padding: 10px 18px;
  font-size: 0.85rem;
  font-weight: 700;
  box-shadow: 0 6px 20px rgba(14, 165, 233, 0.4);
  cursor: pointer;
  z-index: 990;
  align-items: center;
  gap: 8px;
}

.pub-mobile-toc-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
}

.pub-mobile-toc-drawer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 1.5rem;
  z-index: 1001;
  max-height: 70vh;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
}

.pub-mobile-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 0.75rem;
  margin-bottom: 1rem;
}

.pub-mobile-drawer-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
}

.pub-mobile-drawer-title i {
  color: #0ea5e9;
}

.pub-mobile-drawer-close {
  background: #f1f5f9;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 1.25rem;
  color: #64748b;
  cursor: pointer;
}

.pub-mobile-drawer-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.pub-mobile-drawer-list li {
  margin-bottom: 6px;
}

.pub-mobile-drawer-list a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 600;
  color: #334155 !important;
  text-decoration: none !important;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}

.pub-mobile-drawer-list a i {
  color: #0ea5e9;
}

/* Responsive Media Queries */
@media (max-width: 991px) {
  .pub-toc-sidebar {
    display: none !important;
  }
  .pub-mobile-toc-fab {
    display: inline-flex !important;
  }
}

@media (max-width: 767px) {
  .pub-hero-card {
    padding: 1.5rem 1.25rem;
  }
  .pub-hero-title {
    font-size: 1.5rem;
  }
  .pub-section-card {
    padding: 1.25rem 1.15rem;
  }
  .pub-entry-card {
    padding: 1.15rem 1.15rem;
  }
  .pub-scholar-btn {
    margin-left: 0;
    width: 100%;
    justify-content: center;
  }
}
</style>
