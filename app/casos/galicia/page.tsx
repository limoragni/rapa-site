import type { Metadata } from "next";
import "../../globals.css";
import "./caso.css";
import Link from "next/link";
import SiteNav from "../../components/SiteNav";

// Copy source: "Juan Rapacioli - Proyecto - Galicia.html" (ES only), with the
// edits approved in the brief: no Galicia Office App card, four verticals,
// no "UX" in the role/title, middle dot instead of long dashes.

const SUBTITLE =
  "Diseño de contenido para productos financieros dirigidos a empresas del agro, energía y minería, consumo masivo y sector automotriz. De la estrategia a la conversión.";

export const metadata: Metadata = {
  title: "Banco Galicia · Caso de Content Design · Juan Rapacioli",
  description: SUBTITLE,
  alternates: { canonical: "/casos/galicia" },
  openGraph: {
    title: "Banco Galicia · Caso de Content Design · Juan Rapacioli",
    description: SUBTITLE,
    type: "article",
    locale: "es_AR",
    siteName: "Juan Rapacioli",
  },
};

const NAV_ITEMS = [
  ["about", "/#about", "Quién soy"],
  ["work", "/#work", "Mi trabajo"],
  ["skills", "/#skills", "Con qué trabajo"],
  ["experience", "/#experience", "Experiencia"],
  ["testimonials", "/#testimonials", "Testimonios"],
] as const;

const META: [string, string][] = [
  ["Rol", "Content Expert"],
  ["Agencia", "Nonconformist"],
  ["Sector", "Banca B2B"],
  ["Canales", "Mail · Web · App · Banners · Push"],
  ["Herramientas", "Adobe Experience Manager (AEM)"],
];

const RESULTS = [
  { label: "Campaña Agro", value: "+392%", conversion: "1,23% de conversión", benchmark: "0,25%" },
  { label: "Reposicionamiento Empresas", value: "+128%", conversion: "2,97% de conversión", benchmark: "1,30%" },
];

const MILESTONES: {
  title: string;
  body: React.ReactNode;
  data?: [string, string][];
}[] = [
  {
    title: "Priorización por interés de audiencia",
    body: "Analizamos Open Rates por temática en el segmento Empresas. Inversiones y Financiaciones lideraban por encima de Pagos. Ese insight cambió el orden de prioridades en el plan de contenido: los temas de mayor relevancia para la persona usuaria pasaron a tener más frecuencia y protagonismo.",
    data: [
      ["Inversiones", "35,95% OR"],
      ["Financiaciones", "35,80% OR"],
    ],
  },
  {
    title: "Diferenciación de rol por canal",
    body: "No todos los canales cumplen el mismo rol en el recorrido de la persona usuaria. Agrofy generaba tráfico directo a la landing de captación. La Nación e Infocampo sostenían visibilidad y reconocimiento de marca en etapas más tempranas. Esa distinción definió qué producir para cada canal y cómo distribuir el presupuesto.",
  },
  {
    title: "Optimización del horario de envío",
    body: "Identificamos que la ventana de 11 a 12 h concentraba el mayor tráfico calificado en prácticamente todos los productos. Programar los envíos en ese horario nos permitió llegar a la persona usuaria en el momento de mayor intención.",
    data: [["Horario pico", "11 a 12 h en todos los productos"]],
  },
  {
    title: "Landings con mayor potencial de captación",
    body: (
      <>
        Cheques Electrónicos tenía un <strong className="key">67,2%</strong> de first time
        visit: alto volumen de visitantes nuevos sin explorar. Reforzamos el contenido y los
        CTAs en esas páginas para capitalizar ese tráfico y mejorar la conversión en el
        primer contacto.
      </>
    ),
    data: [["Cheques Electrónicos", "67,2% first time visit"]],
  },
  {
    title: "Calendario de eventos como insumo de contenido",
    body: "Expoagro y Expo Rural generaban los picos de tráfico más altos del año. Integramos el calendario del sector agro al plan de contenido: publicar en las semanas previas a esos eventos buscó llegar en el momento de mayor atención del mercado.",
  },
  {
    title: "Validación de resultados por campaña",
    body: "Las dos campañas con resultados medidos superaron el benchmark de conversión esperado, validando el enfoque de contenido segmentado por vertical e industria.",
  },
];

const DECISIONS: [string, React.ReactNode][] = [
  [
    "Segmentar por vertical industrial, no por producto.",
    "El mismo crédito, cuatro tonos distintos: agro, energía y minería, consumo masivo, automotriz. Audiencias distintas tienen necesidades y contextos distintos: el contenido tiene que hablarle a cada una desde ahí.",
  ],
  [
    "Diferenciar el rol de cada canal antes de asignar presupuesto.",
    "No todos los canales convierten del mismo modo. Algunos acompañan a la persona usuaria en etapas más tempranas, generando confianza y reconocimiento. Eso tiene valor aunque no se mida en clics inmediatos.",
  ],
  [
    "Incorporar el calendario de eventos del sector al plan de contenido.",
    "Los picos de tráfico no eran aleatorios: coincidían con Expoagro y Expo Rural. Alinear la publicación con esos momentos buscó llegar en el momento de mayor atención del mercado.",
  ],
  [
    "Proponer A/B testing de subject y preheader para reducir riesgo.",
    <>
      Dos versiones al <strong className="key">5%</strong> de la audiencia, la ganadora al{" "}
      <strong className="key">90%</strong> restante. Un cambio de proceso simple que maximiza
      el Open Rate sin depender de la intuición.
    </>,
  ],
];

function Badge({ n }: { n: number }) {
  return (
    <span
      className={`badge badge--md ${n % 2 === 1 ? "badge--filled" : "badge--outline"}`}
      aria-hidden="true"
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}

function DataList({ items }: { items: [string, string][] }) {
  return (
    <dl className="meta-list case-data">
      {items.map(([label, value]) => (
        <div className="meta-item" key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function CasoGalicia() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido
      </a>

      <SiteNav
        logoHref="/"
        items={NAV_ITEMS}
        menuLabel="Menú"
        talk={
          <a href="mailto:juanrapacioli@gmail.com" className="btn btn-primary">
            Hablemos
          </a>
        }
      />

      <main id="main-content" className="case">
        {/* CABECERA */}
        <header className="case-hero surface-dark bg-depth">
          <div className="container">
            <p className="eyebrow">
              Caso de <span className="nowrap">Content Design ·</span>{" "}
              <span className="nowrap">2025 a 2026</span>
            </p>
            <h1>Banco Galicia</h1>
            <p className="case-kicker">B2B Content Strategy</p>
            <p className="case-sub">{SUBTITLE}</p>
            <dl className="meta-list case-meta">
              {META.map(([label, value]) => (
                <div className="meta-item" key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
              <div className="meta-item meta-item--wide">
                <dt>Mi parte</dt>
                <dd>
                  Investigué, redacté, iteré y medí resultados junto al equipo de Diseño y
                  Producto.
                </dd>
              </div>
            </dl>
          </div>
        </header>

        {/* RESULTADOS */}
        <section className="case-section" aria-labelledby="resultados">
          <div className="container">
            <p className="section-label">Resultados</p>
            <h2 id="resultados" className="section-title">
              Las dos campañas con resultados medidos superaron el benchmark
            </h2>
            <p className="case-lead">
              El enfoque de contenido segmentado por vertical e industria quedó validado con
              datos.
            </p>
            <div className="case-results">
              {RESULTS.map((r) => (
                <article className="case-result" key={r.label}>
                  <h3 className="case-result-label">{r.label}</h3>
                  <p className="case-result-value">{r.value}</p>
                  <p className="case-result-line">{r.conversion}</p>
                  <dl className="meta-list">
                    <div className="meta-item">
                      <dt>Benchmark</dt>
                      <dd>{r.benchmark}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
            <p className="case-text case-results-note">
              La Campaña Agro es el caso de mayor impacto: multiplicó por casi cinco el
              benchmark esperado. Fue el resultado directo de hablarle a la persona usuaria en
              su propio lenguaje, identificar los canales correctos y alinear la publicación
              con el momento de mayor atención del sector.
            </p>
          </div>
        </section>

        {/* PROBLEMA */}
        <section className="case-section case-section--tint" aria-labelledby="problema">
          <div className="container">
            <p className="section-label">Problema</p>
            <h2 id="problema" className="section-title">
              Un banco, una voz, cuatro tonos
            </h2>
            <p className="case-text">
              El sector Mayorista de Galicia necesitaba conectar sus productos financieros B2B
              con segmentos muy distintos entre sí: verticales estratégicas como agro, energía
              y minería, consumo masivo y automotriz. El desafío no era escribir buenos textos,
              sino diseñar una estrategia de contenido que generara captación real y
              conversión medible.
            </p>
            <div className="case-columns">
              <div>
                <h3 className="case-h3">¿Con qué nos encontramos?</h3>
                <p className="case-text">
                  Del otro lado de cada comunicación había un tomador de decisiones
                  financieras (gerentes, responsables de compras, dueños de empresas del agro)
                  que recibía mensajes genéricos que no hablaban su idioma. Audiencias
                  fragmentadas, productos complejos y canales que no estaban siendo usados de
                  forma óptima. No había datos organizados para tomar decisiones de contenido
                  con confianza.
                </p>
              </div>
              <div>
                <h3 className="case-h3">El objetivo</h3>
                <p className="case-text">
                  Conectar a las personas usuarias con los objetivos del negocio. Interpretar
                  productos complejos (financiaciones, cheques electrónicos, nuevas
                  funcionalidades de la app) y transformarlos en comunicaciones claras,
                  directas y amigables que generen conversión e interacción. Cada pieza tenía
                  que hablarle a una persona específica, en el canal correcto y en el momento
                  justo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section className="case-section" aria-labelledby="proceso">
          <div className="container">
            <p className="section-label">Proceso</p>
            <h2 id="proceso" className="section-title">
              Seis hitos, un proceso iterativo
            </h2>
            <p className="case-text case-lead">
              Trabajamos de forma continua y basada en datos. Cada hito se tradujo en una
              decisión concreta de diseño y contenido.
            </p>
            <ol className="case-steps">
              {MILESTONES.map((m, i) => (
                <li className="card card--compact case-step" key={m.title}>
                  <div className="case-step-head">
                    <Badge n={i + 1} />
                    <h3 className="case-step-title">{m.title}</h3>
                  </div>
                  <p className="case-text">{m.body}</p>
                  {m.data && <DataList items={m.data} />}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* DECISIONES */}
        <section className="case-section case-section--tint" aria-labelledby="decisiones">
          <div className="container">
            <p className="section-label">Decisiones clave</p>
            <h2 id="decisiones" className="section-title">
              Las decisiones no obvias
            </h2>
            <p className="case-text case-lead">
              La diferencia entre ejecución y estrategia: los momentos donde elegimos un camino
              y descartamos otro.
            </p>
            <ol className="case-decisions">
              {DECISIONS.map(([lead, rest], i) => (
                <li className="card card--compact case-decision" key={lead}>
                  <Badge n={i + 1} />
                  <p className="case-text">
                    <strong className="case-decision-lead">{lead}</strong> {rest}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* REFLEXIÓN */}
        <section className="case-section" aria-labelledby="reflexion">
          <div className="container">
            <p className="section-label">Reflexión</p>
            <h2 id="reflexion" className="section-title">
              ¿Qué haríamos diferente?
            </h2>
            <h3 className="case-h3">Si lo hiciéramos hoy</h3>
            <p className="case-text">
              Incorporaríamos user research más temprano, antes de definir los mensajes por
              vertical. Trabajamos muy bien con datos de performance (Open Rate, conversión,
              tráfico), pero nos faltó más voz directa de la persona usuaria B2B. Con
              entrevistas en las etapas iniciales, las hipótesis de contenido hubieran sido más
              sólidas desde el principio y el proceso de iteración, más breve.
            </p>
          </div>
        </section>
      </main>

      {/* CIERRE */}
      <footer className="case-footer surface-dark bg-depth bg-depth--bottom">
        <div className="container">
          <div className="case-footer-actions">
            <Link href="/#work" className="btn btn-secondary">
              <svg className="back-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
                <path
                  d="M10 3 5 8l5 5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Mi trabajo
            </Link>
            <a href="mailto:juanrapacioli@gmail.com" className="btn btn-primary">
              Hablemos
            </a>
          </div>
          <p className="case-footer-sign">
            Juan Rapacioli · Content Designer
            <br />
            <Link href="/">juanrapacioli.com</Link> ·{" "}
            <a href="mailto:juanrapacioli@gmail.com">juanrapacioli@gmail.com</a>
          </p>
        </div>
      </footer>
    </>
  );
}
