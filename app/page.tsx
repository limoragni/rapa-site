"use client";

import "./globals.css";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 60);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("juanrapacioli@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div>
          <p className="hero-tag">Content Designer | UX Writing &amp; Content Strategy</p>
          <h1>
            Juan
            <br />
            <em>Rapacioli</em>
          </h1>
          <p className="hero-sub">
            I bridge the gap between business goals and user needs — one word at
            a time. Passionate about the intersection of communication, design,
            and technology.
          </p>
          <div className="hero-contact">
            <button onClick={handleCopyEmail} className="btn btn-primary">
              {copied ? "Email copied!" : "Let\u0027s talk"}
            </button>
            <a
              href="https://www.linkedin.com/in/juanrapacioli"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <span></span> Scroll to explore
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <div className="container">
          <p className="section-label reveal">About me</p>
          <div className="about-grid">
            <div>
              <h2 className="section-title reveal">
                Hi! I&apos;m Juan,
                <br />
                but everyone calls
                <br />
                me <em style={{ fontStyle: "italic", color: "var(--pink)" }}>Rapa.</em>
              </h2>
              <p className="about-intro reveal">
                Content Designer with expertise in{" "}
                <strong>financial services</strong> and{" "}
                <strong>digital banking</strong>, bringing strategic vision,
                analytical skills, and a solution-oriented approach to product
                and application-focused content experiences. I&apos;m driven to
                connect business objectives with user needs, delivering clarity,
                consistency, and closeness across digital channels.
              </p>
            </div>
            <div className="skill-list reveal">
              <div className="skill-item">
                <span className="skill-icon">&#x1F50E;</span>
                <span className="skill-text">
                  Researching, defining, and validating banking flows.
                </span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">&#x270D;&#xFE0F;</span>
                <span className="skill-text">
                  Crafting voice &amp; tone guidelines and style guides.
                </span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">&#x2709;&#xFE0F;</span>
                <span className="skill-text">
                  Creating emails, banners, and push notifications.
                </span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">&#x1F4DA;</span>
                <span className="skill-text">
                  Leading workshops on content best practices.
                </span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">&#x1F5E3;&#xFE0F;</span>
                <span className="skill-text">
                  Storytelling, editing, and inclusive communication.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="tools-section">
        <div className="container">
          <p className="section-label reveal">Toolkit</p>
          <h2 className="section-title reveal">Tools I work with</h2>
          <div className="tools-grid reveal">
            <span className="tool-chip">Figma</span>
            <span className="tool-chip">Adobe XD</span>
            <span className="tool-chip">Miro</span>
            <span className="tool-chip">Notion</span>
            <span className="tool-chip">ChatGPT / AI</span>
            <span className="tool-chip">Claude Cowork</span>
            <span className="tool-chip">Gemini</span>
            <span className="tool-chip">Google Studio</span>
            <span className="tool-chip">Adobe Suite</span>
            <span className="tool-chip">Slack</span>
            <span className="tool-chip">Google Workspace</span>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section>
        <div className="container">
          <p className="section-label reveal">Expertise</p>
          <h2 className="section-title reveal">Skills</h2>
          <div className="skills-cols reveal">
            <div className="skills-card">
              <div className="skills-card-header">
                <span className="skills-card-icon">&#x270D;&#xFE0F;</span>
                <span className="skills-card-title">UX Content</span>
              </div>
              <ul>
                <li>UX Writing</li>
                <li>Copywriting</li>
                <li>Conversational Design</li>
                <li>AI Skills</li>
                <li>UX Content Strategy</li>
                <li>Storytelling</li>
                <li>Design Thinking</li>
              </ul>
            </div>
            <div className="skills-card">
              <div className="skills-card-header">
                <span className="skills-card-icon">&#x1F4D6;</span>
                <span className="skills-card-title">Research</span>
              </div>
              <ul>
                <li>Data Analysis</li>
                <li>Usability Testing</li>
                <li>SEO Writing</li>
                <li>Customer Experience</li>
                <li>User Interviews &amp; Recruiting</li>
                <li>Journalistic Research</li>
                <li>Reporting &amp; Features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MY WORK */}
      <section style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <p className="section-label reveal">Portfolio</p>
          <h2 className="section-title reveal">My work</h2>

          <div className="work-group reveal">
            <h3 className="work-group-title">Banco Galicia</h3>
            <p className="work-group-subtitle">Strategic Accounts</p>
            <div className="work-grid">
              <a
                href="https://www.galicia.ar/empresas/tarjetas-y-cuentas/cuenta-energia-mineria"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                <span className="work-link-icon">&#x26A1;</span> Energy and
                Mining
              </a>
              <a
                href="https://www.galicia.ar/empresas/tarjetas-y-cuentas/cuenta-consumo-masivo"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                <span className="work-link-icon">&#x1F6D2;</span> Mass
                Consumption
              </a>
              <a
                href="https://www.galicia.ar/empresas/tarjetas-y-cuentas/cuenta-automotriz"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                <span className="work-link-icon">&#x1F697;</span> Automotive
              </a>
              <a
                href="https://www.galicia.ar/empresas/app-galicia-office"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                <span className="work-link-icon">&#x1F4F1;</span> Galicia
                Office App
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">Banco Macro</h3>
            <div className="work-grid">
              <a
                href="https://www.macro.com.ar/home-page"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                <span className="work-link-icon">&#x1F4DD;</span> Content
                Design System
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">Digital House</h3>
            <div className="work-grid">
              <a
                href="https://drive.google.com/file/d/1jo8paYFY1HWMJwfXo_P1rFK3Da8q_KGn/view"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                <span className="work-link-icon">&#x1F4DA;</span> Style Guide
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">Cerem Business School</h3>
            <div className="work-grid">
              <a
                href="https://www.cerem.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                <span className="work-link-icon">&#x270F;&#xFE0F;</span>{" "}
                Financial articles &amp; social media
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">
              National University of Tres de Febrero
            </h3>
            <div className="work-grid">
              <a
                href="https://untref.edu.ar/estudiar-en-untref"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                <span className="work-link-icon">&#x1F393;</span> Study
                Methodology
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">Nonconformist</h3>
            <div className="work-grid">
              <a
                href="https://nonconformist.digital/project-galicia.html"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                <span className="work-link-icon">&#x1F680;</span> Content
                Designer
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">Journalism</h3>
            <div className="work-grid">
              <a
                href="https://linktr.ee/jrapacioli"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                <span className="work-link-icon">&#x1F4F0;</span> Articles and
                reviews
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section>
        <div className="container">
          <p className="section-label reveal">Background</p>
          <h2 className="section-title reveal">Work Experience</h2>

          <div className="exp-item reveal">
            <div className="exp-header">
              <h3 className="exp-title">
                Content Designer — Galicia Bank (Nonconformist)
              </h3>
              <span className="exp-date">Jan 2025 – Mar 2026</span>
            </div>
            <ul className="exp-tasks">
              <li>
                Content design for B2B financial products across strategic
                verticals: Energy and Mining, Mass Consumption, and Automotive.
              </li>
              <li>
                Redesign and impact measurement of the new Galicia Office App.
              </li>
              <li>
                Multi-channel content creation: mailings, push notifications,
                banners, POS, HTML, and end-to-end marketing campaign
                development.
              </li>
            </ul>
            <div className="exp-results">
              <p className="exp-results-title">Campaign Results:</p>
              <ul className="exp-tasks">
                <li>
                  Agro Campaign: 1.23% conversion vs 0.25% benchmark (+392%)
                </li>
                <li>
                  Business Repositioning Campaign: 2.97% vs 1.30% benchmark
                  (+128%)
                </li>
                <li>
                  Business App Campaign: 3.23% vs 3.00% benchmark (+8%)
                </li>
              </ul>
            </div>
          </div>

          <div className="exp-item reveal">
            <div className="exp-header">
              <h3 className="exp-title">
                Content Designer — Macro Bank (Nonconformist)
              </h3>
              <span className="exp-date">Apr 2024 – Jan 2025</span>
            </div>
            <ul className="exp-tasks">
              <li>
                Built and iterated the bank&apos;s first Content Design System,
                standardizing voice and tone across multiple teams.
              </li>
              <li>
                Developed and validated the institutional voice and tone manual.
              </li>
              <li>
                Collaborated with research, product, and business teams to align
                clear, approachable, and friendly messaging.
              </li>
            </ul>
          </div>

          <div className="exp-item reveal">
            <div className="exp-header">
              <h3 className="exp-title">UX Writer — Digital House</h3>
              <span className="exp-date">Jan 2022 – Jan 2023</span>
            </div>
            <ul className="exp-tasks">
              <li>
                Created the institutional style guide for educational content.
              </li>
              <li>Adapted complex texts into clear, commercial messaging.</li>
              <li>
                Edited and optimized course materials in technology and design.
              </li>
            </ul>
          </div>

          <div className="exp-item reveal">
            <div className="exp-header">
              <h3 className="exp-title">
                Content Writer — Cerem Business School
              </h3>
              <span className="exp-date">Jan 2021 – Jan 2022</span>
            </div>
            <ul className="exp-tasks">
              <li>Financial articles and social media content.</li>
              <li>
                Validated the company&apos;s voice and tone across all
                communications.
              </li>
              <li>Writing, proofreading, and editing financial copy.</li>
            </ul>
          </div>

          <div className="exp-item reveal">
            <div className="exp-header">
              <h3 className="exp-title">
                Teacher — National University of Tres de Febrero
              </h3>
              <span className="exp-date">Jan 2018 – Jan 2024</span>
            </div>
            <ul className="exp-tasks">
              <li>
                Designed and taught online Study Methodology courses focused on
                learning strategies and critical thinking.
              </li>
              <li>
                Provided clear, actionable feedback on assignments and practical
                work.
              </li>
              <li>
                Offered personalized academic guidance and progress tracking.
              </li>
            </ul>
          </div>

          <div className="exp-item reveal">
            <div className="exp-header">
              <h3 className="exp-title">
                News Writer — Agencia de Noticias Télam
              </h3>
              <span className="exp-date">Dec 2010 – Jun 2018</span>
            </div>
            <ul className="exp-tasks">
              <li>
                Writing, research, and editing in the Culture section of
                Argentina&apos;s national news agency.
              </li>
            </ul>
          </div>

          <div className="exp-item reveal">
            <div className="exp-header">
              <h3 className="exp-title">
                Journalist — Specialized in Music, Design &amp; Technology
              </h3>
              <span className="exp-date">Jan 2012 – Present</span>
            </div>
            <ul className="exp-tasks">
              <li>
                Author of the book &ldquo;Why We Listen to David Bowie&rdquo;
                (Gourmet Musical, 2020).
              </li>
              <li>
                Contributor to Diario Perfil, La Agenda BA, El DiarioAR,
                Página12, Revista Otra Parte, Eterna Cadencia, and Agencia
                Télam.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <p className="section-label reveal">Education</p>
          <h2 className="section-title reveal">Courses &amp; Certifications</h2>
          <div className="education-grid reveal">
            <a
              href="https://drive.google.com/file/d/1R4ETRGtFIlA5gZU0Ig4lZd_Dd5mTBRZM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="edu-item edu-item-link"
            >
              <div>
                <span className="edu-title">Communication &amp; Negotiation</span>
                <span className="edu-source">Consultora Saladino (2025)</span>
              </div>
              <span className="edu-cert">View certificate</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1BCVjwB2wr7ETEbf0afrQyz5_zd_AnCkm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="edu-item edu-item-link"
            >
              <div>
                <span className="edu-title">Metrics &amp; Design</span>
                <span className="edu-source">Sol Mesz (2025)</span>
              </div>
              <span className="edu-cert">View certificate</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1XT_Pg7kYMeN0ZH4z3QhYh0Hk-RSSW6cT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="edu-item edu-item-link"
            >
              <div>
                <span className="edu-title">AI Immersion</span>
                <span className="edu-source">Alura &amp; Google Gemini (2025)</span>
              </div>
              <span className="edu-cert">View certificate</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1uUWrCR4n52phpeszdOIl9xgVN1sQVHLF/view"
              target="_blank"
              rel="noopener noreferrer"
              className="edu-item edu-item-link"
            >
              <div>
                <span className="edu-title">UX Writing</span>
                <span className="edu-source">Coderhouse (2023)</span>
              </div>
              <span className="edu-cert">View certificate</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1er8d2lXj6BQs1Mwe8qZYU9gwyIz720Qs/view"
              target="_blank"
              rel="noopener noreferrer"
              className="edu-item edu-item-link"
            >
              <div>
                <span className="edu-title">UX Writing for Notion</span>
                <span className="edu-source">Notion (2023)</span>
              </div>
              <span className="edu-cert">View certificate</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1nIb4N6QKQ0F_23Wlfp9ueoRMRU4G8qdk/view"
              target="_blank"
              rel="noopener noreferrer"
              className="edu-item edu-item-link"
            >
              <div>
                <span className="edu-title">Copywriting</span>
                <span className="edu-source">UTN (2022)</span>
              </div>
              <span className="edu-cert">View certificate</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1T8kBi5186F1umoGdwhXAMGzKtvDg0-zo/view"
              target="_blank"
              rel="noopener noreferrer"
              className="edu-item edu-item-link"
            >
              <div>
                <span className="edu-title">Conversational Design</span>
                <span className="edu-source">BeBot (2024)</span>
              </div>
              <span className="edu-cert">View certificate</span>
            </a>
          </div>

          <h2 className="section-title reveal" style={{ marginTop: "48px" }}>
            Languages
          </h2>
          <div className="education-grid reveal">
            <div className="edu-item">
              <span className="edu-title">Spanish</span>
              <span className="edu-source">Native</span>
            </div>
            <div className="edu-item">
              <span className="edu-title">English</span>
              <span className="edu-source">Upper Intermediate (B2)</span>
            </div>
          </div>
        </div>
      </section>

      {/* REFERENCES */}
      <section style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <p className="section-label reveal">Testimonials</p>
          <h2 className="section-title reveal">What people say</h2>
          <div className="refs-grid">
            <div className="ref-card reveal">
              <p className="ref-quote">
                It&apos;s not often that you have the chance to work with someone
                with such a unique set of skills. At his core, Juan is a writer
                who has expanded his expertise from a foundation in
                storytelling, poetry, and essays to the world of UX. He possesses
                a rare combination of work ethic, pragmatism, and creativity that
                would make him an excellent fit for any team looking for someone
                with autonomy and a problem-solving mindset.
              </p>
              <p className="ref-author">Guido Villaverde</p>
              <p className="ref-role">Senior Engineering Manager at Miro</p>
            </div>

            <div className="ref-card reveal">
              <p className="ref-quote">
                I had a great experience working with Rapa as a UX Writer.
                Beyond being very well-prepared for the mission of finding the
                right words to give voice to the digital experiences we create,
                he&apos;s a professional who is genuinely eager to work in
                interdisciplinary teams. It was a pleasure to cross paths in our
                careers!
              </p>
              <p className="ref-author">Lara Purita</p>
              <p className="ref-role">Studio Director at Minds Colab</p>
            </div>

            <div className="ref-card reveal">
              <p className="ref-quote">
                I have had the pleasure of working closely with Juan on several
                projects and I can confidently affirm his exceptional skills as a
                UX writer. Juan brings a unique combination of creativity and
                precision to his work, consistently delivering content that not
                only captivates users but also enhances their overall experience.
                His attention to detail and ability to understand user needs make
                him an invaluable asset to any team.
              </p>
              <p className="ref-author">Enrique Laffranconi</p>
              <p className="ref-role">Junior Full-Stack Developer</p>
            </div>

            <div className="ref-card reveal">
              <p className="ref-quote">
                I highly recommend Juan Rapacioli. What stands out most is his
                extraordinary accountability for every task he undertakes. From
                the start of any project, he commits fully and takes
                responsibility for delivering quality results on time. Beyond
                that, Juan demonstrates a great ability to work in teams, always
                receptive to ideas and willing to collaborate to reach common
                goals.
              </p>
              <p className="ref-author">Cecilia Rios Navarro</p>
              <p className="ref-role">Product Manager</p>
            </div>

            <div className="ref-card reveal">
              <p className="ref-quote">
                Juan is a high-standards professional with an eye for detail and
                a genuine willingness to keep learning and improving. He is
                adaptable and works well in teams. His specialty is writing and
                proofreading; when we worked together he developed the brand
                manual for educational products assertively and received feedback
                well. I recommend his work and him.
              </p>
              <p className="ref-author">Delfina Tertzakian</p>
              <p className="ref-role">E-Learning Consultant</p>
            </div>

            <div className="ref-card reveal">
              <p className="ref-quote">
                Juan has two very valuable skills: accountability for his work
                and a curiosity to learn new things. To that we must add a solid
                background that positions him as one of the best professionals
                today in SEO writing. I&apos;ve worked with him on various
                freelance journalism projects and can vouch for his
                professionalism.
              </p>
              <p className="ref-author">Esteban Jose Galarza</p>
              <p className="ref-role">UX Writer and CUX</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div>
            <h2 className="footer-name">
              Juan
              <br />
              Rapacioli
            </h2>
            <p className="footer-tagline">Content Designer</p>
          </div>
          <div>
            <p className="footer-col-title">Links</p>
            <ul className="footer-links">
              <li>
                <a
                  href="https://www.linkedin.com/in/juanrapacioli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://linktr.ee/jrapacioli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linktree
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Contact</p>
            <ul className="footer-links">
              <li>
                <a href="mailto:juanrapacioli@gmail.com">
                  juanrapacioli@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-cta">
          <p>I eagerly await the opportunity to collaborate on new projects!</p>
          <a
            href="https://www.linkedin.com/in/juanrapacioli/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Get in touch
          </a>
        </div>
      </footer>
    </>
  );
}
