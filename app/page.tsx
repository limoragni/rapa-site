"use client";

import "./globals.css";
import { useEffect } from "react";

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

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div>
          <p className="hero-tag">UX Content Designer &middot; Buenos Aires, Argentina</p>
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
            <a href="mailto:juanrapacioli@gmail.com" className="btn btn-primary">
              Let&apos;s talk
            </a>
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
                I connect <strong>business objectives</strong> with user needs
                through intentional, clear, and human-centered content. I&apos;m
                motivated by the dialogue between communication, design, and
                technology.
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
          <div className="work-grid reveal">
            <a href="#" className="work-link">
              <span className="work-link-icon">&#x1F4BB;</span> UX Writing
            </a>
            <a href="#" className="work-link">
              <span className="work-link-icon">&#x2705;</span> Copywriting
            </a>
            <a href="#" className="work-link">
              <span className="work-link-icon">&#x270F;&#xFE0F;</span> Datalytics
              Script
            </a>
            <a href="#" className="work-link">
              <span className="work-link-icon">&#x1F4F0;</span> Journalism
            </a>
            <a href="#" className="work-link">
              <span className="work-link-icon">&#x1F4DA;</span> UTN Copywriting
            </a>
            <a href="#" className="work-link">
              <span className="work-link-icon">&#x2708;&#xFE0F;</span> CV in English
            </a>
            <a href="#" className="work-link">
              <span className="work-link-icon">&#x1F5E3;&#xFE0F;</span> BeBot
              Conversational Design
            </a>
            <a href="#" className="work-link">
              <span className="work-link-icon">&#x1F4A1;</span> Notion for UX
              Writers
            </a>
          </div>
          <div style={{ marginTop: "40px" }} className="reveal">
            <p className="section-label">UX Content Challenges</p>
            <div className="work-grid" style={{ marginTop: "16px" }}>
              <a href="#" className="work-link">
                <span className="work-link-icon">&#x1F7E1;</span> UX Content MELI
              </a>
              <a href="#" className="work-link">
                <span className="work-link-icon">&#x1F4B3;</span> UX Content Prex
              </a>
              <a href="#" className="work-link">
                <span className="work-link-icon">&#x1F3E6;</span> Content Expert
                Galicia
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section>
        <div className="container">
          <p className="section-label reveal">Background</p>
          <h2 className="section-title reveal">Work experience</h2>

          <div className="exp-item reveal">
            <div className="exp-header">
              <h3 className="exp-title">Content Designer | Nonconformist</h3>
              <span className="exp-date">April 2024 – Present</span>
            </div>
            <p className="exp-location">Buenos Aires, Argentina</p>

            <h4 className="exp-company">Banco Galicia</h4>
            <p className="exp-desc">
              I serve as <strong>Content Expert</strong> on the bank&apos;s{" "}
              <strong>Brand Experience</strong> team. I collaborate in the
              Mayorista squad, generating diverse communications for the
              Corporate segment.
            </p>
            <ul className="exp-tasks">
              <li>Creating emails, banners, and push notifications.</li>
              <li>Storytelling, style editing, and inclusive communication.</li>
              <li>Running workshops on content best practices.</li>
            </ul>

            <h4 className="exp-company">Banco Macro</h4>
            <p className="exp-desc">
              I collaborated on building the{" "}
              <strong>Content Design System</strong> and the bank&apos;s{" "}
              <strong>voice &amp; tone manual</strong> alongside an
              interdisciplinary team of design, product, and development.
            </p>
            <ul className="exp-tasks">
              <li>Research, definition, and validation of digital assets.</li>
              <li>Building voice &amp; tone manuals and style guides.</li>
              <li>Running workshops on content best practices.</li>
            </ul>

            <h4 className="exp-company">Nonconformist — Content Club</h4>
            <p className="exp-desc">
              I am part of the Nonconformist Content Club, a community that
              hosts meetings and workshops on content best practices.
            </p>
          </div>

          <div className="exp-item reveal">
            <div className="exp-header">
              <h3 className="exp-title">UX Writer | Digital House</h3>
              <span className="exp-date">June 2022 – January 2023</span>
            </div>
            <p className="exp-location">Buenos Aires, Argentina</p>
            <p className="exp-desc">
              Reviewing and editing educational content. Collaborative work with
              design and development teams. Defining and building the
              company&apos;s style guide.
            </p>
          </div>

          <div className="exp-item reveal">
            <div className="exp-header">
              <h3 className="exp-title">
                Copywriter | Cerem Business School
              </h3>
              <span className="exp-date">January 2022 – June 2022</span>
            </div>
            <p className="exp-location">Madrid, Spain</p>
            <p className="exp-desc">
              Writing business content for the institution&apos;s website.
              Defining advertising and informational copy for social media.
              Digital customer service.
            </p>
          </div>

          <div className="exp-item reveal">
            <div className="exp-header">
              <h3 className="exp-title">Lecturer | Untref Virtual</h3>
              <span className="exp-date">June 2018 – Present</span>
            </div>
            <p className="exp-location">Buenos Aires, Argentina</p>
            <p className="exp-desc">
              Teaching Study Methodology in the Introductory Course at
              Universidad de Tres de Febrero. Defining, reviewing, and editing
              educational content. Monitoring student participation and grading
              assignments.
            </p>
          </div>

          <div className="exp-item reveal">
            <div className="exp-header">
              <h3 className="exp-title">Proofreader &amp; Style Editor</h3>
              <span className="exp-date">December 2010 – Present</span>
            </div>
            <p className="exp-location">Buenos Aires, Argentina</p>
            <p className="exp-desc">
              Style editing. Reviewing educational, cultural, and corporate
              texts. Optimizing reports, theses, and editorial content. Group and
              individual writing workshops.
            </p>
          </div>

          <div className="exp-item reveal">
            <div className="exp-header">
              <h3 className="exp-title">Journalist</h3>
              <span className="exp-date">December 2010 – Present</span>
            </div>
            <p className="exp-location">Buenos Aires, Argentina</p>
            <p className="exp-desc">
              Freelance contributor to Diario Perfil, La Agenda BA, El DiarioAR,
              Pagina12, Revista Otra Parte, Eterna Cadencia, Agencia Telam, and
              other outlets. Reviews, essays, and opinion pieces on film, series,
              and literature.
            </p>
            <ul className="exp-tasks">
              <li>
                <a
                  href="https://linktr.ee/jrapacioli"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--pink)", textDecoration: "none" }}
                >
                  → Read my journalism work
                </a>
              </li>
            </ul>
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
            <p className="footer-tagline">UX Content Designer</p>
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
          <a href="mailto:juanrapacioli@gmail.com" className="btn btn-primary">
            Get in touch
          </a>
        </div>
      </footer>
    </>
  );
}
