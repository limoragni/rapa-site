"use client";

import "./globals.css";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

type Lang = "es" | "en";

const META_DESC_EN =
  "UX Writing and Content Design for digital products and B2B. I build content systems, define strategy, and measure results with a focus on real user needs.";
const META_DESC_ES =
  "UX Writing y Content Design para banca digital y B2B. Diseño sistemas de contenido, defino estrategia y mido resultados con foco en las personas usuarias.";

const TITLE_ES = "Juan Rapacioli · Content Designer & Strategist";
const TITLE_EN = "Juan Rapacioli · Content Designer & Strategist";

const content = {
  es: {
    skipToContent: "Saltar al contenido",
    heroTag: "UX Writing · Branding · Content Strategy · AI workflows",
    heroRole: "Content Designer & Strategist",
    heroSub:
      "Diseño el contenido de productos digitales: convierto objetivos de negocio en experiencias claras, una palabra a la vez.",
    heroBtnTalk: "Hablemos",
    heroBtnEmailCopied: "Email copiado",
    heroScroll: "Explorá el sitio",
    rolesEyebrow: "Roles",
    roleContentStrategist: "Content Strategist",
    roleAuthor: "Autor",

    resultsLabel: "Resultados",
    metricEyebrow: "Campaña B2B · Banco Galicia",
    metric392Line: "1,23% de conversión contra un benchmark de 0,25%.",
    metric128Line: "2,97% de conversión contra un benchmark de 1,30%.",
    metricFootnote:
      "El porcentaje compara la conversión de la campaña con su benchmark esperado.",

    aboutLabel: "Quién soy",
    aboutP1Html:
      "<strong>Content Designer &amp; Strategist</strong> con experiencia en <strong>servicios financieros</strong>, <strong>banca digital</strong> y <strong>campañas B2B</strong>. Diseño sistemas de contenido, defino estrategia y mido resultados.",
    aboutP2:
      "Combino escritura human-centered con el uso estratégico de IA para asegurar que el contenido sea claro, medible y escalable.",
    aboutBlock1Html:
      '<strong>Content Design System</strong> <mark class="mark">construido desde cero</mark> (Banco Macro).',
    aboutBlock2Html:
      "<strong>Campañas B2B</strong> con +392% y +128% sobre benchmark de conversión (Banco Galicia).",
    aboutBlock3Html:
      "<strong>Certificaciones</strong> en Claude, Claude Code y Cowork (Anthropic).",

    portfolioLabel: "Cómo trabajo",
    portfolioTitle: "Mi trabajo",
    portfolioTitleWord: "trabajo",
    portfolioFeatured: "Proyectos destacados",

    meliTitle: "Mercado Libre",
    meliSubtitle: "Desafío UX Meli+",
    meliContext:
      "Rediseño del landing de suscripción Meli+ y mejora del flujo de pago alternativo.",
    meliResult:
      "El caso incluye racionales de contenido y métricas objetivo, mostrando el criterio detrás de cada cambio en el flujo.",
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
    macroHighlight: "construido desde cero",
    metaRole: "Rol",
    metaPeriod: "Período",

    dhLink: "Guía de estilo",

    ceremLink: "Artículos financieros y redes sociales",

    untrefTitle: "Universidad Nacional de Tres de Febrero",
    untrefLink: "Metodología de Estudio",

    ncTitle: "Nonconformist",

    journalismContext:
      "Cultura, música y literatura para Télam, Perfil y La Agenda.",
    journalismLink: "Artículos y reseñas",

    expertiseLabel: "Con qué trabajo",
    expertiseTitle: "Skills y herramientas",
    expertiseTitleWord: "herramientas",
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
      "Adobe Experience Manager (AEM)",
      "Zeroheight",
    ],

    expLabel: "El recorrido",
    expTitle: "Experiencia",
    expTitleWord: "Experiencia",
    exp: [
      {
        id: "nodus",
        date: "May 2026 a Jul 2026",
        role: "Product Content Specialist",
        company: "Nodus Company",
        detail:
          "Contenido educativo y piezas de nurturing para clientes en LATAM.",
      },
      {
        id: "galicia",
        date: "Ene 2025 a Mar 2026",
        role: "Content Expert",
        company: "Banco Galicia (Nonconformist)",
        detail:
          "Contenido B2B para productos financieros. Campañas con +392% y +128% sobre benchmark.",
        detail2:
          "Carga y edición de contenido web bancario en Adobe Experience Manager (AEM).",
      },
      {
        id: "macro",
        date: "Abr 2024 a Ene 2025",
        role: "Content Designer",
        company: "Banco Macro (Nonconformist)",
        detail: "Content Design System construido desde cero.",
      },
      {
        id: "dh",
        date: "Ene 2022 a Ene 2023",
        role: "UX Writer",
        company: "Digital House",
        detail: "Guía de estilo institucional para contenidos educativos.",
      },
      {
        id: "cerem",
        date: "Ene 2021 a Ene 2022",
        role: "Content Writer",
        company: "Cerem Business School",
        detail: "Artículos financieros y voz de marca.",
      },
      {
        id: "untref",
        date: "Ene 2018 a Ene 2024",
        role: "Docente",
        company: "UNTREF",
        detail: "Metodología de Estudio en modalidad virtual.",
      },
      {
        id: "telam",
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

    eduLabel: "Validación",
    eduTitle: "Cursos y certificaciones",
    eduTitleWord: "certificaciones",
    eduCert: "Abrir certificado",
    languagesLabel: "En qué escribo",
    languagesTitle: "Idiomas",
    languagesTitleWord: "Idiomas",
    langSpanish: "Español",
    langSpanishLevel: "Nativo",
    langEnglish: "Inglés",
    langEnglishLevel: "C1 escrito · B2 alto hablado",

    testimonialsLabel: "Testimonios",
    testimonialsTitle: "Qué dicen de mí",
    testimonialsTitleWord: "dicen",

    footerTagline: "Content Designer & Strategist · UX Writing · Branding · Content Strategy · AI workflows",
    footerLinksTitle: "Enlaces",
    footerContactTitle: "Contacto",
    footerGuidelinesLink: "Guía de marca",
    footerCTA: "Construyamos algo juntos.",
    footerCTAWord: "juntos",
    footerCTABtn: "Contacto",
  },
  en: {
    skipToContent: "Skip to content",
    heroTag: "UX Writing · Branding · Content Strategy · AI workflows",
    heroRole: "Content Designer & Strategist",
    heroSub:
      "I design content for digital products: turning business objectives into clear experiences, one word at a time.",
    heroBtnTalk: "Let's talk",
    heroBtnEmailCopied: "Email copied!",
    heroScroll: "Scroll to explore",
    rolesEyebrow: "Roles",
    roleContentStrategist: "Content Strategist",
    roleAuthor: "Author",

    resultsLabel: "Results",
    metricEyebrow: "B2B campaign · Banco Galicia",
    metric392Line: "1.23% conversion against a 0.25% benchmark.",
    metric128Line: "2.97% conversion against a 1.30% benchmark.",
    metricFootnote:
      "The percentage compares the campaign's conversion with its expected benchmark.",

    aboutLabel: "Who I am",
    aboutP1Html:
      "<strong>Content Designer &amp; Strategist</strong> with experience in <strong>financial services</strong>, <strong>digital banking</strong>, and <strong>B2B campaigns</strong>. I design content systems, define strategy, and measure results.",
    aboutP2:
      "I combine human-centered writing with the strategic use of AI to make content clear, measurable, and scalable.",
    aboutBlock1Html:
      '<strong>Content Design System</strong> <mark class="mark">built from scratch</mark> (Banco Macro).',
    aboutBlock2Html:
      "<strong>B2B campaigns</strong> with +392% and +128% above conversion benchmark (Banco Galicia).",
    aboutBlock3Html:
      "<strong>Certifications</strong> in Claude, Claude Code, and Cowork (Anthropic).",

    portfolioLabel: "How I work",
    portfolioTitle: "My work",
    portfolioTitleWord: "work",
    portfolioFeatured: "Featured projects",

    meliTitle: "Mercado Libre",
    meliSubtitle: "UX Challenge Meli+",
    meliContext:
      "Subscription landing page redesign and alternative payment flow improvement for Meli+.",
    meliResult:
      "The case study includes content rationales and target metrics, showing the thinking behind each change in the flow.",
    meliLink: "Interactive case study",


    galiciaTitle: "Banco Galicia",
    galiciaContext:
      "B2B content for strategic verticals. Campaigns with +392% and +128% above conversion benchmark.",
    galiciaLink1: "Energy and Mining",
    galiciaLink2: "Consumer Goods",
    galiciaLink3: "Automotive",
    galiciaLink4: "App Galicia Office",

    macroTitle: "Banco Macro",
    macroContext:
      "Built the bank's first Content Design System, unifying voice and tone across multiple product teams.",
    macroLink: "Content Design System",
    macroHighlight: "built from scratch",
    metaRole: "Role",
    metaPeriod: "Period",

    dhLink: "Style Guide",

    ceremLink: "Financial articles & social media",

    untrefTitle: "National University of Tres de Febrero",
    untrefLink: "Study Methodology",

    ncTitle: "Nonconformist",

    journalismContext:
      "Culture, music, and literature for Télam, Perfil, and La Agenda.",
    journalismLink: "Articles and reviews",

    expertiseLabel: "What I work with",
    expertiseTitle: "Skills & tools",
    expertiseTitleWord: "tools",
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
      "Adobe Experience Manager (AEM)",
      "Zeroheight",
    ],

    expLabel: "The path",
    expTitle: "Work experience",
    expTitleWord: "experience",
    exp: [
      {
        id: "nodus",
        date: "May 2026 to Jul 2026",
        role: "Product Content Specialist",
        company: "Nodus Company",
        detail:
          "Educational content and nurturing pieces for clients across LATAM.",
      },
      {
        id: "galicia",
        date: "Jan 2025 to Mar 2026",
        role: "Content Expert",
        company: "Banco Galicia (Nonconformist)",
        detail:
          "B2B content for financial products. Campaigns with +392% and +128% above benchmark.",
        detail2:
          "Banking web content authoring and editing in Adobe Experience Manager (AEM).",
      },
      {
        id: "macro",
        date: "Apr 2024 to Jan 2025",
        role: "Content Designer",
        company: "Banco Macro (Nonconformist)",
        detail: "Content Design System built from scratch.",
      },
      {
        id: "dh",
        date: "Jan 2022 to Jan 2023",
        role: "UX Writer",
        company: "Digital House",
        detail: "Institutional style guide for educational content.",
      },
      {
        id: "cerem",
        date: "Jan 2021 to Jan 2022",
        role: "Content Writer",
        company: "Cerem Business School",
        detail: "Financial articles and brand voice.",
      },
      {
        id: "untref",
        date: "Jan 2018 to Jan 2024",
        role: "Lecturer",
        company: "UNTREF",
        detail: "Study Methodology in virtual format.",
      },
      {
        id: "telam",
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

    eduLabel: "Validation",
    eduTitle: "Courses & certifications",
    eduTitleWord: "certifications",
    eduCert: "Open certificate",
    languagesLabel: "What I write in",
    languagesTitle: "Languages",
    languagesTitleWord: "Languages",
    langSpanish: "Spanish",
    langSpanishLevel: "Native",
    langEnglish: "English",
    langEnglishLevel: "C1 written · High B2 spoken",

    testimonialsLabel: "Testimonials",
    testimonialsTitle: "What people say",
    testimonialsTitleWord: "say",

    footerTagline: "Content Designer & Strategist · UX Writing · Branding · Content Strategy · AI workflows",
    footerLinksTitle: "Links",
    footerContactTitle: "Contact",
    footerGuidelinesLink: "Brand guidelines",
    footerCTA: "Let's build something together.",
    footerCTAWord: "together",
    footerCTABtn: "Get in touch",
  },
} as const;

const TESTIMONIALS = [
  {
    author: "Guido Villaverde",
    linkedin: null,
    es: {
      quote:
        "No es habitual tener la oportunidad de trabajar con alguien con un conjunto de habilidades tan singular. En esencia, Juan es un escritor que expandió su expertise desde una base en storytelling, poesía y ensayo hacia el mundo del UX. Tiene una combinación poco común de ética de trabajo, pragmatismo y creatividad que lo haría encajar perfecto en cualquier equipo que busque a alguien con autonomía y mentalidad de resolución de problemas.",
      role: "Senior Engineering Manager en Miro",
    },
    en: {
      quote:
        "It's not often that you have the chance to work with someone with such a unique set of skills. At his core, Juan is a writer who has expanded his expertise from a foundation in storytelling, poetry, and essays to the world of UX. He possesses a rare combination of work ethic, pragmatism, and creativity that would make him an excellent fit for any team looking for someone with autonomy and a problem-solving mindset.",
      role: "Senior Engineering Manager at Miro",
    },
  },
  {
    author: "Jorge Couto",
    linkedin: "https://www.linkedin.com/in/jorge-couto-content-lead/",
    es: {
      quote:
        "Rapa, es un gran profesional del contenido. Metódico, siempre buscando la vuelta para que el entregable sea el mejor posible para los usuarios y tenga un buen impacto para el negocio. Y un tema no menor, tiene la habilidad de trabajar muy bien con otros roles de contenido y de negocio. Ah! trabaja cómodo en entornos con presión y demanda acelerada.",
      role: "Líder de Contenidos en Banco Galicia",
    },
    en: {
      quote:
        "Rapa is a great content professional. Methodical, always finding a way to make the deliverable the best it can be for users while driving real business impact. And no small thing: he has the ability to work very well with other content and business roles. Oh, and he's comfortable in high-pressure, fast-paced environments.",
      role: "Content Lead at Banco Galicia",
    },
  },
  {
    author: "Lara Purita",
    linkedin: null,
    es: {
      quote:
        "Tuve una gran experiencia trabajando con Rapa como UX Writer. Además de estar muy bien preparado para la misión de encontrar las palabras justas para darle voz a las experiencias digitales que creamos, es un profesional con verdaderas ganas de trabajar en equipos interdisciplinarios. ¡Fue un placer cruzar caminos en nuestras carreras!",
      role: "Directora de Estudio en Minds Colab",
    },
    en: {
      quote:
        "I had a great experience working with Rapa as a UX Writer. Beyond being very well-prepared for the mission of finding the right words to give voice to the digital experiences we create, he's a professional who is genuinely eager to work in interdisciplinary teams. It was a pleasure to cross paths in our careers!",
      role: "Studio Director at Minds Colab",
    },
  },
  {
    author: "Enrique Laffranconi",
    linkedin: null,
    es: {
      quote:
        "Tuve el placer de trabajar codo a codo con Juan en varios proyectos y puedo afirmar con confianza sus habilidades excepcionales como UX writer. Juan aporta una combinación única de creatividad y precisión, entregando de forma consistente contenido que no solo cautiva a las personas usuarias sino que mejora su experiencia general. Su atención al detalle y su capacidad para entender las necesidades de los usuarios lo vuelven un activo invaluable para cualquier equipo.",
      role: "Desarrollador Full-Stack",
    },
    en: {
      quote:
        "I have had the pleasure of working closely with Juan on several projects and I can confidently affirm his exceptional skills as a UX writer. Juan brings a unique combination of creativity and precision to his work, consistently delivering content that not only captivates users but also enhances their overall experience. His attention to detail and ability to understand user needs make him an invaluable asset to any team.",
      role: "Full-Stack Developer",
    },
  },
  {
    author: "Cecilia Rios Navarro",
    linkedin: null,
    es: {
      quote:
        "Recomiendo muchísimo a Juan Rapacioli. Lo que más se destaca es su extraordinaria responsabilidad por cada tarea que asume. Desde el inicio de cualquier proyecto se compromete por completo y se hace cargo de entregar resultados de calidad a tiempo. Además, Juan demuestra una gran capacidad para trabajar en equipo, siempre receptivo a las ideas y dispuesto a colaborar para alcanzar objetivos comunes.",
      role: "Product Manager",
    },
    en: {
      quote:
        "I highly recommend Juan Rapacioli. What stands out most is his extraordinary accountability for every task he undertakes. From the start of any project, he commits fully and takes responsibility for delivering quality results on time. Beyond that, Juan demonstrates a great ability to work in teams, always receptive to ideas and willing to collaborate to reach common goals.",
      role: "Product Manager",
    },
  },
  {
    author: "Delfina Tertzakian",
    linkedin: null,
    es: {
      quote:
        "Juan es un profesional de altos estándares, con ojo para el detalle y una genuina disposición a seguir aprendiendo y mejorando. Es adaptable y trabaja bien en equipo. Su especialidad es la escritura y la corrección; cuando trabajamos juntos desarrolló el manual de marca para productos educativos con criterio y recibió muy bien la devolución. Recomiendo su trabajo y a él.",
      role: "Consultora de E-Learning",
    },
    en: {
      quote:
        "Juan is a high-standards professional with an eye for detail and a genuine willingness to keep learning and improving. He is adaptable and works well in teams. His specialty is writing and proofreading; when we worked together he developed the brand manual for educational products assertively and received feedback well. I recommend his work and him.",
      role: "E-Learning Consultant",
    },
  },
] as const;

function HighlightedTitle({
  text,
  word,
  className,
}: {
  text: string;
  word: string;
  className?: string;
}) {
  const idx = text.indexOf(word);
  if (idx === -1) return <h2 className={className}>{text}</h2>;
  const before = text.slice(0, idx);
  const after = text.slice(idx + word.length);
  return (
    <h2 className={className}>
      {before}
      <em className="accent-word">{word}</em>
      {after}
    </h2>
  );
}

/** Joins the last two words with a no-break space (backup for text-wrap: balance). */
function noWidow(text: string) {
  const i = text.lastIndexOf(" ");
  return i === -1 ? text : `${text.slice(0, i)}\u00A0${text.slice(i + 1)}`;
}

/** Eyebrow list: each item keeps its trailing " ·" glued to it (nowrap), so a
 *  line can only break between items and never starts with a separator. */
function DotList({ text, className }: { text: string; className?: string }) {
  const items = text.split(" · ");
  return (
    <p className={className}>
      {items.map((item, i) => (
        <Fragment key={item}>
          <span className="nowrap">
            {item}
            {i < items.length - 1 ? " ·" : ""}
          </span>
          {i < items.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </p>
  );
}

function RolesCard({ label, roles }: { label: string; roles: string[] }) {
  return (
    <div className="roles-card surface-light">
      <ul className="roles-list" aria-label={label}>
        {roles.map((role, i) => (
          <li key={role}>
            <span
              className={`badge badge--md ${i % 2 === 0 ? "badge--filled" : "badge--outline"}`}
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {role}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArrowIcon() {
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

function PillLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="pill-link">
      {children}
      <ArrowIcon />
    </a>
  );
}

function MetaList({ items }: { items: [string, string][] }) {
  const rows = items.filter(([, value]) => value);
  if (rows.length === 0) return null;
  return (
    <dl className="meta-list">
      {rows.map(([label, value]) => (
        <div className="meta-item" key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

const BA_TIME = new Intl.DateTimeFormat("es-AR", {
  timeZone: "America/Argentina/Buenos_Aires",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

/** Local time in Buenos Aires (24 h). Server and first client render show the
 *  same placeholder, so there is no hydration mismatch; the real time is set
 *  after mount and refreshed on every minute boundary. */
function BuenosAiresClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const tick = () => {
      setTime(BA_TIME.format(new Date()));
      timeout = setTimeout(tick, 60_000 - (Date.now() % 60_000) + 50);
    };
    tick();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <p className="footer-clock">
      Buenos Aires{" "}
      <time dateTime={time ?? undefined} suppressHydrationWarning>
        {time ?? "--:--"}
      </time>
    </p>
  );
}

function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
}

function MetricCard({
  eyebrow,
  value,
  line,
  compact = false,
}: {
  eyebrow: string;
  value: number;
  line: string;
  compact?: boolean;
}) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- skips the count/fill animation entirely per user preference
      setDisplay(value);
      return;
    }

    if (!inView) return;

    const duration = 1100;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div
      ref={ref}
      className={compact ? "metric-card metric-card--compact" : "metric-card"}
    >
      <p className="metric-eyebrow">{eyebrow}</p>
      <div className="metric-value">
        <span aria-hidden="true">+{display}%</span>
        <span className="sr-only">+{value}%</span>
      </div>
      <p className="metric-line">{line}</p>
    </div>
  );
}

const NAV_SECTION_IDS = ["about", "work", "skills", "experience", "testimonials"];

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const [copied, setCopied] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("lang");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrates from sessionStorage, runs once before paint
    if (saved === "es" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === "es" ? TITLE_ES : TITLE_EN;
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

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const hero = document.getElementById("hero");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          // Back on the hero: no menu item is active.
          setActiveSection(entry.target.id === "hero" ? null : entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((el) => observer.observe(el));
    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, [lang]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("juanrapacioli@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const t = content[lang];
  // Role titles already on the site, looked up by experience id.
  const jobOf = (id: string) => t.exp.find((job) => job.id === id);
  const roleOf = (id: string) => jobOf(id)?.role ?? "";

  // Experience cards, newest start date first. Links and extra lines come
  // from the former "También trabajé en" block so nothing is lost.
  const bowieLine = (
    <>
      {t.expJournalistPre}
      <a
        href="https://gourmetmusicalediciones.com/libros/por-que-escuchamos-a-david-bowie/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-link"
      >
        <em>Por qué escuchamos a David Bowie</em>
      </a>
      {t.expJournalistPost}
    </>
  );
  const extra: Record<string, { details?: React.ReactNode[]; links?: [string, string][]; company?: string }> = {
    galicia: {
      links: [["https://nonconformist.digital/project-galicia.html", t.ncTitle]],
    },
    dh: {
      links: [["https://drive.google.com/file/d/1jo8paYFY1HWMJwfXo_P1rFK3Da8q_KGn/view", t.dhLink]],
    },
    cerem: { links: [["https://www.cerem.es/", t.ceremLink]] },
    untref: {
      company: `${t.untrefTitle} (UNTREF)`,
      links: [["https://untref.edu.ar/estudiar-en-untref", t.untrefLink]],
    },
  };
  const toCard = (job: (typeof t.exp)[number]) => ({
    key: job.id,
    date: job.date,
    role: job.role,
    company: extra[job.id]?.company ?? job.company,
    details: [
      job.detail,
      ...("detail2" in job && job.detail2 ? [job.detail2] : []),
      ...(extra[job.id]?.details ?? []),
    ] as React.ReactNode[],
    links: extra[job.id]?.links ?? [],
  });
  const experience = [
    ...t.exp.filter((job) => job.id !== "telam").map(toCard),
    {
      key: "journalist",
      date: t.expJournalistDate,
      role: t.expJournalistRole,
      company: t.expJournalistCompany,
      details: [t.journalismContext, bowieLine] as React.ReactNode[],
      links: [["https://linktr.ee/jrapacioli", t.journalismLink]] as [string, string][],
    },
    ...t.exp.filter((job) => job.id === "telam").map(toCard),
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">
        {t.skipToContent}
      </a>

      {/* NAV */}
      <nav
        className={
          navScrolled ? "site-nav site-nav--scrolled" : "site-nav surface-dark"
        }
      >
        <div className="site-nav-inner">
          <a href="#hero" className="site-nav-logo">
            Juan Rapacioli
          </a>
          <ul className="site-nav-links">
            {(
              [
                ["about", t.aboutLabel],
                ["work", t.portfolioTitle],
                ["skills", t.expertiseLabel],
                ["experience", t.expTitle],
                ["testimonials", t.testimonialsLabel],
              ] as const
            ).map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? "active" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="site-nav-right">
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
            <button onClick={handleCopyEmail} className="btn btn-primary">
              {copied ? t.heroBtnEmailCopied : t.heroBtnTalk}
            </button>
          </div>
        </div>
      </nav>

      <main id="main-content">
      {/* HERO */}
      <section className="hero surface-dark" id="hero">
        <div className="container hero-layout">
          <div>
            <DotList text={t.heroTag} className="hero-tag" />
            <h1>
              Juan
              <br />
              <em>Rapacioli</em>
            </h1>
            <p className="hero-role">{t.heroRole}</p>
            <p className="tagline hero-sub">{noWidow(t.heroSub)}</p>
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
          <RolesCard
            label={t.rolesEyebrow}
            roles={[
              t.roleContentStrategist,
              roleOf("dh"),
              t.expJournalistRole,
              roleOf("untref"),
              t.roleAuthor,
            ]}
          />
        </div>
        <div className="hero-scroll">{t.heroScroll}</div>
      </section>

      {/* RESULTS STRIP */}
      <section className="results-strip">
        <div className="container">
          <p className="eyebrow reveal">{t.resultsLabel}</p>
          <div className="results-grid">
            <MetricCard
              compact
              eyebrow={t.metricEyebrow}
              value={392}
              line={t.metric392Line}
            />
            <MetricCard
              compact
              eyebrow={t.metricEyebrow}
              value={128}
              line={t.metric128Line}
            />
          </div>
          <p className="metric-footnote results-footnote">
            {t.metricFootnote}
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
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
                      dicen <em className="accent-word">Rapa.</em>
                    </span>
                  </>
                ) : (
                  <>
                    Hi! I&apos;m Juan,
                    <br />
                    but everyone calls
                    <br />
                    me <em className="accent-word">Rapa.</em>
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
                <span className="card-numeral" aria-hidden="true">
                  01
                </span>
                <span
                  className="skill-text"
                  dangerouslySetInnerHTML={{ __html: t.aboutBlock1Html }}
                />
              </div>
              <div className="skill-item">
                <span className="card-numeral" aria-hidden="true">
                  02
                </span>
                <span
                  className="skill-text"
                  dangerouslySetInnerHTML={{ __html: t.aboutBlock2Html }}
                />
              </div>
              <div className="skill-item">
                <span className="card-numeral" aria-hidden="true">
                  03
                </span>
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
      <section id="work" style={{ background: "var(--tint)" }}>
        <div className="container">
          <p className="section-label reveal">{t.portfolioLabel}</p>
          <HighlightedTitle
            text={t.portfolioTitle}
            word={t.portfolioTitleWord}
            className="section-title reveal"
          />

          {/* ── Trabajo destacado ── */}
          <p className="work-block-label reveal">{t.portfolioFeatured}</p>

          <div className="project-list">
            <article className="card project-card reveal">
              <div className="project-head">
                <span className="badge badge--lg badge--filled" aria-hidden="true">
                  01
                </span>
                <h3 className="project-title">{t.meliTitle}</h3>
              </div>
              <div className="project-body">
                <p className="project-kicker">{t.meliSubtitle}</p>
                <p>{t.meliContext}</p>
                <p>{t.meliResult}</p>
                <div className="pill-group">
                  <PillLink href="https://meli.juanrapacioli.com">{t.meliLink}</PillLink>
                </div>
              </div>
            </article>

            <article className="card project-card reveal">
              <div className="project-head">
                <span className="badge badge--lg badge--outline" aria-hidden="true">
                  02
                </span>
                <h3 className="project-title">{t.galiciaTitle}</h3>
                <MetaList
                  items={[
                    [t.metaRole, jobOf("galicia")?.role ?? ""],
                    [t.metaPeriod, jobOf("galicia")?.date ?? ""],
                  ]}
                />
              </div>
              <div className="project-body">
                <p>{t.galiciaContext}</p>
                <div className="pill-group">
                  <PillLink href="https://www.galicia.ar/empresas/tarjetas-y-cuentas/cuenta-energia-mineria">
                    {t.galiciaLink1}
                  </PillLink>
                  <PillLink href="https://www.galicia.ar/empresas/tarjetas-y-cuentas/cuenta-consumo-masivo">
                    {t.galiciaLink2}
                  </PillLink>
                  <PillLink href="https://www.galicia.ar/empresas/tarjetas-y-cuentas/cuenta-automotriz">
                    {t.galiciaLink3}
                  </PillLink>
                  <PillLink href="https://www.galicia.ar/empresas/app-galicia-office">
                    {t.galiciaLink4}
                  </PillLink>
                </div>
              </div>
            </article>

            <article className="card card--dark surface-dark project-card reveal">
              <div className="project-head">
                <span className="badge badge--lg badge--filled" aria-hidden="true">
                  03
                </span>
                <h3 className="project-title">{t.macroTitle}</h3>
                <MetaList
                  items={[
                    [t.metaRole, jobOf("macro")?.role ?? ""],
                    [t.metaPeriod, jobOf("macro")?.date ?? ""],
                  ]}
                />
              </div>
              <div className="project-body">
                <p className="project-kicker">
                  {t.macroLink}{" "}
                  <em className="highlight-yellow">{t.macroHighlight}</em>
                </p>
                <p>{t.macroContext}</p>
                <div className="pill-group">
                  <PillLink href="https://www.macro.com.ar/home-page">{t.macroLink}</PillLink>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PULLQUOTE (punto de quiebre oscuro a mitad de página) */}
      <section className="pullquote surface-dark bg-depth">
        <div className="container">
          <p className="tagline pullquote-text reveal">
            {/* Same string as the hero; on desktop each clause sits on its own
                line, breaking after the colon and the comma. */}
            {noWidow(t.heroSub)
              .split(/(?<=[:,]) /)
              .map((part, i, all) => (
                <Fragment key={i}>
                  <span className="pq-line">{part}</span>
                  {i < all.length - 1 ? " " : ""}
                </Fragment>
              ))}
          </p>
        </div>
      </section>

      {/* SKILLS & TOOLS */}
      <section id="skills" className="tools-section">
        <div className="container">
          <p className="section-label reveal">{t.expertiseLabel}</p>
          <HighlightedTitle
            text={t.expertiseTitle}
            word={t.expertiseTitleWord}
            className="section-title reveal"
          />
          <div className="skills-cols skills-cols-3 reveal">
            <div className="skills-card">
              <div className="skills-card-header">
                <span className="skills-card-title">{t.col1Title}</span>
              </div>
              <div className="chip-group">
                {t.col1Items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-card">
              <div className="skills-card-header">
                <span className="skills-card-title">{t.col2Title}</span>
              </div>
              <div className="chip-group">
                {t.col2Items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-card">
              <div className="skills-card-header">
                <span className="skills-card-title">{t.col3Title}</span>
              </div>
              <div className="chip-group">
                {t.col3Items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="container">
          <p className="section-label reveal">{t.expLabel}</p>
          <HighlightedTitle
            text={t.expTitle}
            word={t.expTitleWord}
            className="section-title reveal"
          />

          <div className="exp-grid">
            {experience.map((job) => (
              <article className="card card--compact exp-card reveal" key={job.key}>
                <p className="exp-date">{job.date}</p>
                <h3 className="exp-role">{job.role}</h3>
                <p className="exp-company">{job.company}</p>
                {job.details.map((d, i) => (
                  <p className="exp-detail" key={i}>
                    {d}
                  </p>
                ))}
                {job.links.length > 0 && (
                  <div className="pill-group">
                    {job.links.map(([href, label]) => (
                      <PillLink href={href} key={href}>
                        {label}
                      </PillLink>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section style={{ background: "var(--tint)" }}>
        <div className="container">
          <p className="section-label reveal">{t.eduLabel}</p>
          <HighlightedTitle
            text={t.eduTitle}
            word={t.eduTitleWord}
            className="section-title reveal"
          />
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
              href="https://drive.google.com/file/d/1I8iyBjtcqe6SiC4DVBm5jpo8NlgbfRFr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="edu-item edu-item-link"
            >
              <div>
                <span className="edu-title">Introduction to Claude Cowork</span>
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

          <p className="section-label reveal" style={{ marginTop: "64px" }}>
            {t.languagesLabel}
          </p>
          <HighlightedTitle
            text={t.languagesTitle}
            word={t.languagesTitleWord}
            className="section-title reveal"
          />
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
      <section
        id="testimonials"
        className="surface-dark bg-depth bg-depth--top"
        style={{ background: "var(--emerald-deep)", color: "var(--cream)" }}
      >
        <div className="container">
          <p className="section-label reveal">{t.testimonialsLabel}</p>
          <HighlightedTitle
            text={t.testimonialsTitle}
            word={t.testimonialsTitleWord}
            className="section-title reveal"
          />
          <div className="refs-grid">
            {TESTIMONIALS.map((ref) => {
              const r = ref[lang];
              return (
                <div className="ref-card reveal" key={ref.author}>
                  <p className="ref-quote">{r.quote}</p>
                  <p className="ref-author">
                    {ref.linkedin ? (
                      <a
                        href={ref.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {ref.author}
                      </a>
                    ) : (
                      ref.author
                    )}
                  </p>
                  <p className="ref-role">{r.role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </main>

      {/* FOOTER */}
      <footer className="surface-dark bg-depth bg-depth--bottom">
        <div className="container">
        <div className="footer-inner">
          <div>
            <h2 className="footer-name">
              Juan
              <br />
              Rapacioli
            </h2>
            <p className="tagline footer-sub">{noWidow(t.heroSub)}</p>
            <DotList text={t.footerTagline} className="footer-tagline" />
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
                <Link href="/guidelines">{t.footerGuidelinesLink}</Link>
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
            <BuenosAiresClock />
          </div>
        </div>
        <div className="footer-cta">
          <p className="footer-cta-title">
            {t.footerCTA.split(t.footerCTAWord)[0]}
            <em className="accent-word">{t.footerCTAWord}</em>
            {t.footerCTA.split(t.footerCTAWord)[1]}
          </p>
          <div className="footer-cta-buttons">
            <a
              href="mailto:juanrapacioli@gmail.com"
              className="btn btn-primary"
            >
              {t.footerCTABtn}
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
        </div>
      </footer>
    </>
  );
}
