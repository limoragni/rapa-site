"use client";

import "./globals.css";
import { useEffect, useState } from "react";

type Lang = "es" | "en";

const META_DESC_EN =
  "Content Designer & Strategist with experience in financial services, digital banking, B2B campaigns, and AI-driven workflows. Connecting business objectives with user needs.";
const META_DESC_ES =
  "Content Designer & Strategist con experiencia en servicios financieros, banca digital y campañas B2B. Diseño sistemas de contenido y combino escritura human-centered con el uso estratégico de IA.";

const content = {
  es: {
    heroTag: "Content Designer & Strategist | UX | AI-driven workflows",
    heroSub:
      "Conecto objetivos de negocio con necesidades de personas usuarias, una palabra a la vez.",
    heroBtnTalk: "Hablemos",
    heroBtnEmailCopied: "Email copiado",
    heroScroll: "Explorá el sitio",

    aboutLabel: "Sobre mí",
    aboutP1Html:
      "<strong>Content Designer &amp; Strategist</strong> con experiencia en <strong>servicios financieros</strong>, <strong>banca digital</strong> y <strong>campañas B2B</strong>. Diseño sistemas de contenido, defino estrategia y mido resultados.",
    aboutP2:
      "Combino escritura human-centered con el uso estratégico de IA para conectar objetivos de negocio con necesidades de personas usuarias.",
    aboutBlock1Html:
      "<strong>Content Design System</strong> construido desde cero (Banco Macro).",
    aboutBlock2Html:
      "<strong>Campañas B2B</strong> con +392% y +128% sobre benchmark de conversión (Banco Galicia).",
    aboutBlock3Html:
      "<strong>Certificaciones</strong> en Claude y Claude Code (Anthropic).",

    portfolioLabel: "Portfolio",
    portfolioTitle: "Mi trabajo",

    meliTitle: "Mercado Libre",
    meliSubtitle: "Desafío UX Meli+",
    meliContext:
      "Rediseño del landing de suscripción Meli+ y mejora del flujo de pago alternativo.",
    meliLink: "Caso de estudio interactivo",

    galiciaTitle: "Banco Galicia",
    galiciaContext:
      "Contenido B2B para verticales estratégicas. Campañas con +392% y +128% sobre benchmark de conversión.",
    galiciaLink1: "Energía y Minería",
    galiciaLink2: "Consumo Masivo",
    galiciaLink3: "Automotriz",
    galiciaLink4: "App Galicia Office",

    macroTitle: "Banco Macro",
    macroContext:
      "Construcción del primer Content Design System del banco, unificando voz y tono en múltiples equipos de producto.",
    macroLink: "Content Design System",

    dhTitle: "Digital House",
    dhContext: "Guía de estilo institucional para contenidos educativos.",
    dhLink: "Guía de estilo",

    ceremTitle: "Cerem Business School",
    ceremContext:
      "Artículos financieros y validación de voz y tono corporativo.",
    ceremLink: "Artículos financieros y redes sociales",

    untrefTitle: "Universidad Nacional de Tres de Febrero",
    untrefContext: "Cursos de Metodología de Estudio en modalidad virtual.",
    untrefLink: "Metodología de Estudio",

    ncTitle: "Nonconformist",
    ncContext:
      "Agencia digital especializada en servicios financieros y diseño de producto.",
    ncLink: "Content Designer",

    journalismTitle: "Periodismo",
    journalismContext:
      "Cultura, música y literatura para Diario Perfil, Página12 y Revista Otra Parte.",
    journalismLink: "Artículos y reseñas",

    guidelinesTitle: "Guía de marca",
    guidelinesContext:
      "Sistema visual del portfolio documentado con Claude Design.",
    guidelinesLink: "Ver guía",

    expertiseLabel: "Expertise",
    expertiseTitle: "Skills y herramientas",
    col1Title: "Content Design",
    col1Items: [
      "UX Writing",
      "Content Design Systems",
      "Diseño Conversacional",
      "Arquitectura de Información",
      "Storytelling",
    ],
    col2Title: "Estrategia",
    col2Items: [
      "Estrategia de Contenido",
      "Desarrollo de Campañas",
      "Optimización de Conversión",
      "Análisis de Datos",
      "SEO",
    ],
    col3Title: "IA y herramientas",
    col3Items: [
      "Claude / Claude Code",
      "Figma",
      "Notion",
      "Miro",
      "Adobe Analytics",
      "Zeroheight",
    ],

    expLabel: "Trayectoria",
    expTitle: "Experiencia",
    exp: [
      {
        date: "Ene 2025 a Mar 2026",
        role: "Content Strategist",
        company: "Banco Galicia (Nonconformist)",
        detail:
          "Contenido B2B para productos financieros. Campañas con +392% y +128% sobre benchmark.",
      },
      {
        date: "Abr 2024 a Ene 2025",
        role: "Content Designer",
        company: "Banco Macro (Nonconformist)",
        detail: "Content Design System construido desde cero.",
      },
      {
        date: "Ene 2022 a Ene 2023",
        role: "UX Writer",
        company: "Digital House",
        detail: "Guía de estilo institucional para contenidos educativos.",
      },
      {
        date: "Ene 2021 a Ene 2022",
        role: "Content Writer",
        company: "Cerem Business School",
        detail: "Artículos financieros y voz de marca.",
      },
      {
        date: "Ene 2018 a Ene 2024",
        role: "Docente",
        company: "UNTREF",
        detail: "Metodología de Estudio en modalidad virtual.",
      },
      {
        date: "Dic 2010 a Jun 2018",
        role: "Redactor",
        company: "Télam",
        detail: "Redacción e investigación en Sección Cultura.",
      },
    ],
    expJournalistDate: "Ene 2012 a la actualidad",
    expJournalistRole: "Periodista",
    expJournalistCompany: "Independiente",
    expJournalistPre: "Autor de ",
    expJournalistPost: " (Gourmet Musical, 2020).",

    eduLabel: "Formación",
    eduTitle: "Cursos y certificaciones",
    eduCert: "Ver certificado",
    languagesTitle: "Idiomas",
    langSpanish: "Español",
    langSpanishLevel: "Nativo",
    langEnglish: "Inglés",
    langEnglishLevel: "B2 - Competencia profesional",

    testimonialsLabel: "Testimonios",
    testimonialsTitle: "Qué dicen de mí",

    footerTagline: "Content Designer & Strategist | UX | AI-driven workflows",
    footerLinksTitle: "Enlaces",
    footerContactTitle: "Contacto",
    footerGuidelinesLink: "Guía de marca",
    footerCTA: "Construyamos algo juntos.",
    footerCTABtn: "Contacto",
  },
  en: {
    heroTag: "Content Designer & Strategist | UX | AI-driven workflows",
    heroSub:
      "I bridge the gap between business goals and user needs, one word at a time.",
    heroBtnTalk: "Let's talk",
    heroBtnEmailCopied: "Email copied!",
    heroScroll: "Scroll to explore",

    aboutLabel: "About me",
    aboutP1Html:
      "<strong>Content Designer &amp; Strategist</strong> with experience in <strong>financial services</strong>, <strong>digital banking</strong>, and <strong>B2B campaigns</strong>. I design content systems, define strategy, and measure results.",
    aboutP2:
      "I combine human-centered writing with the strategic use of AI to connect business objectives with user needs.",
    aboutBlock1Html:
      "<strong>Content Design System</strong> built from scratch (Banco Macro).",
    aboutBlock2Html:
      "<strong>B2B campaigns</strong> with +392% and +128% above conversion benchmark (Banco Galicia).",
    aboutBlock3Html:
      "<strong>Certifications</strong> in Claude and Claude Code (Anthropic).",

    portfolioLabel: "Portfolio",
    portfolioTitle: "My work",

    meliTitle: "Mercado Libre",
    meliSubtitle: "UX Challenge Meli+",
    meliContext:
      "Subscription landing page redesign and alternative payment flow improvement for Meli+.",
    meliLink: "Interactive case study",

    galiciaTitle: "Banco Galicia",
    galiciaContext:
      "B2B content for strategic verticals. Campaigns with +392% and +128% above conversion benchmark.",
    galiciaLink1: "Energy and Mining",
    galiciaLink2: "Mass Consumption",
    galiciaLink3: "Automotive",
    galiciaLink4: "Galicia Office App",

    macroTitle: "Banco Macro",
    macroContext:
      "Built the bank's first Content Design System, unifying voice and tone across multiple product teams.",
    macroLink: "Content Design System",

    dhTitle: "Digital House",
    dhContext: "Institutional style guide for educational content.",
    dhLink: "Style Guide",

    ceremTitle: "Cerem Business School",
    ceremContext:
      "Financial articles and corporate voice and tone validation.",
    ceremLink: "Financial articles & social media",

    untrefTitle: "National University of Tres de Febrero",
    untrefContext: "Study Methodology courses in virtual format.",
    untrefLink: "Study Methodology",

    ncTitle: "Nonconformist",
    ncContext:
      "Digital agency specializing in financial services and product design.",
    ncLink: "Content Designer",

    journalismTitle: "Journalism",
    journalismContext:
      "Culture, music, and literature for Diario Perfil, Página12, and Revista Otra Parte.",
    journalismLink: "Articles and reviews",

    guidelinesTitle: "Brand guidelines",
    guidelinesContext:
      "Portfolio's visual system documented with Claude Design.",
    guidelinesLink: "View guide",

    expertiseLabel: "Expertise",
    expertiseTitle: "Skills & tools",
    col1Title: "Content Design",
    col1Items: [
      "UX Writing",
      "Content Design Systems",
      "Conversational Design",
      "Information Architecture",
      "Storytelling",
    ],
    col2Title: "Strategy",
    col2Items: [
      "Content Strategy",
      "Campaign Development",
      "Conversion Optimization",
      "Data Analysis",
      "SEO",
    ],
    col3Title: "AI & Tools",
    col3Items: [
      "Claude / Claude Code",
      "Figma",
      "Notion",
      "Miro",
      "Adobe Analytics",
      "Zeroheight",
    ],

    expLabel: "Background",
    expTitle: "Work experience",
    exp: [
      {
        date: "Jan 2025 to Mar 2026",
        role: "Content Strategist",
        company: "Banco Galicia (Nonconformist)",
        detail:
          "B2B content for financial products. Campaigns with +392% and +128% above benchmark.",
      },
      {
        date: "Apr 2024 to Jan 2025",
        role: "Content Designer",
        company: "Banco Macro (Nonconformist)",
        detail: "Content Design System built from scratch.",
      },
      {
        date: "Jan 2022 to Jan 2023",
        role: "UX Writer",
        company: "Digital House",
        detail: "Institutional style guide for educational content.",
      },
      {
        date: "Jan 2021 to Jan 2022",
        role: "Content Writer",
        company: "Cerem Business School",
        detail: "Financial articles and brand voice.",
      },
      {
        date: "Jan 2018 to Jan 2024",
        role: "Lecturer",
        company: "UNTREF",
        detail: "Study Methodology in virtual format.",
      },
      {
        date: "Dec 2010 to Jun 2018",
        role: "Staff Writer",
        company: "Télam",
        detail: "Writing and research in the Culture section.",
      },
    ],
    expJournalistDate: "Jan 2012 to Present",
    expJournalistRole: "Journalist",
    expJournalistCompany: "Independent",
    expJournalistPre: "Author of ",
    expJournalistPost: " (Gourmet Musical, 2020).",

    eduLabel: "Education",
    eduTitle: "Courses & certifications",
    eduCert: "View certificate",
    languagesTitle: "Languages",
    langSpanish: "Spanish",
    langSpanishLevel: "Native",
    langEnglish: "English",
    langEnglishLevel: "B2 - Professional Working Proficiency",

    testimonialsLabel: "Testimonials",
    testimonialsTitle: "What people say",

    footerTagline: "Content Designer & Strategist | UX | AI-driven workflows",
    footerLinksTitle: "Links",
    footerContactTitle: "Contact",
    footerGuidelinesLink: "Brand guidelines",
    footerCTA: "Let's build something together.",
    footerCTABtn: "Get in touch",
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("lang");
    if (saved === "es" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        lang === "es" ? META_DESC_ES : META_DESC_EN
      );
    }
    try {
      sessionStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

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
  }, [lang]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("juanrapacioli@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const t = content[lang];

  return (
    <>
      {/* LANGUAGE SWITCHER */}
      <div className="lang-switch" role="group" aria-label="Language">
        <button
          type="button"
          onClick={() => setLang("es")}
          className={lang === "es" ? "lang-btn active" : "lang-btn"}
          aria-pressed={lang === "es"}
        >
          ES
        </button>
        <span className="lang-sep" aria-hidden="true">
          /
        </span>
        <button
          type="button"
          onClick={() => setLang("en")}
          className={lang === "en" ? "lang-btn active" : "lang-btn"}
          aria-pressed={lang === "en"}
        >
          EN
        </button>
      </div>

      {/* HERO */}
      <section className="hero">
        <div>
          <p className="hero-tag">{t.heroTag}</p>
          <h1>
            Juan
            <br />
            <em>Rapacioli</em>
          </h1>
          <p className="hero-sub">{t.heroSub}</p>
          <div className="hero-contact">
            <button onClick={handleCopyEmail} className="btn btn-primary">
              {copied ? t.heroBtnEmailCopied : t.heroBtnTalk}
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
          <span></span> {t.heroScroll}
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <div className="container">
          <p className="section-label reveal">{t.aboutLabel}</p>
          <div className="about-grid">
            <div>
              <h2 className="section-title reveal">
                {lang === "es" ? (
                  <>
                    ¡Hola! Soy Juan,
                    <br />
                    pero todos me
                    <br />
                    <span style={{ whiteSpace: "nowrap" }}>
                      dicen{" "}
                      <em
                        style={{ fontStyle: "italic", color: "var(--pink)" }}
                      >
                        Rapa.
                      </em>
                    </span>
                  </>
                ) : (
                  <>
                    Hi! I&apos;m Juan,
                    <br />
                    but everyone calls
                    <br />
                    me{" "}
                    <em
                      style={{ fontStyle: "italic", color: "var(--pink)" }}
                    >
                      Rapa.
                    </em>
                  </>
                )}
              </h2>
              <p
                className="about-intro reveal"
                dangerouslySetInnerHTML={{ __html: t.aboutP1Html }}
              />
              <p className="about-intro reveal" style={{ marginTop: "16px" }}>
                {t.aboutP2}
              </p>
            </div>
            <div className="skill-list reveal">
              <div className="skill-item">
                <span
                  className="skill-text"
                  dangerouslySetInnerHTML={{ __html: t.aboutBlock1Html }}
                />
              </div>
              <div className="skill-item">
                <span
                  className="skill-text"
                  dangerouslySetInnerHTML={{ __html: t.aboutBlock2Html }}
                />
              </div>
              <div className="skill-item">
                <span
                  className="skill-text"
                  dangerouslySetInnerHTML={{ __html: t.aboutBlock3Html }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MY WORK */}
      <section style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <p className="section-label reveal">{t.portfolioLabel}</p>
          <h2 className="section-title reveal">{t.portfolioTitle}</h2>

          <div className="work-group reveal">
            <h3 className="work-group-title">{t.meliTitle}</h3>
            <p className="work-group-subtitle">{t.meliSubtitle}</p>
            <p className="work-group-subtitle">{t.meliContext}</p>
            <div className="work-grid">
              <a
                href="https://meli.juanrapacioli.com"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                {t.meliLink}
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">{t.galiciaTitle}</h3>
            <p className="work-group-subtitle">{t.galiciaContext}</p>
            <div className="work-grid">
              <a
                href="https://www.galicia.ar/empresas/tarjetas-y-cuentas/cuenta-energia-mineria"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                {t.galiciaLink1}
              </a>
              <a
                href="https://www.galicia.ar/empresas/tarjetas-y-cuentas/cuenta-consumo-masivo"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                {t.galiciaLink2}
              </a>
              <a
                href="https://www.galicia.ar/empresas/tarjetas-y-cuentas/cuenta-automotriz"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                {t.galiciaLink3}
              </a>
              <a
                href="https://www.galicia.ar/empresas/app-galicia-office"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                {t.galiciaLink4}
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">{t.macroTitle}</h3>
            <p className="work-group-subtitle">{t.macroContext}</p>
            <div className="work-grid">
              <a
                href="https://www.macro.com.ar/home-page"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                {t.macroLink}
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">{t.dhTitle}</h3>
            <p className="work-group-subtitle">{t.dhContext}</p>
            <div className="work-grid">
              <a
                href="https://drive.google.com/file/d/1jo8paYFY1HWMJwfXo_P1rFK3Da8q_KGn/view"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                {t.dhLink}
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">{t.ceremTitle}</h3>
            <p className="work-group-subtitle">{t.ceremContext}</p>
            <div className="work-grid">
              <a
                href="https://www.cerem.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                {t.ceremLink}
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">{t.untrefTitle}</h3>
            <p className="work-group-subtitle">{t.untrefContext}</p>
            <div className="work-grid">
              <a
                href="https://untref.edu.ar/estudiar-en-untref"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                {t.untrefLink}
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">{t.ncTitle}</h3>
            <p className="work-group-subtitle">{t.ncContext}</p>
            <div className="work-grid">
              <a
                href="https://nonconformist.digital/project-galicia.html"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                {t.ncLink}
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">{t.journalismTitle}</h3>
            <p className="work-group-subtitle">{t.journalismContext}</p>
            <div className="work-grid">
              <a
                href="https://linktr.ee/jrapacioli"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link"
              >
                {t.journalismLink}
              </a>
            </div>
          </div>

          <div className="work-group reveal">
            <h3 className="work-group-title">{t.guidelinesTitle}</h3>
            <p className="work-group-subtitle">{t.guidelinesContext}</p>
            <div className="work-grid">
              <a href="/guidelines" className="work-link">
                {t.guidelinesLink}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS & TOOLS */}
      <section className="tools-section">
        <div className="container">
          <p className="section-label reveal">{t.expertiseLabel}</p>
          <h2 className="section-title reveal">{t.expertiseTitle}</h2>
          <div className="skills-cols skills-cols-3 reveal">
            <div className="skills-card">
              <div className="skills-card-header">
                <span className="skills-card-title">{t.col1Title}</span>
              </div>
              <ul>
                {t.col1Items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="skills-card">
              <div className="skills-card-header">
                <span className="skills-card-title">{t.col2Title}</span>
              </div>
              <ul>
                {t.col2Items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="skills-card">
              <div className="skills-card-header">
                <span className="skills-card-title">{t.col3Title}</span>
              </div>
              <ul>
                {t.col3Items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section>
        <div className="container">
          <p className="section-label reveal">{t.expLabel}</p>
          <h2 className="section-title reveal">{t.expTitle}</h2>

          <ol className="timeline reveal">
            {t.exp.map((job, idx) => (
              <li className="timeline-item" key={idx}>
                <span className="timeline-date">{job.date}</span>
                <div className="timeline-body">
                  <h3 className="timeline-role">{job.role}</h3>
                  <p className="timeline-company">{job.company}</p>
                  <p className="timeline-detail">{job.detail}</p>
                </div>
              </li>
            ))}

            <li className="timeline-item">
              <span className="timeline-date">{t.expJournalistDate}</span>
              <div className="timeline-body">
                <h3 className="timeline-role">{t.expJournalistRole}</h3>
                <p className="timeline-company">{t.expJournalistCompany}</p>
                <p className="timeline-detail">
                  {t.expJournalistPre}
                  <a
                    href="https://gourmetmusicalediciones.com/libros/por-que-escuchamos-a-david-bowie/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--pink)", textDecoration: "none" }}
                  >
                    <em>Por qué escuchamos a David Bowie</em>
                  </a>
                  {t.expJournalistPost}
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* EDUCATION */}
      <section style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <p className="section-label reveal">{t.eduLabel}</p>
          <h2 className="section-title reveal">{t.eduTitle}</h2>
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
              <span className="edu-cert">{t.eduCert}</span>
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
              <span className="edu-cert">{t.eduCert}</span>
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
              <span className="edu-cert">{t.eduCert}</span>
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
              <span className="edu-cert">{t.eduCert}</span>
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
              <span className="edu-cert">{t.eduCert}</span>
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
              <span className="edu-cert">{t.eduCert}</span>
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
              <span className="edu-cert">{t.eduCert}</span>
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
              <span className="edu-cert">{t.eduCert}</span>
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
              <span className="edu-cert">{t.eduCert}</span>
            </a>
          </div>

          <h2 className="section-title reveal" style={{ marginTop: "48px" }}>
            {t.languagesTitle}
          </h2>
          <div className="education-grid reveal">
            <div className="edu-item">
              <span className="edu-title">{t.langSpanish}</span>
              <span className="edu-source">{t.langSpanishLevel}</span>
            </div>
            <div className="edu-item">
              <span className="edu-title">{t.langEnglish}</span>
              <span className="edu-source">{t.langEnglishLevel}</span>
            </div>
          </div>
        </div>
      </section>

      {/* REFERENCES */}
      <section style={{ background: "var(--cream-dark)" }}>
        <div className="container">
          <p className="section-label reveal">{t.testimonialsLabel}</p>
          <h2 className="section-title reveal">{t.testimonialsTitle}</h2>
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
              <p className="ref-role">Full-Stack Developer</p>
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
            <p className="footer-tagline">{t.footerTagline}</p>
          </div>
          <div>
            <p className="footer-col-title">{t.footerLinksTitle}</p>
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
              <li>
                <a href="/guidelines">{t.footerGuidelinesLink}</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">{t.footerContactTitle}</p>
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
          <p>{t.footerCTA}</p>
          <a href="mailto:juanrapacioli@gmail.com" className="btn btn-primary">
            {t.footerCTABtn}
          </a>
        </div>
      </footer>
    </>
  );
}
