---
permalink: /
title: "Biography"
excerpt: "About me"
layout: archive
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---
{% include base_path %}

<script src="{{ base_path }}/assets/js/home.js"></script>

<div class="home-page-scope">

  <!-- Top Full-Width Hero Banner Card with Generated Imagery -->
  <div class="home-hero-card" style="background-image: linear-gradient(135deg, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.80) 100%), url('{{ base_path }}/images/home_hero_bg.jpg');">
    <div class="home-hero-content">
      <div class="home-hero-badge">
        <i class="fas fa-university"></i>
        <span>University of Tehran &bull; Department of Electrical &amp; Computer Engineering</span>
      </div>
      <h1 class="home-hero-title">
        <span class="hero-title-icon"><i class="fas fa-user-graduate"></i></span>
        <span>MohammadReza Arani Bidhendi</span>
      </h1>
      <p class="home-hero-subtitle">
        Graduate Researcher in Field &amp; Wave Electromagnetics &bull; RF &amp; Millimeter-Wave Systems, Convex Optimization &amp; Applied AI
      </p>
      <div class="home-hero-stats">
        <div class="home-stat-pill">
          <span class="home-stat-icon"><i class="fas fa-award"></i></span>
          <div class="home-stat-info">
            <span class="home-stat-val">Talent Quota</span>
            <span class="home-stat-lbl">Exam Exemption</span>
          </div>
        </div>
        <div class="home-stat-pill">
          <span class="home-stat-icon"><i class="fas fa-satellite-dish"></i></span>
          <div class="home-stat-info">
            <span class="home-stat-val">77 GHz SIW</span>
            <span class="home-stat-lbl">Radar Antennas</span>
          </div>
        </div>
        <div class="home-stat-pill">
          <span class="home-stat-icon"><i class="fas fa-graduation-cap"></i></span>
          <div class="home-stat-info">
            <span class="home-stat-val">42 Credentials</span>
            <span class="home-stat-lbl">Verified Certificates</span>
          </div>
        </div>
        <div class="home-stat-pill">
          <span class="home-stat-icon"><i class="fas fa-laptop-code"></i></span>
          <div class="home-stat-info">
            <span class="home-stat-val">8 Projects</span>
            <span class="home-stat-lbl">Research Domains</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Multi-Column Layout: Left Author Sidebar + Center Main Content + Right Floating Sticky TOC -->
  <div class="home-page-layout">
    
    <!-- LEFT COLUMN: Sticky Author Profile Card & Academic Links -->
    <aside class="home-left-sidebar" aria-label="Author Profile &amp; Research Links">
      <div class="home-sticky-left-box">
        {% include author-profile.html %}
      </div>
    </aside>

    <!-- CENTER COLUMN: Main Content Area (Spacious & Wide) -->
    <main class="home-main-content">

      <!-- Section 1: Biography -->
      <section class="home-section-card" id="biography">
        <div class="home-section-header">
          <div class="home-section-title-wrap">
            <span class="home-section-icon"><i class="fas fa-user-circle"></i></span>
            <h2 class="home-section-title">Biography</h2>
          </div>
          <span class="home-section-subtitle"><i class="fas fa-id-badge"></i> Academic Background &amp; Research Philosophy</span>
        </div>
        
        <div class="home-bio-body">
          <p>
            I am a graduate student at the <a href="https://ut.ac.ir/en" target="_blank" rel="noopener noreferrer">University of Tehran</a>, studying the Electrical Engineering master program majoring in <strong>Field and wave</strong>. I received my B.Sc. in Electrical Engineering from the <a href="https://ut.ac.ir/en" target="_blank" rel="noopener noreferrer">University of Tehran</a> in 2021 with a brilliant talent quota, which means I was able to register for the master's program without taking the Master's Entrance Exam based on my ranking in the undergraduate program.
          </p>
          <p>
            I am passionate about learning new technologies and concepts, especially those that involve <strong>complex mathematics</strong>. I have a strong foundation in mathematics, which allows me to understand and apply these technologies in creative and innovative ways. My interests tend over in <strong>optimization</strong>, <strong>machine learning</strong>, <strong>neural networks</strong>, <strong>Biomedical Signal Processing</strong>, and <strong>Brain Signal Processing</strong>. These technologies have the potential to revolutionize many industries and solve some of the world's most challenging problems. I am excited to be a part of this revolution and to use these technologies to make a positive impact on the world.
          </p>
          <p>
            One of the most important tasks of any researcher is to apply available tools and methods in our enriched engineering literature to address today's world's issues in different areas from <strong>transportation</strong> (Autonomous Vehicles) to <strong>Social Media Management</strong> (including recommender systems) and absolutely to <strong>Medical</strong> areas where one can restore disabled's will and power to live normally.
          </p>
          <p>
            I believe that most problems can be solved if we are willing to look at them from a different angle. I find it a great pleasure to use my mathematical skills to solve complex problems, especially those that involve modeling high-dimensional problems with matrix notations and taking advantage of convex optimization to find optimal solutions. I am confident that my skills and interests make me a valuable asset to any team. I believe in <strong>hard deep work</strong> which gives me the power to <strong>learn new things fast</strong>. I am also a <strong>team player</strong> and willing to help others.
          </p>
        </div>

        <!-- Featured Action Cards for Projects and CV -->
        <div class="home-featured-action-grid">
          <a href="{{ base_path }}/Projects.html" class="home-featured-card home-card--projects">
            <div class="home-featured-card-top">
              <span class="home-featured-icon"><i class="fas fa-project-diagram"></i></span>
              <span class="home-featured-badge">8 Topics</span>
            </div>
            <h3 class="home-featured-title">Engineering Projects</h3>
            <p class="home-featured-desc">
              Explore 77 GHz Slotted SIW radar antennas, convex optimization, FDTD wave simulations, IoT systems, EEG classifiers, and quantum ML.
            </p>
            <div class="home-featured-cta">
              <span>View Research Projects</span>
              <i class="fas fa-arrow-right"></i>
            </div>
          </a>

          <a href="{{ base_path }}/cv/" class="home-featured-card home-card--cv">
            <div class="home-featured-card-top">
              <span class="home-featured-icon"><i class="fas fa-file-invoice"></i></span>
              <span class="home-featured-badge">Curriculum Vitae</span>
            </div>
            <h3 class="home-featured-title">Curriculum Vitae</h3>
            <p class="home-featured-desc">
              Comprehensive academic trajectory, educational appointments at University of Tehran, technical competencies, honors, and credentials.
            </p>
            <div class="home-featured-cta">
              <span>Inspect Full CV</span>
              <i class="fas fa-arrow-right"></i>
            </div>
          </a>
        </div>
      </section>

      
      <!-- Section 2: Recent News & Academic Milestones -->
      <section class="home-section-card" id="recent-news">
        <div class="home-section-header">
          <div class="home-section-title-wrap">
            <span class="home-section-icon"><i class="fas fa-bullhorn"></i></span>
            <h2 class="home-section-title">Recent News &amp; Academic Milestones</h2>
          </div>
          <span class="home-section-subtitle"><i class="fas fa-calendar-check"></i> Trajectory Updates, Standardized Examinations &amp; Research Highlights</span>
        </div>

        <div class="home-news-timeline">

          <div class="home-news-item">
            <span class="news-date-badge"><i class="fas fa-calendar-alt"></i> Oct 2023</span>
            <div class="news-content-box">
              <span class="news-title"><strong>GRE&reg; General Test Completion:</strong> Scored <strong>323 / 340</strong> on the official ETS GRE examination with top-percentile Quantitative Reasoning.</span>
              <a href="{{ base_path }}/cv/#test-scores" class="news-link">View Score Breakdown <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div class="home-news-item">
            <span class="news-date-badge"><i class="fas fa-calendar-alt"></i> Aug 2023</span>
            <div class="news-content-box">
              <span class="news-title"><strong>TOEFL iBT&reg; Score:</strong> Achieved an overall score of <strong>101 / 120</strong> on the official ETS TOEFL examination (Advanced Reading &amp; Listening).</span>
              <a href="{{ base_path }}/cv/#test-scores" class="news-link">View Subscores <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div class="home-news-item">
            <span class="news-date-badge"><i class="fas fa-calendar-alt"></i> 2023</span>
            <div class="news-content-box">
              <span class="news-title"><strong>Graduate Teaching Assistantship:</strong> Appointed as Graduate TA for <em>Convex Optimization</em> under Dr. A. Keshavarz at University of Tehran.</span>
              <a href="{{ base_path }}/cv/#teaching-experience" class="news-link">View Teaching Portfolio <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div class="home-news-item">
            <span class="news-date-badge"><i class="fas fa-calendar-alt"></i> Oct 2022</span>
            <div class="news-content-box">
              <span class="news-title"><strong>Journal Paper Published:</strong> Co-authored research article in <em>Scientia Iranica</em> on Smart Microgrid Educational Infrastructure.</span>
              <a href="{{ base_path }}/publications/#journal-articles" class="news-link">View Paper &amp; BibTeX <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div class="home-news-item">
            <span class="news-date-badge"><i class="fas fa-calendar-alt"></i> Jan 2022</span>
            <div class="news-content-box">
              <span class="news-title"><strong>Master's Thesis Commenced:</strong> Formulating multidimensional sensor array optimization under Dr. S. Akhavan for medical brain stimulation.</span>
              <a href="{{ base_path }}/Projects/#bsp-eeg" class="news-link">Explore Research Details <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div class="home-news-item">
            <span class="news-date-badge"><i class="fas fa-calendar-alt"></i> 2021</span>
            <div class="news-content-box">
              <span class="news-title"><strong>Brilliant Talent Quota Honors:</strong> Graduated B.Sc. with honors and admitted to University of Tehran M.Sc. without entrance exam based on top class ranking.</span>
              <a href="{{ base_path }}/cv/#education" class="news-link">View Degree Credentials <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>

        </div>
      </section>

      <!-- Section 3: Research Interests -->
      <section class="home-section-card" id="research-interests">
        <div class="home-section-header">
          <div class="home-section-title-wrap">
            <span class="home-section-icon"><i class="fas fa-flask"></i></span>
            <h2 class="home-section-title">Research Interests</h2>
          </div>
          <span class="home-section-subtitle"><i class="fas fa-compass"></i> Theoretical Foundations &amp; Applied Engineering Domains</span>
        </div>

        <div class="home-interests-grid">
          <div class="interest-topic-card">
            <div class="interest-icon-badge"><i class="fas fa-chart-line"></i></div>
            <div class="interest-text-content">
              <h3 class="interest-title">Optimization &amp; Numerical Methods</h3>
              <p class="interest-desc">Convex optimization, Gradient Descent, Newton-Raphson curvature modeling, high-dimensional matrix formulation, and algorithmic convergence.</p>
              <a href="{{ base_path }}/Projects/#convex-opt" class="interest-deep-link"><i class="fas fa-project-diagram"></i> Explore Convex Optimization Project &rarr;</a>
            </div>
          </div>

          <div class="interest-topic-card">
            <div class="interest-icon-badge"><i class="fas fa-broadcast-tower"></i></div>
            <div class="interest-text-content">
              <h3 class="interest-title">RF Circuits &amp; Systems Design &amp; Implementation</h3>
              <p class="interest-desc">77 GHz millimeter-wave radar front-ends, Substrate Integrated Waveguides (SIW), slotted leaky-wave antennas, and high-frequency RF transmission.</p>
              <a href="{{ base_path }}/Projects/#siw-radar" class="interest-deep-link"><i class="fas fa-satellite-dish"></i> Explore 77 GHz SIW Radar Project &rarr;</a>
            </div>
          </div>

          <div class="interest-topic-card">
            <div class="interest-icon-badge"><i class="fas fa-satellite"></i></div>
            <div class="interest-text-content">
              <h3 class="interest-title">Remote Sensing</h3>
              <p class="interest-desc">Range-Doppler mapping, velocity &amp; range target resolution, automotive radar imaging, and spatial-temporal microwave electromagnetic detection.</p>
            </div>
          </div>

          <div class="interest-topic-card">
            <div class="interest-icon-badge"><i class="fab fa-ethereum"></i></div>
            <div class="interest-text-content">
              <h3 class="interest-title">Blockchain Development (Decentralized Applications)</h3>
              <p class="interest-desc">Smart contracts, Solidity programming, decentralized consensus mechanisms, Web3 application architecture, and cryptographic token protocols.</p>
            </div>
          </div>

          <div class="interest-topic-card interest-topic-card--wide">
            <div class="interest-icon-badge"><i class="fas fa-brain"></i></div>
            <div class="interest-text-content">
              <h3 class="interest-title">Neural Networks &amp; Machine Learning Applications</h3>
              <p class="interest-desc">Biomedical and brain signal processing (EEG / BCI classification), time series forecasting, deep neural network architectures, and quantum ML optimization.</p>
              <a href="{{ base_path }}/Projects/#bsp-eeg" class="interest-deep-link"><i class="fas fa-brain"></i> Explore Neural Signal Processing Project &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Tools & Softwares (Per Screenshot media_1792709561702.png) -->
      <section class="home-section-card" id="tools-softwares">
        <div class="home-section-header">
          <div class="home-section-title-wrap">
            <span class="home-section-icon"><i class="fas fa-laptop-code"></i></span>
            <h2 class="home-section-title">Tools &amp; Softwares</h2>
          </div>
          <span class="home-section-subtitle"><i class="fas fa-chart-bar"></i> Programming Languages &amp; Technical Proficiency</span>
        </div>

        <div class="prof-table-card">
          <div class="table-responsive">
            <table class="home-prof-table" aria-label="Programming Language Proficiency">
              <thead>
                <tr>
                  <th class="th-lang"><i class="fas fa-terminal"></i> Programming Language</th>
                  <th class="th-prof"><i class="fas fa-tachometer-alt"></i> Proficiency Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="td-lang">
                    <span class="lang-icon lang-icon--matlab"><i class="fas fa-microchip"></i></span>
                    <span class="lang-name">MATLAB</span>
                  </td>
                  <td class="td-prof">
                    <div class="prof-bar-track">
                      <div class="prof-bar-fill prof-fill--green" style="width: 90%;">
                        <span class="prof-bar-label">90%</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="td-lang">
                    <span class="lang-icon lang-icon--python"><i class="fab fa-python"></i></span>
                    <span class="lang-name">Python</span>
                  </td>
                  <td class="td-prof">
                    <div class="prof-bar-track">
                      <div class="prof-bar-fill prof-fill--green" style="width: 90%;">
                        <span class="prof-bar-label">90%</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="td-lang">
                    <span class="lang-icon lang-icon--php"><i class="fab fa-php"></i></span>
                    <span class="lang-name">PHP</span>
                  </td>
                  <td class="td-prof">
                    <div class="prof-bar-track">
                      <div class="prof-bar-fill prof-fill--lime" style="width: 60%;">
                        <span class="prof-bar-label">60%</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="td-lang">
                    <span class="lang-icon lang-icon--assembly"><i class="fas fa-memory"></i></span>
                    <span class="lang-name">Assembly</span>
                  </td>
                  <td class="td-prof">
                    <div class="prof-bar-track">
                      <div class="prof-bar-fill prof-fill--lime" style="width: 60%;">
                        <span class="prof-bar-label">60%</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="td-lang">
                    <span class="lang-icon lang-icon--c"><i class="fas fa-code"></i></span>
                    <span class="lang-name">C</span>
                  </td>
                  <td class="td-prof">
                    <div class="prof-bar-track">
                      <div class="prof-bar-fill prof-fill--lime" style="width: 60%;">
                        <span class="prof-bar-label">60%</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="td-lang">
                    <span class="lang-icon lang-icon--verilog"><i class="fas fa-project-diagram"></i></span>
                    <span class="lang-name">Verilog</span>
                  </td>
                  <td class="td-prof">
                    <div class="prof-bar-track">
                      <div class="prof-bar-fill prof-fill--lime" style="width: 60%;">
                        <span class="prof-bar-label">60%</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="td-lang">
                    <span class="lang-icon lang-icon--js"><i class="fab fa-js-square"></i></span>
                    <span class="lang-name">Javascript</span>
                  </td>
                  <td class="td-prof">
                    <div class="prof-bar-track">
                      <div class="prof-bar-fill prof-fill--amber" style="width: 40%;">
                        <span class="prof-bar-label">40%</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="td-lang">
                    <span class="lang-icon lang-icon--solidity"><i class="fab fa-ethereum"></i></span>
                    <span class="lang-name">Solidity</span>
                  </td>
                  <td class="td-prof">
                    <div class="prof-bar-track">
                      <div class="prof-bar-fill prof-fill--amber" style="width: 40%;">
                        <span class="prof-bar-label">40%</span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Section 4: Hobbies & Personal Interests -->
      <section class="home-section-card" id="hobbies">
        <div class="home-section-header">
          <div class="home-section-title-wrap">
            <span class="home-section-icon"><i class="fas fa-heart"></i></span>
            <h2 class="home-section-title">Hobbies &amp; Personal Interests</h2>
          </div>
          <span class="home-section-subtitle"><i class="fas fa-smile"></i> Sports, Strategy Games &amp; Endurance</span>
        </div>

        <div class="home-hobbies-grid">
          <div class="hobby-card">
            <div class="hobby-icon-wrap"><i class="fas fa-table-tennis"></i></div>
            <div class="hobby-content">
              <h3 class="hobby-title">Ping-Pong</h3>
              <p class="hobby-desc">Fast-paced table tennis matches emphasizing quick reflexes, spatial accuracy, hand-eye coordination, and tactical spin control.</p>
            </div>
          </div>

          <div class="hobby-card">
            <div class="hobby-icon-wrap"><i class="fas fa-chess"></i></div>
            <div class="hobby-content">
              <h3 class="hobby-title">Chess</h3>
              <p class="hobby-desc">Deep strategic foresight, dynamic opening preparation, endgame precision, positional evaluation, and calculation under time pressure.</p>
            </div>
          </div>

          <div class="hobby-card">
            <div class="hobby-icon-wrap"><i class="fas fa-gamepad"></i></div>
            <div class="hobby-content">
              <h3 class="hobby-title">Playing RTS Games</h3>
              <p class="hobby-desc">Real-Time Strategy titles demanding high-APM multitasking, macro-economic resource balancing, scouting, and real-time situational adaptation.</p>
            </div>
          </div>

          <div class="hobby-card">
            <div class="hobby-icon-wrap"><i class="fas fa-running"></i></div>
            <div class="hobby-content">
              <h3 class="hobby-title">Running</h3>
              <p class="hobby-desc">Endurance road running and cardio conditioning for physical resilience, mental clarity, disciplined pacing, and sustained stamina.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 5: Contact Me -->
      <section class="home-section-card" id="contact-me">
        <div class="home-section-header">
          <div class="home-section-title-wrap">
            <span class="home-section-icon"><i class="fas fa-paper-plane"></i></span>
            <h2 class="home-section-title">Contact Me</h2>
          </div>
          <span class="home-section-subtitle"><i class="fas fa-comments"></i> Inquiries, Collaborations &amp; Academic Discussion</span>
        </div>

        <div class="contact-section-grid">
          <!-- Top Vertical: Modern Contact Form (Spacious Full Width) -->
          <div class="contact-form-card">
            <div class="contact-card-subheading">
              <i class="fas fa-envelope-open-text"></i>
              <span>Send a Direct Message</span>
            </div>
            <p class="contact-form-intro">
              Please fill out the form below to contact me. I will get back to you as soon as possible.
            </p>
            <form action="mailto:mohammadreza.arani.bidhendi@gmail.com" method="post" enctype="text/plain" class="modern-contact-form">
              <div class="form-row-2col">
                <div class="form-group">
                  <label for="contact-name"><i class="fas fa-user"></i> Your Name</label>
                  <input type="text" id="contact-name" name="name" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                  <label for="contact-email"><i class="fas fa-at"></i> Your Email</label>
                  <input type="email" id="contact-email" name="email" placeholder="Your Email" required>
                </div>
              </div>
              <div class="form-group">
                <label for="contact-subject"><i class="fas fa-tag"></i> Subject</label>
                <input type="text" id="contact-subject" name="subject" placeholder="Subject" required>
              </div>
              <div class="form-group">
                <label for="contact-message"><i class="fas fa-pen"></i> Message</label>
                <textarea id="contact-message" name="message" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" class="contact-submit-btn">
                <i class="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>

          <!-- Bottom Vertical: Direct Channels (Spacious Full Width) -->
          <div class="contact-channels-card">
            <div class="contact-card-subheading">
              <i class="fas fa-address-book"></i>
              <span>Direct Communication Channels</span>
            </div>
            <p class="contact-channels-intro">
              You can also contact me directly through any of the following channels:
            </p>

            <div class="contact-channel-items">
              <a href="mailto:mohammadreza.arani.bidhendi@gmail.com" class="channel-pill channel-email">
                <span class="channel-icon"><i class="fas fa-envelope"></i></span>
                <div class="channel-details">
                  <span class="channel-label">Email</span>
                  <span class="channel-value">mohammadreza.arani.bidhendi@gmail.com</span>
                </div>
                <i class="fas fa-chevron-right channel-arrow"></i>
              </a>

              <a href="tel:+989011690305" class="channel-pill channel-phone">
                <span class="channel-icon"><i class="fas fa-phone-alt"></i></span>
                <div class="channel-details">
                  <span class="channel-label">Phone</span>
                  <span class="channel-value">+98 (901) 169-0305</span>
                </div>
                <i class="fas fa-chevron-right channel-arrow"></i>
              </a>

              <a href="https://www.linkedin.com/in/mohammadreza-arani-bidhendi/" target="_blank" rel="noopener noreferrer" class="channel-pill channel-linkedin">
                <span class="channel-icon"><i class="fab fa-linkedin"></i></span>
                <div class="channel-details">
                  <span class="channel-label">LinkedIn</span>
                  <span class="channel-value">mohammadreza-arani-bidhendi</span>
                </div>
                <i class="fas fa-external-link-alt channel-arrow"></i>
              </a>

              <a href="https://stackoverflow.com/users/9048111/s-a-m-ir" target="_blank" rel="noopener noreferrer" class="channel-pill channel-stackoverflow">
                <span class="channel-icon"><i class="fab fa-stack-overflow"></i></span>
                <div class="channel-details">
                  <span class="channel-label">Stack Overflow</span>
                  <span class="channel-value">s-a-m-ir</span>
                </div>
                <i class="fas fa-external-link-alt channel-arrow"></i>
              </a>

              <a href="https://www.researchgate.net/profile/Mohammadreza-Arani" target="_blank" rel="noopener noreferrer" class="channel-pill channel-researchgate">
                <span class="channel-icon"><i class="fab fa-researchgate"></i></span>
                <div class="channel-details">
                  <span class="channel-label">ResearchGate</span>
                  <span class="channel-value">Mohammadreza-Arani</span>
                </div>
                <i class="fas fa-external-link-alt channel-arrow"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>

    <!-- RIGHT COLUMN: Floating Sticky Table of Contents (TOC) -->
    <aside class="home-toc-sidebar" id="home-toc-sidebar" aria-label="Home Table of Contents">
      <div class="home-sticky-toc-box">
        <div class="home-toc-header">
          <h4 class="home-toc-title"><i class="fas fa-bookmark"></i> On This Page</h4>
        </div>
        <nav class="home-toc-nav">
          <ul class="home-toc-menu">
            <li class="home-toc-item">
              <a href="#biography" class="home-toc-link active" data-target="biography" onclick="scrollToHomeSection('biography'); return false;">
                <span class="home-toc-icon"><i class="fas fa-user-circle"></i></span>
                <span class="home-toc-text">Biography</span>
              </a>
            </li>
            <li class="home-toc-item">
              <a href="#recent-news" class="home-toc-link" data-target="recent-news" onclick="scrollToHomeSection('recent-news'); return false;">
                <span class="home-toc-icon"><i class="fas fa-bullhorn"></i></span>
                <span class="home-toc-text">Recent News</span>
              </a>
            </li>
            <li class="home-toc-item">
              <a href="#research-interests" class="home-toc-link" data-target="research-interests" onclick="scrollToHomeSection('research-interests'); return false;">
                <span class="home-toc-icon"><i class="fas fa-flask"></i></span>
                <span class="home-toc-text">Research Interests</span>
              </a>
            </li>
            <li class="home-toc-item">
              <a href="#tools-softwares" class="home-toc-link" data-target="tools-softwares" onclick="scrollToHomeSection('tools-softwares'); return false;">
                <span class="home-toc-icon"><i class="fas fa-laptop-code"></i></span>
                <span class="home-toc-text">Tools &amp; Softwares</span>
              </a>
            </li>
            <li class="home-toc-item">
              <a href="#hobbies" class="home-toc-link" data-target="hobbies" onclick="scrollToHomeSection('hobbies'); return false;">
                <span class="home-toc-icon"><i class="fas fa-heart"></i></span>
                <span class="home-toc-text">Hobbies &amp; Interests</span>
              </a>
            </li>
            <li class="home-toc-item">
              <a href="#contact-me" class="home-toc-link" data-target="contact-me" onclick="scrollToHomeSection('contact-me'); return false;">
                <span class="home-toc-icon"><i class="fas fa-paper-plane"></i></span>
                <span class="home-toc-text">Contact Me</span>
              </a>
            </li>
          </ul>
        </nav>
        <div class="home-toc-footer">
          <a href="#" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); return false;" class="home-toc-top-btn">
            <i class="fas fa-arrow-up"></i> Top of Page
          </a>
        </div>
      </div>
    </aside>

  </div>

  <!-- Mobile Floating Action Button (FAB) -->
  <button type="button" class="home-mobile-toc-fab" id="home-mobile-toc-fab" aria-label="Open Table of Contents">
    <i class="fas fa-list-ul"></i>
    <span>Page TOC</span>
  </button>

  <!-- Mobile TOC Drawer & Backdrop -->
  <div class="home-mobile-toc-backdrop" id="home-mobile-toc-backdrop" style="display:none;"></div>
  <div class="home-mobile-toc-drawer" id="home-mobile-toc-drawer" style="display:none;">
    <div class="home-mobile-drawer-header">
      <div class="home-mobile-drawer-title">
        <i class="fas fa-bookmark"></i>
        <span>On This Page</span>
      </div>
      <button type="button" class="home-mobile-drawer-close" aria-label="Close Table of Contents">&times;</button>
    </div>
    <nav class="home-mobile-drawer-nav">
      <ul class="home-mobile-drawer-list">
        <li><a href="#biography" class="home-toc-link" data-target="biography"><i class="fas fa-user-circle"></i> Biography</a></li>
        <li><a href="#research-interests" class="home-toc-link" data-target="research-interests"><i class="fas fa-flask"></i> Research Interests</a></li>
        <li><a href="#tools-softwares" class="home-toc-link" data-target="tools-softwares"><i class="fas fa-laptop-code"></i> Tools &amp; Softwares</a></li>
        <li><a href="#hobbies" class="home-toc-link" data-target="hobbies"><i class="fas fa-heart"></i> Hobbies &amp; Interests</a></li>
        <li><a href="#contact-me" class="home-toc-link" data-target="contact-me"><i class="fas fa-paper-plane"></i> Contact Me</a></li>
      </ul>
    </nav>
  </div>

</div>

<!-- Full-Width & Responsive Scoped CSS Styles -->
<style>
/* ==========================================================================
   Full Width Page Overrides (Maximal width, matching Projects page)
   ========================================================================== */
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

.home-page-scope {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: #1e293b;
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box;
}

.home-page-scope * {
  box-sizing: border-box;
}

/* ==========================================================================
   Top Full-Width Hero Banner Card
   ========================================================================== */
.home-hero-card {
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 16px;
  padding: 2.25rem 2.25rem;
  margin-bottom: 1.75rem;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ffffff;
  width: 100%;
}

.home-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(14, 165, 233, 0.2);
  border: 1px solid rgba(14, 165, 233, 0.5);
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #7dd3fc;
  margin-bottom: 0.85rem;
}

.home-hero-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.95rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #ffffff !important;
  display: flex;
  align-items: center;
  gap: 12px;
  line-height: 1.25;
}

.hero-title-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, #0ea5e9, #6366f1);
  color: #ffffff;
  font-size: 1.25rem;
  box-shadow: 0 4px 14px rgba(14, 165, 233, 0.35);
  flex-shrink: 0;
}

.home-hero-subtitle {
  margin: 0 0 1.25rem 0;
  font-size: 0.98rem;
  line-height: 1.55;
  color: #e2e8f0;
  max-width: 950px;
}

.home-hero-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

@media (min-width: 768px) {
  .home-hero-stats {
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }
}

.home-stat-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 8px 12px;
  border-radius: 12px;
  transition: transform 0.2s ease, background 0.2s ease;
}

.home-stat-pill:hover {
  transform: translateY(-2px);
  background: rgba(15, 23, 42, 0.85);
}

.home-stat-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(14, 165, 233, 0.25);
  color: #38bdf8;
  font-size: 0.95rem;
  flex-shrink: 0;
}

.home-stat-info {
  display: flex;
  flex-direction: column;
}

.home-stat-val {
  font-size: 0.84rem;
  font-weight: 700;
  color: #f8fafc;
}

.home-stat-lbl {
  font-size: 0.68rem;
  color: #94a3b8;
}

/* ==========================================================================
   Multi-Column Page Layout with Full Height Stretch for Sticky Children
   ========================================================================== */
.home-page-layout {
  display: flex;
  align-items: stretch; /* Crucial: lets both sidebars stretch full height */
  gap: 1.5rem;
  width: 100%;
  position: relative;
}

/* ==========================================================================
   LEFT SIDEBAR: Sticky Author Profile Card
   ========================================================================== */
.home-left-sidebar {
  width: 270px;
  min-width: 270px;
  max-width: 270px;
  flex-shrink: 0;
  align-self: stretch;
  position: relative;
}

.home-sticky-left-box {
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
  max-height: calc(100vh - 95px);
  overflow-y: auto;
}

/* Reset default margin on profile card when inside sticky box */
.home-left-sidebar .author__card-wrapper {
  margin-bottom: 0;
}

/* ==========================================================================
   CENTER MAIN CONTENT (Spacious & Flexible)
   ========================================================================== */
.home-main-content {
  flex: 1;
  min-width: 0;
}

.home-section-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.85rem 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04);
  scroll-margin-top: 85px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.home-section-card:hover {
  border-color: #cbd5e1;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.07);
}

.home-section-card.flash-highlight {
  border-color: #0ea5e9;
  box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.25);
  transition: all 0.3s ease;
}

.home-section-header {
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 1rem;
  margin-bottom: 1.35rem;
}

.home-section-title-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 4px;
}

.home-section-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  color: #0284c7;
  font-size: 1rem;
}

.home-section-title {
  margin: 0;
  font-size: 1.38rem;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.01em;
}

.home-section-subtitle {
  font-size: 0.82rem;
  color: #64748b;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

/* Biography Text */
.home-bio-body {
  font-size: 0.94rem;
  line-height: 1.75;
  color: #334155;
}

.home-bio-body p {
  margin-bottom: 1.25rem;
  text-align: justify;
}

.home-bio-body p:last-child {
  margin-bottom: 1.5rem;
}

.home-bio-body a {
  color: #0284c7;
  text-decoration: underline;
  text-underline-offset: 3px;
  font-weight: 600;
}

.home-bio-body a:hover {
  color: #0369a1;
}

.home-bio-body strong {
  color: #0f172a;
  font-weight: 600;
}

/* Featured Action Cards: Projects & CV */
.home-featured-action-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-top: 1.5rem;
}

@media (min-width: 640px) {
  .home-featured-action-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.home-featured-card {
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 1.35rem 1.4rem;
  text-decoration: none !important;
  color: inherit !important;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.home-featured-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.08);
}

.home-card--projects:hover {
  border-color: #38bdf8;
  background: #f0f9ff;
}

.home-card--cv:hover {
  border-color: #4ade80;
  background: #f0fdf4;
}

.home-featured-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.85rem;
}

.home-featured-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  font-size: 1.15rem;
}

.home-card--projects .home-featured-icon {
  background: #e0f2fe;
  color: #0284c7;
}

.home-card--cv .home-featured-icon {
  background: #dcfce7;
  color: #16a34a;
}

.home-featured-badge {
  font-size: 0.74rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 12px;
}

.home-card--projects .home-featured-badge {
  background: #bae6fd;
  color: #0369a1;
}

.home-card--cv .home-featured-badge {
  background: #bbf7d0;
  color: #15803d;
}

.home-featured-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
}

.home-featured-desc {
  margin: 0 0 1.15rem 0;
  font-size: 0.84rem;
  line-height: 1.55;
  color: #64748b;
  flex-grow: 1;
}

.home-featured-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.84rem;
  font-weight: 700;
}

.home-card--projects .home-featured-cta {
  color: #0284c7;
}

.home-card--cv .home-featured-cta {
  color: #16a34a;
}

/* ==========================================================================
   Research Interests Grid
   ========================================================================== */
.home-interests-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.1rem;
}

@media (min-width: 680px) {
  .home-interests-grid {
    grid-template-columns: 1fr 1fr;
  }
  .interest-topic-card--wide {
    grid-column: span 2;
  }
}

.interest-topic-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.2rem 1.25rem;
  transition: all 0.25s ease;
}

.interest-topic-card:hover {
  transform: translateY(-2px);
  border-color: #cbd5e1;
  background: #ffffff;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
}

.interest-icon-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #0ea5e9, #3b82f6);
  color: #ffffff;
  font-size: 1.05rem;
  flex-shrink: 0;
  box-shadow: 0 3px 10px rgba(14, 165, 233, 0.25);
}

.interest-text-content {
  flex-grow: 1;
}

.interest-title {
  margin: 0 0 0.4rem 0;
  font-size: 0.98rem;
  font-weight: 700;
  color: #0f172a;
}

.interest-desc {
  margin: 0;
  font-size: 0.83rem;
  line-height: 1.5;
  color: #64748b;
}

/* ==========================================================================
   Tools & Softwares Table (Exact Match per media_1792709561702.png)
   ========================================================================== */
.prof-table-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.03);
}

.home-prof-table {
  width: 100%;
  border-collapse: collapse;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  margin: 0;
}

.home-prof-table thead {
  background: #0f172a;
  color: #ffffff;
}

.home-prof-table th {
  padding: 12px 18px;
  font-size: 0.86rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: none;
}

.th-lang {
  text-align: left;
  width: 36%;
}

.th-prof {
  text-align: center;
  width: 64%;
}

.home-prof-table tbody tr {
  border-bottom: 1px solid #f1f5f9;
  transition: background 0.15s ease;
}

.home-prof-table tbody tr:last-child {
  border-bottom: none;
}

.home-prof-table tbody tr:hover {
  background: #f8fafc;
}

.td-lang {
  padding: 11px 18px;
  vertical-align: middle;
  font-weight: 600;
  font-size: 0.9rem;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 12px;
}

.lang-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  font-size: 0.9rem;
}

.lang-icon--matlab { background: #fee2e2; color: #dc2626; }
.lang-icon--python { background: #dbeafe; color: #2563eb; }
.lang-icon--php { background: #ede9fe; color: #7c3aed; }
.lang-icon--assembly { background: #fef3c7; color: #d97706; }
.lang-icon--c { background: #e0e7ff; color: #4338ca; }
.lang-icon--verilog { background: #dcfce7; color: #16a34a; }
.lang-icon--js { background: #fef08a; color: #ca8a04; }
.lang-icon--solidity { background: #f1f5f9; color: #475569; }

.td-prof {
  padding: 11px 18px;
  vertical-align: middle;
}

.prof-bar-track {
  width: 100%;
  height: 30px;
  background: #f1f5f9;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);
  position: relative;
}

.prof-bar-fill {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.prof-bar-label {
  font-size: 0.85rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.02em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
}

/* Exact user colors */
.prof-fill--green {
  background: #3eba25; /* 90% Vibrant Green */
}

.prof-fill--lime {
  background: #84cc16; /* 60% Lime/Yellow-Green */
}

.prof-fill--amber {
  background: #ffba00; /* 40% Amber/Yellow */
}

/* ==========================================================================
   Hobbies & Interests Grid
   ========================================================================== */
.home-hobbies-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.1rem;
}

@media (min-width: 680px) {
  .home-hobbies-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.hobby-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.2rem 1.25rem;
  transition: all 0.25s ease;
}

.hobby-card:hover {
  transform: translateY(-2px);
  border-color: #cbd5e1;
  background: #ffffff;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
}

.hobby-icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #10b981, #06b6d4);
  color: #ffffff;
  font-size: 1.05rem;
  flex-shrink: 0;
  box-shadow: 0 3px 10px rgba(16, 185, 129, 0.25);
}

.hobby-content {
  flex-grow: 1;
}

.hobby-title {
  margin: 0 0 0.4rem 0;
  font-size: 0.98rem;
  font-weight: 700;
  color: #0f172a;
}

.hobby-desc {
  margin: 0;
  font-size: 0.83rem;
  line-height: 1.5;
  color: #64748b;
}

/* ==========================================================================
   Contact Section
   ========================================================================== */
.contact-section-grid {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  width: 100%;
}

.modern-contact-form .form-row-2col {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 600px) {
  .modern-contact-form .form-row-2col {
    grid-template-columns: 1fr 1fr;
  }
}

.contact-form-card,
.contact-channels-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.4rem 1.35rem;
}

.contact-card-subheading {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.contact-card-subheading i {
  color: #0ea5e9;
}

.contact-form-intro,
.contact-channels-intro {
  font-size: 0.84rem;
  color: #64748b;
  margin-bottom: 1.1rem;
  line-height: 1.5;
}

.modern-contact-form .form-group {
  margin-bottom: 0.95rem;
}

.modern-contact-form label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  color: #475569;
  margin-bottom: 0.35rem;
}

.modern-contact-form input,
.modern-contact-form textarea {
  width: 100%;
  padding: 9px 13px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 0.85rem;
  background: #ffffff;
  color: #1e293b;
  box-sizing: border-box;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.modern-contact-form input:focus,
.modern-contact-form textarea:focus {
  outline: none;
  border-color: #0ea5e9;
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.15);
}

.contact-submit-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #0ea5e9, #0284c7);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 0.86rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.25);
  transition: all 0.2s ease;
}

.contact-submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(14, 165, 233, 0.35);
  background: linear-gradient(135deg, #0284c7, #0369a1);
}

.contact-channel-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.channel-pill {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  box-sizing: border-box;
  min-height: 58px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 10px 16px;
  text-decoration: none !important;
  color: inherit !important;
  transition: all 0.2s ease;
}

.channel-pill:hover {
  transform: translateX(4px);
  border-color: #0ea5e9;
  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.08);
}

.channel-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  font-size: 0.95rem;
  flex-shrink: 0;
}

.channel-email .channel-icon { background: #fef2f2; color: #dc2626; }
.channel-phone .channel-icon { background: #f0fdf4; color: #16a34a; }
.channel-linkedin .channel-icon { background: #f0f9ff; color: #0284c7; }
.channel-stackoverflow .channel-icon { background: #fff7ed; color: #ea580c; }
.channel-researchgate .channel-icon { background: #f0fdfa; color: #0d9488; }

.channel-details {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.channel-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #64748b;
  letter-spacing: 0.02em;
}

.channel-value {
  font-size: 0.84rem;
  font-weight: 600;
  color: #0f172a;
}

.channel-arrow {
  font-size: 0.75rem;
  color: #94a3b8;
}

/* ==========================================================================
   RIGHT FLOATING STICKY TABLE OF CONTENTS (TOC)
   ========================================================================== */
.home-toc-sidebar {
  width: 220px;
  min-width: 220px;
  max-width: 220px;
  flex-shrink: 0;
  align-self: stretch; /* Crucial: stretches full column height so sticky works */
  position: relative;
}

.home-sticky-toc-box {
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

.home-toc-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 0.65rem;
  margin-bottom: 0.65rem;
}

.home-toc-title {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 700;
  color: #0f172a;
  display: flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.home-toc-title i {
  color: #0ea5e9;
}

.home-toc-badge {
  font-size: 0.68rem;
  font-weight: 700;
  background: #f0f9ff;
  color: #0284c7;
  padding: 2px 7px;
  border-radius: 10px;
  border: 1px solid #bae6fd;
}

.home-toc-menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

.home-toc-item {
  margin-bottom: 4px;
}

.home-toc-item:last-child {
  margin-bottom: 0;
}

.home-toc-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  border-radius: 8px;
  font-size: 0.79rem;
  font-weight: 600;
  color: #64748b !important;
  text-decoration: none !important;
  border: 1px solid transparent;
  transition: all 0.2s ease;
}

.home-toc-icon {
  width: 16px;
  text-align: center;
  font-size: 0.85rem;
  color: #94a3b8;
  transition: color 0.2s ease;
}

.home-toc-link:hover {
  background: #f8fafc;
  color: #0284c7 !important;
  border-color: #e2e8f0;
}

.home-toc-link:hover .home-toc-icon {
  color: #0284c7;
}

.home-toc-link.active {
  background: #f0f9ff;
  border-color: #bae6fd;
  color: #0284c7 !important;
}

.home-toc-link.active .home-toc-icon {
  color: #0284c7;
}

.home-toc-footer {
  border-top: 1px solid #f1f5f9;
  padding-top: 0.6rem;
  margin-top: 0.6rem;
  text-align: center;
}

.home-toc-top-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.74rem;
  font-weight: 600;
  color: #94a3b8 !important;
  text-decoration: none !important;
  transition: color 0.2s ease;
}

.home-toc-top-btn:hover {
  color: #0ea5e9 !important;
}

/* ==========================================================================
   Mobile Floating Action Button & Drawer
   ========================================================================== */
.home-mobile-toc-fab {
  display: none;
  align-items: center;
  gap: 8px;
  position: fixed;
  bottom: 24px;
  right: 20px;
  z-index: 99;
  background: #0f172a;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 10px 18px;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 700;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.home-mobile-toc-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
  z-index: 1000;
}

.home-mobile-toc-drawer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 80vh;
  background: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 1.25rem 1.25rem 2rem;
  z-index: 1001;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
}

.home-mobile-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 0.75rem;
  margin-bottom: 1rem;
}

.home-mobile-drawer-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
}

.home-mobile-drawer-title i {
  color: #0ea5e9;
}

.home-mobile-drawer-close {
  background: #f1f5f9;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 1.25rem;
  font-weight: 700;
  color: #64748b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-mobile-drawer-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.home-mobile-drawer-list li {
  margin-bottom: 6px;
}

.home-mobile-drawer-list a {
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

.home-mobile-drawer-list a i {
  color: #0ea5e9;
  font-size: 1rem;
}

/* ==========================================================================
   Responsive Breakpoints
   ========================================================================== */
@media (max-width: 1199px) {
  .home-left-sidebar {
    width: 240px;
    min-width: 240px;
    max-width: 240px;
  }
  .home-toc-sidebar {
    width: 200px;
    min-width: 200px;
    max-width: 200px;
  }
}

@media (max-width: 991px) {
  .home-toc-sidebar {
    display: none !important;
  }
  .home-mobile-toc-fab {
    display: inline-flex !important;
  }
}

@media (max-width: 767px) {
  .home-page-layout {
    flex-direction: column !important;
    gap: 1rem !important;
  }
  .home-left-sidebar {
    width: 100% !important;
    min-width: 100% !important;
    max-width: 100% !important;
  }
  .home-sticky-left-box {
    position: static !important;
    max-height: none !important;
    overflow-y: visible !important;
  }
  .home-hero-card {
    padding: 1.5rem 1.25rem;
  }
  .home-hero-title {
    font-size: 1.5rem;
  }
  .home-section-card {
    padding: 1.25rem 1.25rem;
  }
  .home-featured-action-grid {
    grid-template-columns: 1fr;
  }
}

/* ==========================================================================
   Recent News & Milestones Timeline
   ========================================================================== */
.home-news-timeline {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.home-news-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 14px 18px;
  transition: all 0.2s ease;
}

.home-news-item:hover {
  border-color: #0ea5e9;
  background: #ffffff;
  box-shadow: 0 4px 16px rgba(14, 165, 233, 0.08);
}

.news-date-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.76rem;
  font-weight: 700;
  color: #0369a1;
  background: #e0f2fe;
  border: 1px solid #bae6fd;
  padding: 4px 10px;
  border-radius: 6px;
  white-space: nowrap;
  flex-shrink: 0;
}

.news-content-box {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
}

.news-title {
  font-size: 0.88rem;
  line-height: 1.55;
  color: #1e293b;
}

.news-title strong {
  color: #0f172a;
}

.news-link {
  font-size: 0.78rem;
  font-weight: 600;
  color: #0284c7 !important;
  text-decoration: none !important;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  width: fit-content;
  transition: color 0.15s ease;
}

.news-link:hover {
  color: #0369a1 !important;
  text-decoration: underline !important;
}

.interest-deep-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  font-weight: 700;
  color: #0284c7 !important;
  text-decoration: none !important;
  margin-top: 8px;
  transition: all 0.15s ease;
}

.interest-deep-link:hover {
  color: #0369a1 !important;
  transform: translateX(3px);
}

@media (max-width: 600px) {
  .home-news-item {
    flex-direction: column;
    gap: 8px;
  }
}

</style>
