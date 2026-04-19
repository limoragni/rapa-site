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
          <p className="hero-tag">Content Designer &amp; Strategist | UX | AI-driven workflows</p>
          <h1>
            Juan
            <br />
            <em>Rapacioli</em>
          </h1>
          <p className="hero-sub">
            I bridge the gap between business goals and user needs, one word at
            a time. Passionate about the intersection of communication, design,
            and technology.
          </p>
          <div className="hero-contact">
            <button onClick={handleCopyEmail} className="btn btn-primary">
              {copied ? "Email copied!" : "Let's talk"}
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
                <strong>Content Designer &amp; Strategist</strong> with
                experience in <strong>financial services</strong>,{" "}
                <strong>digital banking</strong>, and{" "}
                <strong>B2B campaigns</strong>. I design content systems,
                define strategy, and measure results.
              </p>
              <p className="about-intro reveal" style={{ marginTop: "16px" }}>
                I combine human-centered writing with strategic AI use to
                connect business objectives with user needs.
              </p>
            </div>
            <div className="skill-list reveal">
              <div className="skill-item">
                <span className="skill-text">
                  <strong>Content Design System</strong> built from scratch
                  (Banco Macro).
                </span>
              </div>
              <div className="skill-item">
                <span className="skill-text">
                  <strong>B2B campaigns</strong> with +392% and +128% above
                  conversion benchmark (Banco Galicia).
                </span>
              </div>
              <div className="skill-item">
                <span className="skill-text">
                  <strong>Certifications</strong> in Claude and Claude Code
                  (Anthropic).
                </span>
              </div>
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
            <h3 className="work-group-title">Mercado Libre</h3>
            <p className="work-group-subtitle">UX Challenge Meli+</p>
            <div className="work-grid">
              <a
                href="https://meli.juanrapacioli.com"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                Interactive case study
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">Banco Galicia</h3>
            <p className="work-group-subtitle">
              B2B content for strategic verticals. Campaigns with +392% and +128% above conversion benchmark.
            </p>
            <div className="work-grid">
              <a
                href="https://www.galicia.ar/empresas/tarjetas-y-cuentas/cuenta-energia-mineria"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                Energy and Mining
              </a>
              <a
                href="https://www.galicia.ar/empresas/tarjetas-y-cuentas/cuenta-consumo-masivo"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                Mass Consumption
              </a>
              <a
                href="https://www.galicia.ar/empresas/tarjetas-y-cuentas/cuenta-automotriz"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                Automotive
              </a>
              <a
                href="https://www.galicia.ar/empresas/app-galicia-office"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                Galicia Office App
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">Banco Macro</h3>
            <p className="work-group-subtitle">
              Built the bank&apos;s first Content Design System, unifying voice and tone across multiple product teams.
            </p>
            <div className="work-grid">
              <a
                href="https://www.macro.com.ar/home-page"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                Content Design System
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">Digital House</h3>
            <p className="work-group-subtitle">
              Institutional style guide for educational content.
            </p>
            <div className="work-grid">
              <a
                href="https://drive.google.com/file/d/1jo8paYFY1HWMJwfXo_P1rFK3Da8q_KGn/view"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                Style Guide
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">Cerem Business School</h3>
            <p className="work-group-subtitle">
              Financial articles and corporate voice and tone validation.
            </p>
            <div className="work-grid">
              <a
                href="https://www.cerem.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                Financial articles &amp; social media
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">
              National University of Tres de Febrero
            </h3>
            <p className="work-group-subtitle">
              Study Methodology courses in virtual format.
            </p>
            <div className="work-grid">
              <a
                href="https://untref.edu.ar/estudiar-en-untref"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                Study Methodology
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">Nonconformist</h3>
            <p className="work-group-subtitle">
              Digital agency specializing in financial services and product design.
            </p>
            <div className="work-grid">
              <a
                href="https://nonconformist.digital/project-galicia.html"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                Content Designer
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
                Articles and reviews
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS & TOOLS */}
      <section className="tools-section">
        <div className="container">
          <p className="section-label reveal">Expertise</p>
          <h2 className="section-title reveal">Skills &amp; tools</h2>
          <div className="skills-cols skills-cols-3 reveal">
            <div className="skills-card">
              <div className="skills-card-header">
                <span className="skills-card-title">Content Design</span>
              </div>
              <ul>
                <li>UX Writing</li>
                <li>Content Design Systems</li>
                <li>Conversational Design</li>
                <li>Information Architecture</li>
                <li>Storytelling</li>
              </ul>
            </div>
            <div className="skills-card">
              <div className="skills-card-header">
                <span className="skills-card-title">Strategy</span>
              </div>
              <ul>
                <li>Content Strategy</li>
                <li>Campaign Development</li>
                <li>Conversion Optimization</li>
                <li>Data Analysis</li>
                <li>SEO</li>
              </ul>
            </div>
            <div className="skills-card">
              <div className="skills-card-header">
                <span className="skills-card-title">AI &amp; Tools</span>
              </div>
              <ul>
                <li>Claude / Claude Code</li>
                <li>Figma</li>
                <li>Notion</li>
                <li>Miro</li>
                <li>Adobe Analytics</li>
                <li>Zeroheight</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section>
        <div className="container">
          <p className="section-label reveal">Background</p>
          <h2 className="section-title reveal">Work experience</h2>

          <ol className="timeline reveal">
            <li className="timeline-item">
              <span className="timeline-date">Jan 2025 to Mar 2026</span>
              <div className="timeline-body">
                <h3 className="timeline-role">Content Expert</h3>
                <p className="timeline-company">Banco Galicia (Nonconformist)</p>
                <p className="timeline-detail">
                  B2B content for financial products. Campaigns with +392% above benchmark.
                </p>
              </div>
            </li>

            <li className="timeline-item">
              <span className="timeline-date">Apr 2024 to Jan 2025</span>
              <div className="timeline-body">
                <h3 className="timeline-role">Content Designer</h3>
                <p className="timeline-company">Banco Macro (Nonconformist)</p>
                <p className="timeline-detail">
                  Content Design System built from scratch.
                </p>
              </div>
            </li>

            <li className="timeline-item">
              <span className="timeline-date">Jan 2022 to Jan 2023</span>
              <div className="timeline-body">
                <h3 className="timeline-role">UX Writer</h3>
                <p className="timeline-company">Digital House</p>
                <p className="timeline-detail">
                  Institutional style guide for educational content.
                </p>
              </div>
            </li>

            <li className="timeline-item">
              <span className="timeline-date">Jan 2021 to Jan 2022</span>
              <div className="timeline-body">
                <h3 className="timeline-role">Content Writer</h3>
                <p className="timeline-company">Cerem Business School</p>
                <p className="timeline-detail">
                  Financial articles and brand voice.
                </p>
              </div>
            </li>

            <li className="timeline-item">
              <span className="timeline-date">Jan 2018 to Jan 2024</span>
              <div className="timeline-body">
                <h3 className="timeline-role">Lecturer</h3>
                <p className="timeline-company">UNTREF</p>
                <p className="timeline-detail">
                  Study Methodology in virtual format.
                </p>
              </div>
            </li>

            <li className="timeline-item">
              <span className="timeline-date">Dec 2010 to Jun 2018</span>
              <div className="timeline-body">
                <h3 className="timeline-role">Editor</h3>
                <p className="timeline-company">Télam</p>
                <p className="timeline-detail">
                  Writing and research in the Culture section.
                </p>
              </div>
            </li>

            <li className="timeline-item">
              <span className="timeline-date">Jan 2012 to Present</span>
              <div className="timeline-body">
                <h3 className="timeline-role">Journalist</h3>
                <p className="timeline-company">Independent</p>
                <p className="timeline-detail">
                  Author of{" "}
                  <a
                    href="https://gourmetmusicalediciones.com/libros/por-que-escuchamos-a-david-bowie/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--pink)", textDecoration: "none" }}
                  >
                    <em>Por qué escuchamos a David Bowie</em>
                  </a>{" "}
                  (Gourmet Musical, 2020).
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* EDUCATION */}
      <section style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <p className="section-label reveal">Education</p>
          <h2 className="section-title reveal">Courses &amp; certifications</h2>
          <div className="education-grid reveal">
            <a
              href="https://drive.google.com/file/d/1x4X-NebYRuDxrmLgAJcdxv68SZ5SmXee/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="edu-item edu-item-link"
            >
              <div>
                <span className="edu-title">Claude 101</span>
                <span className="edu-source">Anthropic (2025)</span>
              </div>
              <span className="edu-cert">View certificate</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1HlPXRXNnYYlV6IZ3KQb3DCp3lCKtqP0S/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="edu-item edu-item-link"
            >
              <div>
                <span className="edu-title">Claude Code 101</span>
                <span className="edu-source">Anthropic (2025)</span>
              </div>
              <span className="edu-cert">View certificate</span>
            </a>
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
              <span className="edu-source">B2 - Professional Working Proficiency</span>
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
            <p className="footer-tagline">Content Designer &amp; Strategist | UX | AI-driven workflows</p>
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
          <p>Let&apos;s build something together.</p>
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
