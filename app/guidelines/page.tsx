"use client";

import "../globals.css";
import "./guidelines.css";
import { useEffect, useState } from "react";

type Lang = "es" | "en";

const content = {
  es: {
    coverEyebrow: "Guía de marca",
    coverTitle: "Un sistema silencioso",
    coverSub:
      "Referencia de trabajo del lenguaje visual de juanrapacioli.com. Colores, tipografía, componentes y jerarquía, especificados una sola vez para mantener la consistencia entre páginas y colaboradores.",
    coverMeta: "Brand guidelines v1.0 · 2026",

    colorsLabel: "Colores",
    colorsTitle: "Paleta",
    colorsIntro:
      "El sistema parte de un rosa de acento sobre una base cálida de cremas. Los grises son una rampa corta: tinta primaria para el texto, tinta suave para texto secundario, y hairline para divisores. El ámbar aparece solo en la atmósfera del hero y como acento menor.",

    accentSub: "Acento",
    graysSub: "Texto y hairlines",
    surfacesSub: "Superficies",
    surfacesIntro:
      "Las secciones de contenido alternan entre crema y crema oscuro. El footer es tinta sobre blanco. El gradiente está reservado para la superficie del hero.",

    heroSurfaceLabel: "Superficie del hero (radial)",
    contentSurfaceLabel: "Contenido (crema)",
    altSurfaceLabel: "Contenido alternado (crema oscuro)",
    footerSurfaceLabel: "Footer (tinta)",

    colorRules: [
      {
        strong: "El rosa es un acento.",
        text: " Si empieza a dominar la composición, está mal aplicado.",
      },
      {
        strong: "Los grises siguen la rampa.",
        text: " No se usan valores fuera de la escala.",
      },
      {
        strong: "Los gradientes son exclusivos del hero.",
        text: " El resto de las superficies se resuelven con rellenos sólidos.",
      },
    ],

    typographyLabel: "Tipografía",
    typographyTitle: "Voz tipográfica",
    typographyIntro:
      "Dos familias: DM Serif Display para títulos y DM Sans para todo lo demás. La cursiva rosa marca una sola palabra o un nombre propio, nunca frases enteras.",
    signatureCaption: "El gesto de firma: la itálica rosa nombra a la persona.",

    specimenBody:
      "Cuerpo de texto en DM Sans. Diseño sistemas de contenido y combino escritura human-centered con el uso estratégico de IA para conectar objetivos de negocio con necesidades de personas usuarias.",
    specimenSmall: "Texto secundario y captions en DM Sans, 13px, tinta suave.",

    typeH1Meta: "H1 / Display",
    typeH1Spec: "DM Serif Display · Redonda + Itálica",
    typeH2Meta: "H2 / Heading",
    typeH2Spec: "DM Serif Display · Redonda",
    typeBodyMeta: "Body",
    typeBodySpec: "DM Sans · Regular 400",
    typeSmallMeta: "Small / Caption",
    typeSmallSpec: "DM Sans · 13px · Tinta suave",
    typeLabelMeta: "Label / Eyebrow",
    typeLabelSpec: "DM Sans · Semibold 600 · Versalita · Rosa",

    typeH2Example: "Sobre mí",
    typeLabelExample: "Portfolio",

    typeRulesTitle: "Reglas de uso",
    typeRules: [
      {
        strong: "Pesos mínimos.",
        text: " Regular (400) y medium (500) son los pesos principales; semibold (600) queda reservado para labels, botones y elementos de interfaz.",
      },
      {
        strong: "Itálica parcial.",
        text: " Marca una sola palabra o nombre propio. Nunca frases enteras.",
      },
      {
        strong: "Sin guiones largos.",
        text: " Se resuelve con punto, coma o paréntesis según el caso.",
      },
    ],

    componentsLabel: "Componentes",
    componentsTitle: "Piezas y jerarquía",
    componentsIntro:
      "El sistema se compone de tarjetas con borde izquierdo rosa de 3 pixeles. Ese borde es el gesto de firma visual. Se aplica a tarjetas y bloques de dato, no a títulos ni a párrafos ni al footer.",

    c1Label: "Componente 01",
    c1Name: "Content card",
    c1Desc:
      "Tarjeta de contenido con borde izquierdo rosa de 3 px. Usada en portfolio, skills y certificaciones.",
    c1ItemTitle: "Content Design System",
    c1ItemBody: " construido desde cero (Banco Macro).",

    c2Label: "Componente 02",
    c2Name: "Data block",
    c2Desc:
      "Mismo tratamiento de borde izquierdo. Usada en About Me para los proof points (Macro, Galicia, Anthropic).",
    c2Item1Strong: "Campañas B2B",
    c2Item1Body: " con +392% y +128% sobre benchmark de conversión (Banco Galicia).",
    c2Item2Strong: "Certificaciones",
    c2Item2Body: " en Claude y Claude Code (Anthropic).",

    c3Label: "Componente 03",
    c3Name: "Testimonial card",
    c3Desc:
      "Comilla rosa, texto en serif itálica, autor en sans bold, rol en tinta suave. El nombre del autor y su rol se separan por salto de línea, sin puntos medios ni guiones.",
    c3Quote:
      "It\u2019s not often that you have the chance to work with someone with such a unique set of skills. At his core, Juan is a writer who has expanded his expertise from a foundation in storytelling, poetry, and essays to the world of UX. He possesses a rare combination of work ethic, pragmatism, and creativity that would make him an excellent fit for any team looking for someone with autonomy and a problem-solving mindset.",
    c3Author: "Guido Villaverde",
    c3Role: "Senior Engineering Manager at Miro",

    c4Label: "Componente 04",
    c4Name: "Timeline card",
    c4Desc:
      "Rango de años en sans sobre la izquierda. A la derecha, el rol en serif bold, la compañía en rosa y la descripción en sans. Sin itálicas.",
    c4Date: "Ene 2025 a Mar 2026",
    c4Role: "Content Strategist",
    c4Company: "Banco Galicia (Nonconformist)",
    c4Detail:
      "Contenido B2B para productos financieros. Campañas con +392% y +128% sobre benchmark.",

    c5Label: "Componente 05",
    c5Name: "Footer",
    c5Desc:
      "Superficie oscura. Nombre y tagline a la izquierda, enlaces, contacto. CTA con botón rosa.",
    c5Tagline: "Content Designer & Strategist | UX | AI-driven workflows",
    c5LinksTitle: "Enlaces",
    c5ContactTitle: "Contacto",
    c5CTA: "Construyamos algo juntos.",
    c5CTABtn: "Contacto",

    componentRulesTitle: "Reglas de uso",
    componentRules: [
      {
        strong: "El borde rosa de 3 px es el gesto de firma.",
        text: " Se aplica solo a tarjetas y bloques de dato. Nunca a títulos, párrafos o al footer.",
      },
      {
        strong: "Cada sección sigue el mismo patrón.",
        text: " Label (versalita rosa), heading (serif), cuerpo (sans). Tres pasos, ni uno más.",
      },
      {
        strong: "Sin guiones largos ni separadores intermedios.",
        text: " La jerarquía visual hace el trabajo.",
      },
    ],

    printTitle: "Exportar como PDF",
    printBody:
      "Usá Imprimir del navegador y elegí “Guardar como PDF” para descargar una copia local.",
    printBtn: "Imprimir / Guardar como PDF",
    backHome: "Volver al sitio",
  },
  en: {
    coverEyebrow: "Brand guidelines",
    coverTitle: "A quiet system",
    coverSub:
      "A working reference for the visual language of juanrapacioli.com. Colors, typography, components and hierarchy, specified once so the system stays consistent across pages and collaborators.",
    coverMeta: "Brand guidelines v1.0 · 2026",

    colorsLabel: "Colors",
    colorsTitle: "Palette",
    colorsIntro:
      "The system is built on a pink accent over a warm cream base. Grays are a short ramp: primary ink for body text, soft ink for secondary text, and a hairline for dividers. Amber only appears in the hero atmosphere and as a minor accent.",

    accentSub: "Accent",
    graysSub: "Text and hairlines",
    surfacesSub: "Surfaces",
    surfacesIntro:
      "Content sections alternate between cream and darker cream. The footer is ink over white. The gradient is reserved for the hero surface.",

    heroSurfaceLabel: "Hero surface (radial)",
    contentSurfaceLabel: "Content (cream)",
    altSurfaceLabel: "Alt content (cream-dark)",
    footerSurfaceLabel: "Footer (ink)",

    colorRules: [
      {
        strong: "Pink is an accent.",
        text: " If it starts to dominate the composition, it's wrong.",
      },
      {
        strong: "Grays follow the ramp.",
        text: " No values outside the scale.",
      },
      {
        strong: "Gradients belong to the hero.",
        text: " All other surfaces are solid fills.",
      },
    ],

    typographyLabel: "Typography",
    typographyTitle: "Typographic voice",
    typographyIntro:
      "Two families: DM Serif Display for titles, DM Sans for everything else. Pink italics mark a single word or a proper name, never full phrases.",
    signatureCaption: "The signature gesture: pink italic names the person.",

    specimenBody:
      "Body text in DM Sans. I design content systems and combine human-centered writing with the strategic use of AI to connect business objectives with user needs.",
    specimenSmall: "Secondary text and captions in DM Sans, 13px, soft ink.",

    typeH1Meta: "H1 / Display",
    typeH1Spec: "DM Serif Display · Roman + Italic",
    typeH2Meta: "H2 / Heading",
    typeH2Spec: "DM Serif Display · Roman",
    typeBodyMeta: "Body",
    typeBodySpec: "DM Sans · Regular 400",
    typeSmallMeta: "Small / Caption",
    typeSmallSpec: "DM Sans · 13px · Soft ink",
    typeLabelMeta: "Label / Eyebrow",
    typeLabelSpec: "DM Sans · Semibold 600 · Uppercase · Pink",

    typeH2Example: "About me",
    typeLabelExample: "Portfolio",

    typeRulesTitle: "Usage rules",
    typeRules: [
      {
        strong: "Minimal weights.",
        text: " Regular (400) and medium (500) carry most of the system; semibold (600) is reserved for labels, buttons and UI chrome.",
      },
      {
        strong: "Partial italics.",
        text: " Mark a single word or proper name. Never full phrases.",
      },
      {
        strong: "No em dashes.",
        text: " Resolve with a period, comma or parentheses as needed.",
      },
    ],

    componentsLabel: "Components",
    componentsTitle: "Pieces and hierarchy",
    componentsIntro:
      "The system is built on cards with a 3px pink left border. That border is the signature visual gesture. It applies to cards and data blocks, not to headings, paragraphs or the footer.",

    c1Label: "Component 01",
    c1Name: "Content card",
    c1Desc:
      "Content card with a 3px pink left border. Used in portfolio, skills and certifications.",
    c1ItemTitle: "Content Design System",
    c1ItemBody: " built from scratch (Banco Macro).",

    c2Label: "Component 02",
    c2Name: "Data block",
    c2Desc:
      "Same left-border treatment. Used in About Me for proof points (Macro, Galicia, Anthropic).",
    c2Item1Strong: "B2B campaigns",
    c2Item1Body: " with +392% and +128% above conversion benchmark (Banco Galicia).",
    c2Item2Strong: "Certifications",
    c2Item2Body: " in Claude and Claude Code (Anthropic).",

    c3Label: "Component 03",
    c3Name: "Testimonial card",
    c3Desc:
      "Pink quote mark, italic serif body, author in sans bold, role in soft ink. Author name and role are separated by a line break, with no middle dots or dashes.",
    c3Quote:
      "It\u2019s not often that you have the chance to work with someone with such a unique set of skills. At his core, Juan is a writer who has expanded his expertise from a foundation in storytelling, poetry, and essays to the world of UX. He possesses a rare combination of work ethic, pragmatism, and creativity that would make him an excellent fit for any team looking for someone with autonomy and a problem-solving mindset.",
    c3Author: "Guido Villaverde",
    c3Role: "Senior Engineering Manager at Miro",

    c4Label: "Component 04",
    c4Name: "Timeline card",
    c4Desc:
      "Year range in sans on the left. On the right, role in serif bold, company in pink, description in sans. No italics.",
    c4Date: "Jan 2025 to Mar 2026",
    c4Role: "Content Strategist",
    c4Company: "Banco Galicia (Nonconformist)",
    c4Detail:
      "B2B content for financial products. Campaigns with +392% and +128% above benchmark.",

    c5Label: "Component 05",
    c5Name: "Footer",
    c5Desc:
      "Dark surface. Name and tagline on the left, links column, contact column. CTA with a pink button.",
    c5Tagline: "Content Designer & Strategist | UX | AI-driven workflows",
    c5LinksTitle: "Links",
    c5ContactTitle: "Contact",
    c5CTA: "Let's build something together.",
    c5CTABtn: "Get in touch",

    componentRulesTitle: "Usage rules",
    componentRules: [
      {
        strong: "The 3px pink left border is the signature gesture.",
        text: " It applies only to cards and data blocks. Never to headings, paragraphs or the footer.",
      },
      {
        strong: "Every section follows the same pattern.",
        text: " Label (uppercase pink), heading (serif), body (sans). Three steps, no more.",
      },
      {
        strong: "No em dashes, no middle separators.",
        text: " Visual hierarchy does the work.",
      },
    ],

    printTitle: "Export as PDF",
    printBody:
      "Use your browser's Print command and choose \u201cSave as PDF\u201d to download a local copy.",
    printBtn: "Print / Save as PDF",
    backHome: "Back to site",
  },
} as const;

export default function Guidelines() {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const saved = sessionStorage.getItem("lang");
    if (saved === "es" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      sessionStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const t = content[lang];

  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <div className="gl-page">
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

      {/* COVER */}
      <section className="gl-cover">
        <p className="gl-cover-eyebrow">{t.coverEyebrow}</p>
        <h1>
          {lang === "es" ? (
            <>
              Un sistema <em>silencioso</em>
            </>
          ) : (
            <>
              A quiet <em>system</em>
            </>
          )}
        </h1>
        <p className="gl-cover-sub">{t.coverSub}</p>
        <p className="gl-cover-meta">{t.coverMeta}</p>
      </section>

      {/* COLORS */}
      <section className="gl-section">
        <div className="container">
          <p className="section-label">{t.colorsLabel}</p>
          <h2 className="section-title">{t.colorsTitle}</h2>
          <p className="gl-section-intro">{t.colorsIntro}</p>

          <h3 className="gl-subheading">{t.accentSub}</h3>
          <div className="gl-swatch-grid">
            <div className="gl-swatch">
              <span
                className="gl-swatch-chip"
                style={{ background: "var(--pink)" }}
              />
              <div className="gl-swatch-body">
                <div className="gl-swatch-name">Pink</div>
                <div className="gl-swatch-hex">#e0357a</div>
                <div className="gl-swatch-role">
                  {lang === "es"
                    ? "Acento. Itálica de énfasis, borde de tarjetas, labels de sección."
                    : "Accent. Italic emphasis, card left-border, section labels."}
                </div>
              </div>
            </div>
            <div className="gl-swatch">
              <span
                className="gl-swatch-chip"
                style={{ background: "var(--pink-light)" }}
              />
              <div className="gl-swatch-body">
                <div className="gl-swatch-name">Pink light</div>
                <div className="gl-swatch-hex">#f7c5da</div>
                <div className="gl-swatch-role">
                  {lang === "es"
                    ? "Atmósfera del hero, comilla de testimonios, tagline del footer."
                    : "Hero atmosphere, testimonial quote mark, footer tagline."}
                </div>
              </div>
            </div>
            <div className="gl-swatch">
              <span
                className="gl-swatch-chip"
                style={{ background: "var(--amber)" }}
              />
              <div className="gl-swatch-body">
                <div className="gl-swatch-name">Amber</div>
                <div className="gl-swatch-hex">#f0a843</div>
                <div className="gl-swatch-role">
                  {lang === "es"
                    ? "Atmósfera del hero (opacidad baja) y puntos de lista."
                    : "Hero atmosphere (low opacity) and list bullets."}
                </div>
              </div>
            </div>
          </div>

          <h3 className="gl-subheading">{t.graysSub}</h3>
          <div className="gl-swatch-grid">
            <div className="gl-swatch">
              <span
                className="gl-swatch-chip"
                style={{ background: "var(--ink)" }}
              />
              <div className="gl-swatch-body">
                <div className="gl-swatch-name">Ink</div>
                <div className="gl-swatch-hex">#1a1208</div>
                <div className="gl-swatch-role">
                  {lang === "es"
                    ? "Texto primario y superficie del footer."
                    : "Primary text and footer surface."}
                </div>
              </div>
            </div>
            <div className="gl-swatch">
              <span
                className="gl-swatch-chip"
                style={{ background: "var(--ink-light)" }}
              />
              <div className="gl-swatch-body">
                <div className="gl-swatch-name">Ink light</div>
                <div className="gl-swatch-hex">#5a4e3c</div>
                <div className="gl-swatch-role">
                  {lang === "es"
                    ? "Texto secundario, captions y metadatos."
                    : "Secondary text, captions and metadata."}
                </div>
              </div>
            </div>
            <div className="gl-swatch">
              <span
                className="gl-swatch-chip gl-swatch-chip--bordered"
                style={{
                  background: "white",
                  borderBottom: "1px solid var(--border)",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 18,
                    right: 18,
                    top: "50%",
                    height: 1,
                    background: "var(--border)",
                  }}
                />
              </span>
              <div className="gl-swatch-body">
                <div className="gl-swatch-name">Hairline</div>
                <div className="gl-swatch-hex">rgba(26,18,8,0.1)</div>
                <div className="gl-swatch-role">
                  {lang === "es"
                    ? "Hairlines y divisores entre secciones."
                    : "Hairlines and section dividers."}
                </div>
              </div>
            </div>
          </div>

          <h3 className="gl-subheading">{t.surfacesSub}</h3>
          <p className="gl-section-intro" style={{ marginBottom: 24 }}>
            {t.surfacesIntro}
          </p>

          <div className="gl-surface-demo" aria-label={t.heroSurfaceLabel}>
            <span className="gl-surface-demo-label">{t.heroSurfaceLabel}</span>
          </div>

          <div className="gl-surface-grid" style={{ marginTop: 18 }}>
            <div className="gl-surface-card">
              <div className="gl-surface-card-preview gl-preview-cream" />
              <div className="gl-swatch-body">
                <div className="gl-swatch-name">{t.contentSurfaceLabel}</div>
                <div className="gl-swatch-hex">#fdf6ee</div>
              </div>
            </div>
            <div className="gl-surface-card">
              <div className="gl-surface-card-preview gl-preview-cream-dark" />
              <div className="gl-swatch-body">
                <div className="gl-swatch-name">{t.altSurfaceLabel}</div>
                <div className="gl-swatch-hex">#f5ebe0</div>
              </div>
            </div>
            <div className="gl-surface-card">
              <div className="gl-surface-card-preview gl-preview-ink" />
              <div className="gl-swatch-body">
                <div className="gl-swatch-name">{t.footerSurfaceLabel}</div>
                <div className="gl-swatch-hex">#1a1208</div>
              </div>
            </div>
          </div>

          <div className="gl-rules">
            {t.colorRules.map((r, i) => (
              <div className="gl-rule" key={i}>
                <strong>{r.strong}</strong>
                {r.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPOGRAPHY */}
      <section className="gl-section gl-section-alt">
        <div className="container">
          <p className="section-label">{t.typographyLabel}</p>
          <h2 className="section-title">{t.typographyTitle}</h2>
          <p className="gl-section-intro">{t.typographyIntro}</p>

          <div className="gl-signature">
            <div className="gl-signature-display">
              Juan <em>Rapacioli</em>
            </div>
            <div className="gl-signature-caption">{t.signatureCaption}</div>
          </div>

          <div className="gl-type-stack">
            <div className="gl-type-row">
              <div className="gl-type-meta">
                <strong>{t.typeH1Meta}</strong>
                {t.typeH1Spec}
              </div>
              <div className="gl-specimen-h1">
                Juan <em style={{ color: "var(--pink)", fontStyle: "italic" }}>Rapacioli</em>
              </div>
            </div>

            <div className="gl-type-row">
              <div className="gl-type-meta">
                <strong>{t.typeH2Meta}</strong>
                {t.typeH2Spec}
              </div>
              <div className="gl-specimen-h2">{t.typeH2Example}</div>
            </div>

            <div className="gl-type-row">
              <div className="gl-type-meta">
                <strong>{t.typeBodyMeta}</strong>
                {t.typeBodySpec}
              </div>
              <div className="gl-specimen-body">{t.specimenBody}</div>
            </div>

            <div className="gl-type-row">
              <div className="gl-type-meta">
                <strong>{t.typeSmallMeta}</strong>
                {t.typeSmallSpec}
              </div>
              <div className="gl-specimen-small">{t.specimenSmall}</div>
            </div>

            <div className="gl-type-row">
              <div className="gl-type-meta">
                <strong>{t.typeLabelMeta}</strong>
                {t.typeLabelSpec}
              </div>
              <div className="gl-specimen-label">{t.typeLabelExample}</div>
            </div>
          </div>

          <h3 className="gl-subheading">{t.typeRulesTitle}</h3>
          <div className="gl-rules">
            {t.typeRules.map((r, i) => (
              <div className="gl-rule" key={i}>
                <strong>{r.strong}</strong>
                {r.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPONENTS */}
      <section className="gl-section">
        <div className="container">
          <p className="section-label">{t.componentsLabel}</p>
          <h2 className="section-title">{t.componentsTitle}</h2>
          <p className="gl-section-intro">{t.componentsIntro}</p>

          {/* c1 — Content card */}
          <div className="gl-component">
            <p className="gl-component-label">{t.c1Label}</p>
            <h3 className="gl-component-name">{t.c1Name}</h3>
            <p className="gl-component-desc">{t.c1Desc}</p>
            <div className="gl-demo gl-demo-cream">
              <div className="skill-item">
                <span className="skill-text">
                  <strong style={{ fontWeight: 600, color: "var(--pink)" }}>
                    {t.c1ItemTitle}
                  </strong>
                  {t.c1ItemBody}
                </span>
              </div>
            </div>
          </div>

          {/* c2 — Data block */}
          <div className="gl-component">
            <p className="gl-component-label">{t.c2Label}</p>
            <h3 className="gl-component-name">{t.c2Name}</h3>
            <p className="gl-component-desc">{t.c2Desc}</p>
            <div className="gl-demo gl-demo-cream">
              <div className="skill-list">
                <div className="skill-item">
                  <span className="skill-text">
                    <strong style={{ fontWeight: 600, color: "var(--pink)" }}>
                      {t.c2Item1Strong}
                    </strong>
                    {t.c2Item1Body}
                  </span>
                </div>
                <div className="skill-item">
                  <span className="skill-text">
                    <strong style={{ fontWeight: 600, color: "var(--pink)" }}>
                      {t.c2Item2Strong}
                    </strong>
                    {t.c2Item2Body}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* c3 — Testimonial */}
          <div className="gl-component">
            <p className="gl-component-label">{t.c3Label}</p>
            <h3 className="gl-component-name">{t.c3Name}</h3>
            <p className="gl-component-desc">{t.c3Desc}</p>
            <div className="gl-demo gl-demo-cream">
              <div className="ref-card">
                <p className="ref-quote">{t.c3Quote}</p>
                <p className="ref-author">{t.c3Author}</p>
                <p className="ref-role">{t.c3Role}</p>
              </div>
            </div>
          </div>

          {/* c4 — Timeline */}
          <div className="gl-component">
            <p className="gl-component-label">{t.c4Label}</p>
            <h3 className="gl-component-name">{t.c4Name}</h3>
            <p className="gl-component-desc">{t.c4Desc}</p>
            <div className="gl-demo gl-demo-cream">
              <div className="gl-demo-timeline">
                <span className="gl-demo-timeline-date">{t.c4Date}</span>
                <div className="timeline-body">
                  <h3 className="timeline-role">{t.c4Role}</h3>
                  <p className="timeline-company">{t.c4Company}</p>
                  <p className="timeline-detail">{t.c4Detail}</p>
                </div>
              </div>
            </div>
          </div>

          {/* c5 — Footer */}
          <div className="gl-component">
            <p className="gl-component-label">{t.c5Label}</p>
            <h3 className="gl-component-name">{t.c5Name}</h3>
            <p className="gl-component-desc">{t.c5Desc}</p>
            <div className="gl-footer-preview">
              <div className="gl-footer-preview-inner">
                <div>
                  <div className="gl-footer-preview-name">
                    Juan
                    <br />
                    Rapacioli
                  </div>
                  <p className="gl-footer-preview-tagline">{t.c5Tagline}</p>
                </div>
                <div>
                  <p className="gl-footer-preview-col-title">
                    {t.c5LinksTitle}
                  </p>
                  <ul className="gl-footer-preview-links">
                    <li>LinkedIn</li>
                    <li>Linktree</li>
                  </ul>
                </div>
                <div>
                  <p className="gl-footer-preview-col-title">
                    {t.c5ContactTitle}
                  </p>
                  <ul className="gl-footer-preview-links">
                    <li>juanrapacioli@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div className="gl-footer-preview-cta">
                <p>{t.c5CTA}</p>
                <span className="gl-footer-preview-btn">{t.c5CTABtn}</span>
              </div>
            </div>
          </div>

          <h3 className="gl-subheading">{t.componentRulesTitle}</h3>
          <div className="gl-rules">
            {t.componentRules.map((r, i) => (
              <div className="gl-rule" key={i}>
                <strong>{r.strong}</strong>
                {r.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINT */}
      <section className="gl-print">
        <div className="container">
          <p>{t.printBody}</p>
          <button
            type="button"
            onClick={handlePrint}
            className="gl-print-btn"
          >
            {t.printBtn}
          </button>
          <div>
            <a href="/" className="gl-back-home">
              ← {t.backHome}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
