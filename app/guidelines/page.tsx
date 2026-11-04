"use client";

import "../globals.css";
import "./guidelines.css";
import Link from "next/link";
import { useEffect, useState } from "react";

type Lang = "es" | "en";

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M5 11 11 5M6 5h5v5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const content = {
  es: {
    coverEyebrow: "Guía de marca",
    coverTitle: "Un sistema silencioso",
    coverSub:
      "Referencia de trabajo del lenguaje visual de juanrapacioli.com. Colores, tipografía, componentes y jerarquía, especificados una sola vez para mantener la consistencia entre páginas y colaboradores.",
    coverMeta: "Brand guidelines v2.0 · 2026",

    colorsLabel: "Colores",
    colorsTitle: "Paleta",
    colorsIntro:
      "El sistema parte de un emerald de acento sobre una base cálida de cremas. Los grises son una rampa corta: tinta primaria para el texto, tinta suave para texto secundario, y hairline para divisores. El amarillo resalta una sola palabra por título y vive como texto solo sobre fondo oscuro.",

    accentSub: "Acento",
    graysSub: "Texto y hairlines",
    surfacesSub: "Superficies",
    surfacesIntro:
      "Las secciones de contenido alternan entre page (un tono papel, #f9f8f3) y tint. Las tarjetas usan surface (#fcfcf9), apenas más clara que la página, para leerse elevadas. Cream (#fffdfb) queda solo como texto sobre fondo oscuro. Hero, testimonios y footer usan emerald-deep con un degradado radial sutil.",

    heroSurfaceLabel: "Superficie oscura (degradado radial)",
    contentSurfaceLabel: "Página (page)",
    cardSurfaceLabel: "Tarjetas (surface)",
    altSurfaceLabel: "Contenido alternado (tint)",
    footerSurfaceLabel: "Hero, testimonios, footer (emerald-deep)",

    colorRules: [
      {
        strong: "El amarillo nunca es texto sobre claro.",
        text: " Se usa como relleno detrás de texto oscuro, o directamente como texto sobre fondo oscuro.",
      },
      {
        strong: "El emerald es el acento, no el fondo.",
        text: " Se reserva para bordes, botones y enlaces. Los fondos grandes usan page, tint o emerald-deep.",
      },
      {
        strong: "Los degradados son exclusivos de las superficies oscuras.",
        text: " Hero, testimonios y footer. El resto se resuelve con rellenos sólidos.",
      },
    ],

    contrastLabel: "Reglas de contraste",
    contrastRules: [
      {
        strong: "Cream sobre emerald-deep.",
        text: " Ratio 12,06. AAA.",
      },
      {
        strong: "Amarillo sobre emerald-deep.",
        text: " Ratio 9,37. AAA. El único contexto donde el amarillo funciona como texto normal.",
      },
      {
        strong: "Amarillo sobre emerald, en texto grande.",
        text: " Ratio 4,00. Solo en texto de 24px o más, o 19px en negrita. Nunca en texto chico.",
      },
      {
        strong: "Amarillo sobre cream o blanco.",
        text: " Nunca como texto. Solo como relleno detrás de texto oscuro.",
      },
      {
        strong: "Emerald sobre page, surface o tint.",
        text: " Ratio 4,91 sobre page, 5,08 sobre surface y 4,50 sobre tint (al límite de AA: en tint, solo texto en negrita o grande).",
      },
      {
        strong: "Ink y ink-muted sobre page, surface o tint.",
        text: " Entre 6,52 y 11,90. AA o AAA según el par.",
      },
      {
        strong: "Mínimos exigidos.",
        text: " 4,5:1 para texto normal, 3:1 para texto grande y componentes de interfaz.",
      },
    ],

    typographyLabel: "Tipografía",
    typographyTitle: "Voz tipográfica",
    typographyIntro:
      "Una sola familia: DM Sans, de regular a extrabold. La cursiva amarilla marca una sola palabra por título, nunca frases enteras.",
    signatureCaption:
      "El gesto de firma: la cursiva amarilla nombra la palabra clave.",

    specimenBody:
      "Cuerpo de texto en DM Sans. Diseño sistemas de contenido y combino escritura human-centered con el uso estratégico de IA para conectar objetivos de negocio con necesidades de personas usuarias.",
    specimenSmall: "Texto secundario y captions en DM Sans, 14px, tinta suave.",

    typeEyebrowMeta: "Eyebrow",
    typeEyebrowSpec: "DM Sans · Bold 700 · Versalita · Emerald o amarillo",
    typeH1Meta: "H1 / Display",
    typeH1Spec: "DM Sans · Extrabold 800 · clamp(40px, 7vw, 64px)",
    typeH2Meta: "H2 / Heading",
    typeH2Spec: "DM Sans · Extrabold 800 · clamp(28px, 4vw, 40px)",
    typeH3Meta: "H3 / Subheading",
    typeH3Spec: "DM Sans · Bold 700 · clamp(20px, 2.4vw, 22px)",
    typeBodyMeta: "Body",
    typeBodySpec: "DM Sans · Regular 400 · 16px",
    typeSmallMeta: "Small / Caption",
    typeSmallSpec: "DM Sans · Regular 400 · 13 a 14px · Tinta suave",

    typeH2Example: "Sobre mí",
    typeH3Example: "Mercado Libre",

    typeRulesTitle: "Reglas de uso",
    typeRules: [
      {
        strong: "Pesos con propósito.",
        text: " Regular (400) para cuerpo, bold (700) para botones y chips, extrabold (800) para títulos y numerales.",
      },
      {
        strong: "Cursiva parcial.",
        text: " Marca una sola palabra clave por título. Nunca frases enteras.",
      },
      {
        strong: "Sin guiones largos.",
        text: " El separador es siempre el punto medio (·), con un espacio a cada lado.",
      },
    ],

    componentsLabel: "Componentes",
    componentsTitle: "Piezas y jerarquía",
    componentsIntro:
      "Una sola gramática de tarjeta: borde de 1 px, sombra suave teñida de emerald-deep y radio 24 px en las tarjetas compactas (Quién soy, Skills, Formación, Experiencia, Testimonios) o 28 px en las grandes (proyectos, roles). Las grandes suman insignia y metadatos rotulados. Sin bordes de acento de color.",

    c1Label: "Componente 01",
    c1Name: "Botón",
    c1Desc:
      "Píldora con dos variantes: relleno emerald para la acción principal, con borde para la secundaria. Sobre fondo oscuro, el relleno suma un borde mint para cumplir el contraste no textual, y el borde pasa a mint también. Foco visible: anillo emerald sobre claro, amarillo sobre oscuro.",

    c2Label: "Componente 02",
    c2Name: "Tarjeta numerada",
    c2Desc:
      "Tarjeta compacta con insignia circular numerada (48 px) que alterna relleno y contorno. Usada en Quién soy.",
    c2ItemTitle: "Content Design System",
    c2ItemBody: " construido desde cero (Banco Macro).",

    c3Label: "Componente 03",
    c3Name: "Chip",
    c3Desc:
      "Píldora chica con borde, sin relleno de color. Usada en Skills y herramientas, en tres columnas sobre fondo tint.",

    c4Label: "Componente 04",
    c4Name: "Tarjeta de métrica",
    c4Desc:
      "Número grande con conteo al entrar en viewport y línea de contexto. Vive solo en la franja de Resultados (+392% y +128%). El valor final está siempre en el HTML; con prefers-reduced-motion no anima.",
    c4Eyebrow: "Campaña B2B · Banco Galicia",
    c4Line: "1,23% de conversión contra un benchmark de 0,25%.",

    c5Label: "Componente 05",
    c5Name: "Tarjeta de testimonio",
    c5Desc:
      "Comilla emerald, texto en itálica, autor en sans bold, rol en tinta suave. El nombre del autor y su rol se separan por salto de línea, sin puntos medios ni guiones.",
    c5Quote:
      "It’s not often that you have the chance to work with someone with such a unique set of skills. At his core, Juan is a writer who has expanded his expertise from a foundation in storytelling, poetry, and essays to the world of UX. He possesses a rare combination of work ethic, pragmatism, and creativity that would make him an excellent fit for any team looking for someone with autonomy and a problem-solving mindset.",
    c5Author: "Guido Villaverde",
    c5Role: "Senior Engineering Manager at Miro",

    c6Label: "Componente 06",
    c6Name: "Tarjeta de experiencia",
    c6Desc:
      "Versión compacta de la tarjeta con metadatos. Fecha arriba en emerald, en una sola línea, separada por un filete. Debajo, rol, compañía y descripción. Los enlaces van como pastillas con ↗. Grilla de 2 columnas que se lee por filas; 1 columna en mobile.",
    c6Date: "Ene 2025 a Mar 2026",
    c6Role: "Content Expert",
    c6Company: "Banco Galicia (Nonconformist)",
    c6Detail:
      "Contenido B2B para productos financieros. Campañas con +392% y +128% sobre benchmark.",

    c7Label: "Componente 07",
    c7Name: "Footer",
    c7Desc:
      "Superficie oscura que continúa el degradado de Testimonios sin corte. Nombre y especialidades a la izquierda (cada ítem sin cortes); enlaces externos con ↗; contacto con la hora local de Buenos Aires. Cierre con titular grande (hasta 72 px) con una palabra en cursiva amarilla y pastillas de Hablemos y LinkedIn.",
    c7Tagline:
      "Content Designer & Strategist · UX Writing · Branding · Content Strategy · AI workflows",
    c7LinksTitle: "Enlaces",
    c7ContactTitle: "Contacto",
    c7CTA: "Construyamos algo ",
    c7CTAWord: "juntos",
    c7CTABtn: "Hablemos",

    c8Label: "Componente 08",
    c8Name: "Tarjeta con metadatos",
    c8Desc:
      "Tarjeta grande de proyecto: insignia numerada, título, metadatos rotulados (Rol, Período) con filete superior, descripción y pastillas de enlace con ↗ de ancho según contenido. Solo se muestran metadatos que existen. Variante destacada sobre emerald-deep.",
    c9Label: "Componente 09",
    c9Name: "Insignia circular",
    c9Desc:
      "Número de dos dígitos dentro de un círculo que alterna relleno y contorno (01 relleno, 02 contorno...). 48 px en el hero y en Quién soy, 64 px en Mi trabajo. Emerald sobre claro, amarillo sobre oscuro. Es decorativa: lleva aria-hidden y nunca es el único portador de información.",
    c10Label: "Componente 10",
    c10Name: "Tarjeta de roles",
    c10Desc:
      "Tarjeta blanca del hero con cinco roles en filas de 20 a 22 px, cada uno con su insignia de 48 px alternada. Sin rótulo visible: “Roles” va como aria-label de la lista. Se centra verticalmente respecto del bloque del nombre. Solo títulos que ya figuran en el sitio.",

    componentRulesTitle: "Reglas de uso",
    componentRules: [
      {
        strong: "Una sola gramática de tarjeta.",
        text: " Borde de 1 px, sombra teñida y radio de 24 o 28 px. Sin bordes de acento de color. Todo enlace externo lleva el ícono ↗ de 14 px.",
      },
      {
        strong: "Negrita sutil para datos clave.",
        text: " <strong> a peso 500 (la fuente se carga en 400, 500 y 700) en los porcentajes +392% y +128% y en “Content Design System” dentro de texto corrido. Ink sobre claro, cream sobre oscuro; nunca verde ni amarillo.",
      },
      {
        strong: "Cada sección sigue el mismo patrón.",
        text: " Eyebrow (versalita), heading (sans extrabold), cuerpo (sans regular). Tres pasos, ni uno más.",
      },
      {
        strong: "El amarillo resalta, no decora.",
        text: " Una sola palabra por título y los numerales. Nunca de forma ornamental.",
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
    coverMeta: "Brand guidelines v2.0 · 2026",

    colorsLabel: "Colors",
    colorsTitle: "Palette",
    colorsIntro:
      "The system is built on an emerald accent over a warm cream base. Grays are a short ramp: primary ink for body text, soft ink for secondary text, and a hairline for dividers. Yellow highlights a single word per title and only works as text on a dark surface.",

    accentSub: "Accent",
    graysSub: "Text and hairlines",
    surfacesSub: "Surfaces",
    surfacesIntro:
      "Content sections alternate between page (a paper tone, #f9f8f3) and tint. Cards use surface (#fcfcf9), a hair lighter than the page, so they read as raised. Cream (#fffdfb) is only text on dark surfaces. Hero, testimonials and footer use emerald-deep with a subtle radial gradient.",

    heroSurfaceLabel: "Dark surface (radial gradient)",
    contentSurfaceLabel: "Page (page)",
    cardSurfaceLabel: "Cards (surface)",
    altSurfaceLabel: "Alt content (tint)",
    footerSurfaceLabel: "Hero, testimonials, footer (emerald-deep)",

    colorRules: [
      {
        strong: "Yellow is never text on a light surface.",
        text: " It’s used as a fill behind dark text, or directly as text on a dark surface.",
      },
      {
        strong: "Emerald is the accent, not the background.",
        text: " Reserved for borders, buttons and links. Large backgrounds use page, tint or emerald-deep.",
      },
      {
        strong: "Gradients belong to dark surfaces only.",
        text: " Hero, testimonials and footer. Everything else is a solid fill.",
      },
    ],

    contrastLabel: "Contrast rules",
    contrastRules: [
      {
        strong: "Cream on emerald-deep.",
        text: " Ratio 12.06. AAA.",
      },
      {
        strong: "Yellow on emerald-deep.",
        text: " Ratio 9.37. AAA. The only context where yellow works as normal text.",
      },
      {
        strong: "Yellow on emerald, large text only.",
        text: " Ratio 4.00. Only at 24px or above, or 19px bold. Never in small text.",
      },
      {
        strong: "Yellow on cream or white.",
        text: " Never as text. Only as a fill behind dark text.",
      },
      {
        strong: "Emerald on page, surface or tint.",
        text: " Ratio 4.91 on page, 5.08 on surface and 4.50 on tint (right at the AA limit: on tint, bold or large text only).",
      },
      {
        strong: "Ink and ink-muted on page, surface or tint.",
        text: " Between 6.52 and 11.90. AA or AAA depending on the pair.",
      },
      {
        strong: "Minimums required.",
        text: " 4.5:1 for normal text, 3:1 for large text and UI components.",
      },
    ],

    typographyLabel: "Typography",
    typographyTitle: "Typographic voice",
    typographyIntro:
      "One family: DM Sans, from regular to extrabold. Yellow italics mark a single word per title, never full phrases.",
    signatureCaption: "The signature gesture: yellow italic names the key word.",

    specimenBody:
      "Body text in DM Sans. I design content systems and combine human-centered writing with the strategic use of AI to connect business objectives with user needs.",
    specimenSmall: "Secondary text and captions in DM Sans, 14px, soft ink.",

    typeEyebrowMeta: "Eyebrow",
    typeEyebrowSpec: "DM Sans · Bold 700 · Uppercase · Emerald or yellow",
    typeH1Meta: "H1 / Display",
    typeH1Spec: "DM Sans · Extrabold 800 · clamp(40px, 7vw, 64px)",
    typeH2Meta: "H2 / Heading",
    typeH2Spec: "DM Sans · Extrabold 800 · clamp(28px, 4vw, 40px)",
    typeH3Meta: "H3 / Subheading",
    typeH3Spec: "DM Sans · Bold 700 · clamp(20px, 2.4vw, 22px)",
    typeBodyMeta: "Body",
    typeBodySpec: "DM Sans · Regular 400 · 16px",
    typeSmallMeta: "Small / Caption",
    typeSmallSpec: "DM Sans · Regular 400 · 13 to 14px · Soft ink",

    typeH2Example: "About me",
    typeH3Example: "Mercado Libre",

    typeRulesTitle: "Usage rules",
    typeRules: [
      {
        strong: "Purposeful weights.",
        text: " Regular (400) for body, bold (700) for buttons and chips, extrabold (800) for headings and numerals.",
      },
      {
        strong: "Partial italics.",
        text: " Mark a single key word per title. Never full phrases.",
      },
      {
        strong: "No em dashes.",
        text: " The separator is always a middle dot (·), with a space on each side.",
      },
    ],

    componentsLabel: "Components",
    componentsTitle: "Pieces and hierarchy",
    componentsIntro:
      "A single card grammar: 1 px border, a soft emerald-deep tinted shadow, and a 24 px radius on compact cards (Who I am, Skills, Education, Experience, Testimonials) or 28 px on large ones (projects, roles). Large cards add a badge and labeled metadata. No colored accent borders.",

    c1Label: "Component 01",
    c1Name: "Button",
    c1Desc:
      "Pill with two variants: emerald fill for the primary action, outline for the secondary one. On a dark surface, the fill adds a mint border to satisfy non-text contrast, and the outline switches to mint too. Visible focus: emerald ring on light, yellow on dark.",

    c2Label: "Component 02",
    c2Name: "Numbered card",
    c2Desc:
      "Compact card with a numbered circular badge (48 px) that alternates fill and outline. Used in Who I am.",
    c2ItemTitle: "Content Design System",
    c2ItemBody: " built from scratch (Banco Macro).",

    c3Label: "Component 03",
    c3Name: "Chip",
    c3Desc:
      "Small bordered pill, no color fill. Used in Skills & tools, in three columns over a tint background.",

    c4Label: "Component 04",
    c4Name: "Metric card",
    c4Desc:
      "Large number that counts up on entering the viewport, plus a context line. Lives only in the Results strip (+392% and +128%). The final value is always in the HTML; with prefers-reduced-motion it does not animate.",
    c4Eyebrow: "B2B campaign · Banco Galicia",
    c4Line: "1.23% conversion against a 0.25% benchmark.",

    c5Label: "Component 05",
    c5Name: "Testimonial card",
    c5Desc:
      "Emerald quote mark, italic body, author in sans bold, role in soft ink. Author name and role are separated by a line break, with no middle dots or dashes.",
    c5Quote:
      "It’s not often that you have the chance to work with someone with such a unique set of skills. At his core, Juan is a writer who has expanded his expertise from a foundation in storytelling, poetry, and essays to the world of UX. He possesses a rare combination of work ethic, pragmatism, and creativity that would make him an excellent fit for any team looking for someone with autonomy and a problem-solving mindset.",
    c5Author: "Guido Villaverde",
    c5Role: "Senior Engineering Manager at Miro",

    c6Label: "Component 06",
    c6Name: "Experience card",
    c6Desc:
      "Compact version of the metadata card. Date on top in emerald, on a single line, separated by a hairline. Below, role, company and description. Links as pills with ↗. Two-column grid read by rows; one column on mobile.",
    c6Date: "Jan 2025 to Mar 2026",
    c6Role: "Content Expert",
    c6Company: "Banco Galicia (Nonconformist)",
    c6Detail:
      "B2B content for financial products. Campaigns with +392% and +128% above benchmark.",

    c7Label: "Component 07",
    c7Name: "Footer",
    c7Desc:
      "Dark surface that continues the Testimonials gradient with no seam. Name and specialties on the left (no item is split); external links with ↗; contact with Buenos Aires local time. Closes with a large headline (up to 72 px) with one word in yellow italic and Let’s talk and LinkedIn pills.",
    c7Tagline:
      "Content Designer & Strategist · UX Writing · Branding · Content Strategy · AI workflows",
    c7LinksTitle: "Links",
    c7ContactTitle: "Contact",
    c7CTA: "Let’s build something ",
    c7CTAWord: "together",
    c7CTABtn: "Let’s talk",

    c8Label: "Component 08",
    c8Name: "Metadata card",
    c8Desc:
      "Large project card: numbered badge, title, labeled metadata (Role, Period) with a top hairline, description and content-width link pills with ↗. Only existing metadata is shown. Featured variant on emerald-deep.",
    c9Label: "Component 09",
    c9Name: "Circular badge",
    c9Desc:
      "Two-digit number inside a circle that alternates fill and outline (01 filled, 02 outline...). 48 px in the hero and Who I am, 64 px in My work. Emerald on light, yellow on dark. Decorative: it carries aria-hidden and is never the only carrier of information.",
    c10Label: "Component 10",
    c10Name: "Roles card",
    c10Desc:
      "White hero card with five roles in 20 to 22 px rows, each with its alternating 48 px badge. No visible label: “Roles” is the list’s aria-label. Vertically centered against the name block. Only titles already on the site.",

    componentRulesTitle: "Usage rules",
    componentRules: [
      {
        strong: "A single card grammar.",
        text: " 1 px border, tinted shadow and a 24 or 28 px radius. No colored accent borders. Every external link carries the 14 px ↗ icon.",
      },
      {
        strong: "Subtle bold for key data.",
        text: " <strong> at weight 500 (the font loads 400, 500 and 700) on the +392% and +128% percentages and on “Content Design System” in running text. Ink on light, cream on dark; never green or yellow.",
      },
      {
        strong: "Every section follows the same pattern.",
        text: " Eyebrow (uppercase), heading (sans extrabold), body (sans regular). Three steps, no more.",
      },
      {
        strong: "Yellow highlights, it doesn’t decorate.",
        text: " One word per title and the numerals. Never ornamental.",
      },
    ],

    printTitle: "Export as PDF",
    printBody:
      "Use your browser’s Print command and choose “Save as PDF” to download a local copy.",
    printBtn: "Print / Save as PDF",
    backHome: "Back to site",
  },
} as const;

export default function Guidelines() {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const saved = sessionStorage.getItem("lang");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrates from sessionStorage, runs once before paint
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
      <div className="lang-switch gl-lang-switch" role="group" aria-label="Language">
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

      <main>
      {/* COVER */}
      <section className="gl-cover">
        <p className="gl-cover-eyebrow">{t.coverEyebrow}</p>
        <h1>
          {lang === "es" ? (
            <>
              Un sistema <em className="accent-word">silencioso</em>
            </>
          ) : (
            <>
              A quiet <em className="accent-word">system</em>
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
                style={{ background: "var(--emerald)" }}
              />
              <div className="gl-swatch-body">
                <div className="gl-swatch-name">Emerald</div>
                <div className="gl-swatch-hex">#0f7b5f</div>
                <div className="gl-swatch-role">
                  {lang === "es"
                    ? "Acento principal. Botones, bordes de tarjeta, enlaces, foco sobre claro."
                    : "Primary accent. Buttons, card borders, links, focus on light."}
                </div>
              </div>
            </div>
            <div className="gl-swatch">
              <span
                className="gl-swatch-chip"
                style={{ background: "var(--yellow)" }}
              />
              <div className="gl-swatch-body">
                <div className="gl-swatch-name">Yellow</div>
                <div className="gl-swatch-hex">#f6e27a</div>
                <div className="gl-swatch-role">
                  {lang === "es"
                    ? "Resaltado. Palabra destacada de cada h2, numerales, foco sobre oscuro."
                    : "Highlight. Accent word in every h2, numerals, focus on dark."}
                </div>
              </div>
            </div>
            <div className="gl-swatch">
              <span
                className="gl-swatch-chip"
                style={{ background: "var(--mint)" }}
              />
              <div className="gl-swatch-body">
                <div className="gl-swatch-name">Mint</div>
                <div className="gl-swatch-hex">#b8dcce</div>
                <div className="gl-swatch-role">
                  {lang === "es"
                    ? "Texto secundario y bordes sobre fondo oscuro (emerald-deep)."
                    : "Secondary text and borders on dark surfaces (emerald-deep)."}
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
                <div className="gl-swatch-hex">#063d2f</div>
                <div className="gl-swatch-role">
                  {lang === "es"
                    ? "Texto primario sobre claro."
                    : "Primary text on light."}
                </div>
              </div>
            </div>
            <div className="gl-swatch">
              <span
                className="gl-swatch-chip"
                style={{ background: "var(--ink-muted)" }}
              />
              <div className="gl-swatch-body">
                <div className="gl-swatch-name">Ink muted</div>
                <div className="gl-swatch-hex">#3d5a50</div>
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
                  background: "var(--surface)",
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
                <div className="gl-swatch-name">Border</div>
                <div className="gl-swatch-hex">#bfddd1</div>
                <div className="gl-swatch-role">
                  {lang === "es"
                    ? "Bordes de tarjeta (1 px) y hairlines. Chips en #a7cfbf; hover y foco en emerald al 50%. Decorativo, no cumple 3:1."
                    : "Card borders (1 px) and hairlines. Chips in #a7cfbf; hover and focus in emerald at 50%. Decorative, fails 3:1."}
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
                <div className="gl-swatch-hex">#f9f8f3</div>
              </div>
            </div>
            <div className="gl-surface-card">
              <div className="gl-surface-card-preview gl-preview-surface" />
              <div className="gl-swatch-body">
                <div className="gl-swatch-name">{t.cardSurfaceLabel}</div>
                <div className="gl-swatch-hex">#fcfcf9</div>
              </div>
            </div>
            <div className="gl-surface-card">
              <div className="gl-surface-card-preview gl-preview-tint" />
              <div className="gl-swatch-body">
                <div className="gl-swatch-name">{t.altSurfaceLabel}</div>
                <div className="gl-swatch-hex">#e4f1ec</div>
              </div>
            </div>
            <div className="gl-surface-card">
              <div className="gl-surface-card-preview gl-preview-dark" />
              <div className="gl-swatch-body">
                <div className="gl-swatch-name">{t.footerSurfaceLabel}</div>
                <div className="gl-swatch-hex">#063d2f</div>
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

          <h3 className="gl-subheading">{t.contrastLabel}</h3>
          <div className="gl-rules">
            {t.contrastRules.map((r, i) => (
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
              Juan <em className="accent-word">Rapacioli</em>
            </div>
            <div className="gl-signature-caption">{t.signatureCaption}</div>
          </div>

          <div className="gl-type-stack">
            <div className="gl-type-row">
              <div className="gl-type-meta">
                <strong>{t.typeEyebrowMeta}</strong>
                {t.typeEyebrowSpec}
              </div>
              <div className="eyebrow gl-specimen-eyebrow">{t.colorsLabel}</div>
            </div>

            <div className="gl-type-row">
              <div className="gl-type-meta">
                <strong>{t.typeH1Meta}</strong>
                {t.typeH1Spec}
              </div>
              <div className="gl-specimen-h1">
                Juan <em className="accent-word">Rapacioli</em>
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
                <strong>{t.typeH3Meta}</strong>
                {t.typeH3Spec}
              </div>
              <div className="gl-specimen-h3">{t.typeH3Example}</div>
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

          {/* c1 — Button */}
          <div className="gl-component">
            <p className="gl-component-label">{t.c1Label}</p>
            <h3 className="gl-component-name">{t.c1Name}</h3>
            <p className="gl-component-desc">{t.c1Desc}</p>
            <div className="gl-demo gl-demo-cream">
              <div className="gl-demo-buttons">
                <button type="button" className="btn btn-primary">
                  {lang === "es" ? "Hablemos" : "Let’s talk"}
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
            <div className="gl-demo gl-demo-dark">
              <div className="gl-demo-buttons surface-dark">
                <button type="button" className="btn btn-primary">
                  {lang === "es" ? "Hablemos" : "Let’s talk"}
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
          </div>

          {/* c2 — Numbered card */}
          <div className="gl-component">
            <p className="gl-component-label">{t.c2Label}</p>
            <h3 className="gl-component-name">{t.c2Name}</h3>
            <p className="gl-component-desc">{t.c2Desc}</p>
            <div className="gl-demo gl-demo-cream">
              <div className="skill-item">
                <span className="badge badge--md badge--filled" aria-hidden="true">
                  01
                </span>
                <span className="skill-text">
                  <strong style={{ fontWeight: 700, color: "var(--emerald)" }}>
                    {t.c2ItemTitle}
                  </strong>
                  {t.c2ItemBody}
                </span>
              </div>
            </div>
          </div>

          {/* c3 — Chip */}
          <div className="gl-component">
            <p className="gl-component-label">{t.c3Label}</p>
            <h3 className="gl-component-name">{t.c3Name}</h3>
            <p className="gl-component-desc">{t.c3Desc}</p>
            <div className="gl-demo gl-demo-tint">
              <div className="chip-group">
                <span className="chip">UX Writing</span>
                <span className="chip">Figma</span>
                <span className="chip">Claude / Claude Code</span>
              </div>
            </div>
          </div>

          {/* c4 — Metric card */}
          <div className="gl-component">
            <p className="gl-component-label">{t.c4Label}</p>
            <h3 className="gl-component-name">{t.c4Name}</h3>
            <p className="gl-component-desc">{t.c4Desc}</p>
            <div className="gl-demo gl-demo-cream">
              <div className="metric-card metric-card--compact gl-demo-metric">
                <p className="metric-eyebrow">{t.c4Eyebrow}</p>
                <div className="metric-value">+392%</div>
                <p className="metric-line">{t.c4Line}</p>
              </div>
            </div>
          </div>

          {/* c5 — Testimonial */}
          <div className="gl-component">
            <p className="gl-component-label">{t.c5Label}</p>
            <h3 className="gl-component-name">{t.c5Name}</h3>
            <p className="gl-component-desc">{t.c5Desc}</p>
            <div className="gl-demo gl-demo-dark">
              <div className="ref-card">
                <p className="ref-quote">{t.c5Quote}</p>
                <p className="ref-author">{t.c5Author}</p>
                <p className="ref-role">{t.c5Role}</p>
              </div>
            </div>
          </div>

          {/* c6 — Timeline */}
          <div className="gl-component">
            <p className="gl-component-label">{t.c6Label}</p>
            <h3 className="gl-component-name">{t.c6Name}</h3>
            <p className="gl-component-desc">{t.c6Desc}</p>
            <div className="gl-demo gl-demo-cream">
              <article className="card card--compact exp-card gl-demo-narrow">
                <p className="exp-date">{t.c6Date}</p>
                <h4 className="exp-role">{t.c6Role}</h4>
                <p className="exp-company">{t.c6Company}</p>
                <p className="exp-detail">{t.c6Detail}</p>
                <div className="pill-group">
                  <span className="pill-link">
                    Nonconformist
                    <Arrow />
                  </span>
                </div>
              </article>
            </div>
          </div>

          {/* c7 — Footer */}
          <div className="gl-component">
            <p className="gl-component-label">{t.c7Label}</p>
            <h3 className="gl-component-name">{t.c7Name}</h3>
            <p className="gl-component-desc">{t.c7Desc}</p>
            <div className="gl-footer-preview">
              <div className="gl-footer-preview-inner">
                <div>
                  <div className="gl-footer-preview-name">
                    Juan
                    <br />
                    Rapacioli
                  </div>
                  <p className="gl-footer-preview-tagline">{t.c7Tagline}</p>
                </div>
                <div>
                  <p className="gl-footer-preview-col-title">
                    {t.c7LinksTitle}
                  </p>
                  <ul className="gl-footer-preview-links">
                    <li>LinkedIn</li>
                    <li>Linktree</li>
                  </ul>
                </div>
                <div>
                  <p className="gl-footer-preview-col-title">
                    {t.c7ContactTitle}
                  </p>
                  <ul className="gl-footer-preview-links">
                    <li>juanrapacioli@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div className="gl-footer-preview-cta">
                <p>
                  {t.c7CTA}
                  <em style={{ color: "var(--yellow)" }}>{t.c7CTAWord}</em>.
                </p>
                <div className="gl-footer-preview-btns">
                  <span className="gl-footer-preview-btn">{t.c7CTABtn}</span>
                  <span className="gl-footer-preview-btn gl-footer-preview-btn--outline">
                    LinkedIn
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* c8 — Metadata card */}
          <div className="gl-component">
            <p className="gl-component-label">{t.c8Label}</p>
            <h3 className="gl-component-name">{t.c8Name}</h3>
            <p className="gl-component-desc">{t.c8Desc}</p>
            <div className="gl-demo gl-demo-tint gl-demo-stack">
              <article className="card project-card">
                <div className="project-head">
                  <span className="badge badge--lg badge--outline" aria-hidden="true">
                    02
                  </span>
                  <h4 className="project-title">Banco Galicia</h4>
                  <dl className="meta-list">
                    <div className="meta-item">
                      <dt>{lang === "es" ? "Rol" : "Role"}</dt>
                      <dd>Content Expert</dd>
                    </div>
                    <div className="meta-item">
                      <dt>{lang === "es" ? "Período" : "Period"}</dt>
                      <dd>{t.c6Date}</dd>
                    </div>
                  </dl>
                </div>
                <div className="project-body">
                  <p>{t.c6Detail}</p>
                  <div className="pill-group">
                    <span className="pill-link">
                      App Galicia Office
                      <Arrow />
                    </span>
                  </div>
                </div>
              </article>
              <article className="card card--dark surface-dark project-card">
                <div className="project-head">
                  <span className="badge badge--lg badge--filled" aria-hidden="true">
                    03
                  </span>
                  <h4 className="project-title">Banco Macro</h4>
                </div>
                <div className="project-body">
                  <p className="project-kicker">
                    {t.c2ItemTitle}{" "}
                    <em className="highlight-yellow">{t.c2ItemBody.replace(" (Banco Macro).", "").trim()}</em>
                  </p>
                  <div className="pill-group">
                    <span className="pill-link">
                      Content Design System
                      <Arrow />
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* c9 — Circular badge */}
          <div className="gl-component">
            <p className="gl-component-label">{t.c9Label}</p>
            <h3 className="gl-component-name">{t.c9Name}</h3>
            <p className="gl-component-desc">{t.c9Desc}</p>
            <div className="gl-demo gl-demo-cream">
              <div className="gl-demo-badges">
                <span className="badge badge--lg badge--filled">01</span>
                <span className="badge badge--lg badge--outline">02</span>
                <span className="badge badge--filled">03</span>
                <span className="badge badge--outline">04</span>
              </div>
            </div>
            <div className="gl-demo gl-demo-dark">
              <div className="gl-demo-badges surface-dark">
                <span className="badge badge--lg badge--filled">01</span>
                <span className="badge badge--lg badge--outline">02</span>
                <span className="badge badge--filled">03</span>
                <span className="badge badge--outline">04</span>
              </div>
            </div>
          </div>

          {/* c10 — Roles card */}
          <div className="gl-component">
            <p className="gl-component-label">{t.c10Label}</p>
            <h3 className="gl-component-name">{t.c10Name}</h3>
            <p className="gl-component-desc">{t.c10Desc}</p>
            <div className="gl-demo gl-demo-dark surface-dark">
              <div className="roles-card surface-light gl-demo-narrow">
                <ul className="roles-list" aria-label="Roles">
                  {["Content Strategist", "UX Writer", lang === "es" ? "Periodista" : "Journalist"].map((r, i) => (
                    <li key={r}>
                      <span
                        className={`badge badge--md ${i % 2 === 0 ? "badge--filled" : "badge--outline"}`}
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>
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
          <button type="button" onClick={handlePrint} className="gl-print-btn">
            {t.printBtn}
          </button>
          <div>
            <Link href="/" className="gl-back-home">
              ← {t.backHome}
            </Link>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}
