# CLAUDE.md — rapa-site (portfolio juanrapacioli.com)

> Contexto para retomar el trabajo en sesiones futuras de Claude Code.
> Última actualización: 2026-11-04 (iteración 3 en rama `iteracion-3`, preview). Idioma de trabajo: español (respuestas cortas, iterar y ajustar).

## 0.b Iteración 3 (sesión 2026-11-04, rama `iteracion-3`, EN PREVIEW, sin mergear)

Ajustes finos, un commit por punto del brief (el punto 4, Nonconformist, queda pendiente del OK de Juan):
- **Hero / roles (1):** `RolesCard` recibe `label` (clave `rolesEyebrow`) como `aria-label` de una `<ul>`, sin texto visible. Cinco filas: Content Strategist, UX Writer (`roleOf("dh")`), Periodista (`expJournalistRole`), Docente (`roleOf("untref")`), Autor. Insignias `.badge--md` de 48px, texto `clamp(20px, 2vw, 22px)`.
- **Tagline (2):** en la banda oscura, `heroSub` se parte en render tras `:` y `,` en `<span class="pq-line">`; desde 1024px cada span es `display:block; nowrap` a 35px (línea más larga 916px). Debajo de 1024 siguen balance + `noWidow`.
- **Nodus (3):** una sola descripción recortada; se borró `nodusContext`. "Mercado Ads Academy" solo queda en `reference/Juan_Rapacioli_Caso_Galicia_Cocos.html` (no se sirve).
- **Galicia (5):** `galiciaContext` se partió en `galiciaKicker` (subtítulo bold) + `galiciaContext`. `.project-kicker` usa `text-wrap: balance`.
- **Quién soy (6):** insignias en lugar de `.card-numeral` (CSS eliminado).
- **Texto (7):** `p { text-wrap: pretty }` global. `keepTail(text, 3)` une las tres últimas palabras con nbsp en los párrafos de Quién soy; `noWidow` en descripciones de tarjetas, citas, métricas y el titular del cierre. Script de auditoría: `/tmp/capturas-script/lastlines.js`.
- **Idiomas (8):** `languagesLabel` = "Cómo me comunico" / "How I communicate".
- **Footer (9, 13):** sin tagline; botón principal reusa `heroBtnTalk` ("Hablemos" / "Let's talk"), se borró `footerCTABtn`.
- **↗ (10):** `ArrowIcon` lleva `.ext-icon` (14px) y se usa en "Abrir certificado", LinkedIn/Linktree del footer, libro de Bowie y nombre de Jorge Couto.
- **Tarjetas (11):** gramática única. Ya no hay `border-left: 3px` en ningún lado; tarjetas chicas con borde 1px `--border` + `--shadow-sm` (hover `--shadow-md`), radio 24 (compactas) / 28 (grandes).
- **Testimonios (12):** `.ref-card` flex column, `.ref-author { margin-top: auto }`.
- **Gotcha CSS:** los modificadores de `.badge` (`--md`, `--lg`) tienen que ir DESPUÉS de `.badge` en `globals.css`, si no la base los pisa.

Capturas en `~/Desktop/Rapa/capturas-sitio/iteracion-3/` (`00-antes` de producción, una carpeta por punto, `99-final` ES/EN a 1280/768/375, `guidelines`). Scripts: `sections.js` (captura por sección), `serve.sh` (build + server en :3100 + capturas). Lighthouse prod antes → local después: home 100/100/96/100 → 100/100/96/100; /guidelines 98 → 100 en Performance.

## 0.a Iteración 2 (sesión 2026-11-04) — COMPLETADA y en producción (merge `1004e2f` a main, rama `iteracion-2` conservada)

Referencia: gut.agency (aire, tarjetas con metadatos rotulados, insignias que alternan relleno/contorno, cierre con titular grande, reloj local). Se mantienen DM Sans y la paleta verde. Un commit por fase:
`3513a9e` F1 contenedor común + menú + degradado + primitivas · `5d66685` F2 hero · `e9f0821` F3 Mi trabajo · `3cea642` F4 Experiencia (fusión aplicada, bloque viejo aún presente) · `12ff392` F5 cierre · `fab3dcd` F6 guidelines, objetivos táctiles de 44px y doc · F4b borrado de "También trabajé en".

**Componentes nuevos (`globals.css`, sección "COMPONENTES ITERACIÓN 2"):**
- `.card` (+ `--compact`, `--dark` que va siempre con `.surface-dark`), sombra `--shadow-card`.
- `.badge` (+ `--lg`, `--sm`, `--filled`, `--outline`). Color por variables `--badge-color`/`--badge-on`: emerald en claro, amarillo en `.surface-dark`. Una tarjeta clara dentro de un fondo oscuro lleva `.surface-light` para volver a emerald (ej. tarjeta de roles del hero).
- `.meta-list` / `.meta-item` (`<dl>` con rótulo y valor), `.pill-link` (44px, borde emerald, ícono ↗ en SVG con aria-hidden), `.project-card`, `.exp-grid` / `.exp-card`, `.roles-card`.
- En `page.tsx`: `DotList` (eyebrow con ítems nowrap y `·` pegado al anterior), `noWidow()` (nbsp entre las dos últimas palabras), `RolesCard`, `PillLink`, `MetaList`, `BuenosAiresClock` (placeholder `--:--` en server y primer render, después `Intl.DateTimeFormat` cada minuto).
- `exp[]` ahora tiene `id` (nodus, galicia, macro, dh, cerem, untref, telam); `jobOf(id)` / `roleOf(id)` reutilizan rol y fechas en la tarjeta de roles y en los metadatos de Mi trabajo.

**Layout:** nav, hero, secciones y footer usan `.container` (1120px, padding 32px). El hero ya no usa `7vw` y reserva 128px arriba para el nav fijo. Testimonios (`.bg-depth--top`) y footer (`.bg-depth--bottom`) comparten degradado sin corte. El observer del menú incluye `#hero` y limpia el activo al volver arriba.

**Eliminado:** barras de `MetricCard` (y strings `metricBarBenchmark`/`metricBarCampaign`), CSS `.timeline*`. La métrica del hero se reemplazó por la tarjeta de roles; +392%/+128% viven solo en Resultados.

**F4b (hecho):** se borró el bloque "También trabajé en" tras el OK de Juan. Strings eliminados: `portfolioMore`, `ncContext`, `ncLink`, `nodusTitle`, `dhTitle`, `dhContext`, `ceremTitle`, `ceremContext`, `untrefContext`, `journalismTitle`. CSS eliminado: `.work-group*`, `.work-grid*`, `.work-link` (queda `.work-block-label` para "Proyectos destacados"). Verificado: los 33 enlaces del home (ES y EN) siguen presentes. Nonconformist vive en la línea de empresa de Galicia y Macro y en la pastilla "Nonconformist ↗" de la tarjeta de Galicia.

**Verificación:** el preview de Vercel tiene Deployment Protection (redirige a SSO), así que las capturas salen del build local (`next start -p 3100`) del mismo commit. Script Playwright en `/tmp/capturas-script/` (`capture.js`, `rebuild.sh <fase>`, `widows.js`, `navcheck.js`); no sobrevive reinicios. Playwright usa el Chrome instalado (`channel: 'chrome'`). Capturas en `~/Desktop/capturas-sitio/iteracion-2/F*`.

**Lighthouse (prod antes → local después):** home 100/100/96/100 → 100/100/96/100; /guidelines igual. El 96 de Best Practices es un 404 de `/favicon.ico` (no hay favicon), preexistente.

## 0. Cambios sesión 2026-11-03 — Rediseño verde (COMPLETADO y en producción)

Rediseño visual completo del sitio: paleta rosa → verde (emerald/emerald-deep/cream/yellow/mint), alineado al flyer y banner de LinkedIn de Juan. Contenido intacto salvo las excepciones acordadas (abajo). Hecho en 5 fases en la rama `rediseno-verde`, cada una commiteada y verificada (build + lint + Lighthouse + capturas ES/EN/mobile) antes de avanzar. **Mergeado a `main` con `--no-ff` y deployado a producción el mismo día** (merge commit `d69f496`). Verificado en vivo en `www.juanrapacioli.com`, incluida una pasada completa mobile (390px) en ES/EN + `/guidelines`. La rama `rediseno-verde` se dejó sin borrar (Juan pidió conservarla) con el historial completo.

**Commits (en orden, visibles en `git log`):** `65f6cdb` infra/ESLint + `reference/` · `6d7fdc0` tokens/tipografía DM Sans/primitivas · `2c037f5` nav fija + metric card del hero + franja de resultados · `29ac9f5` numerales/palabras destacadas/chips/AEM · `0d05862` footer/OG image/`/guidelines` reescrita · `7b46401` doc · `d69f496` merge a main.

**Tokens nuevos en `globals.css`:** `--emerald #0f7b5f`, `--emerald-deep #063d2f`, `--emerald-hover #0c6850`, `--cream #fffdfb`, `--yellow #f6e27a`, `--mint #b8dcce` (texto/bordes sobre fondo oscuro — no estaba en la paleta que pidió Juan, hubo que sumarlo porque ni emerald ni ink-muted cumplen contraste sobre emerald-deep), `--ink #063d2f`, `--ink-muted #3d5a50`, `--surface #ffffff`, `--border #d5e6df`, `--tint #e4f1ec`. Los tokens viejos (`--pink`, `--pink-light`, `--amber`, `--cream-dark`, `--ink-light`) ya no existen en ningún archivo.

**Tipografía:** se sacó DM Serif Display, todo es **DM Sans** (400/500/700/800) vía `next/font/google` en `layout.tsx`. Palabra destacada por h2 = cursiva + resaltado amarillo (relleno amarillo con texto oscuro sobre fondo claro, texto amarillo sobre fondo oscuro), vía componente `HighlightedTitle` en `page.tsx` y clase `.accent-word` en `globals.css`.

**Estructura nueva en `page.tsx`:** nav fija (`<nav className="site-nav">`, estado `scrolled` + `activeSection` por `IntersectionObserver`), componente `MetricCard` (conteo animado + barras, respeta `prefers-reduced-motion`, usado en el hero y en la franja de resultados "RESULTADOS"), bloque `pullquote` oscuro entre Mi trabajo y Skills como punto de quiebre a mitad de página (reutiliza el texto del hero, sin copy nuevo).

**Excepciones de contenido aplicadas** (ver brief original para el detalle completo):
- Nivel de inglés real: "Fluent" → "C1 escrito · B2 alto hablado" / "C1 written · High B2 spoken"
- Chip "Adobe Experience Manager (AEM)" en Skills, + línea `detail2` en la experiencia de Galicia (solo ahí)
- Línea de especialidades: "UX | AI workflows" → "UX Writing · Branding · Content Strategy · AI workflows" (reemplazado en `page.tsx` hero×2/footer×2, `layout.tsx` title/OG/Twitter, `opengraph-image.tsx`, `guidelines/page.tsx`×2)
- Separador `·` en vez de `|` en toda la interfaz (incluido el `<title>`)
- "Content Designer" en vez de "UX Content Designer" (solo aparecía en el `alt` de `opengraph-image.tsx`)
- Eyebrows narrativos: Sobre mí→"Quién soy", Portfolio→"Cómo trabajo", Expertise→"Con qué trabajo", Trayectoria→"El recorrido", Formación→"Validación". **Testimonios se dejó sin cambiar** ("Testimonios", no "Qué dicen") — ajuste hecho sobre la marcha porque quedaba redundante pegado al h2 "Qué dicen de mí"

**Gotcha técnico importante (`opengraph-image.tsx`):** la fuente variable de Google Fonts (`DMSans[opsz,wght].ttf`) **rompe el parser de fuentes de `next/og`** (`TypeError: Cannot read properties of undefined (reading '264')`, crashea el route). Se resolvió con los `.woff` estáticos de `@fontsource/dm-sans` vía jsDelivr (400/700/800/800-italic). **Si se vuelve a tocar este archivo, no usar la fuente variable de google/fonts.**

**Lighthouse (antes → después):** Home Performance 93→100, Accessibility 94→100, SEO 100→100. `/guidelines` Performance 100→100, Accessibility 94→100 (faltaba el landmark `<main>`), SEO 100→100.

**Pendiente real:** nada bloqueante. Quedó afuera a propósito (declarado "fuera de alcance" en el brief): modo oscuro, `/casos/galicia`, alinear `meli.juanrapacioli.com`. Opcionales que no se hicieron (se iban a avisar antes de hacerlos y no se llegó a pedir): `sitemap.ts`, `robots.ts`, JSON-LD de `Person`.

## 1. Estado del proyecto

- **Repo:** https://github.com/limoragni/rapa-site
- **Ruta local limpia:** `~/dev/rapa-site` (FUERA de iCloud — ver Notas técnicas)
- **Deploy:** Vercel, automático desde `main`
- **Producción:** el apex `juanrapacioli.com` redirige (307) a **`www.juanrapacioli.com`** (host real)
- **Último commit:** `d69f496` (merge de `rediseno-verde`, en `origin/main`, desplegado y verificado en producción — ver sección 0). Antes del rediseño: `79a2082` vertical Galicia EN "Consumer Goods" (ver sección 1.b y 2 para el historial de esa etapa).
- **Stack:** Next.js 15 (App Router), client component único en `app/page.tsx`. Sitio bilingüe **ES/EN** con switcher (default ES, persistido en `sessionStorage`). DM Sans vía `next/font/google`. ESLint configurado (flat config, `npm run lint`).

### Archivos clave
- `app/page.tsx` — todo el contenido del home (objeto `content.es` / `content.en`, array `TESTIMONIALS`, componentes `HighlightedTitle`/`MetricCard`, render). Nav, Hero, Resultados, Sobre mí, Portfolio, Pullquote, Skills, Trayectoria, Formación, Testimonios, Footer.
- `app/layout.tsx` — metadata SEO estática (title, description, OpenGraph, Twitter) + fuente DM Sans.
- `app/globals.css` — estilos y tokens de la paleta verde.
- `app/opengraph-image.tsx` — imagen OG generada (ver gotcha de fuentes en sección 0).
- `app/guidelines/page.tsx` + `app/guidelines/guidelines.css` — página `/guidelines` (brand system verde, reescrita completa en el rediseño).
- `eslint.config.mjs` — config de ESLint (nueva).
- `reference/` — HTML de referencia usado para el rediseño (no se sirve, es solo documentación).

## 1.b Cambios sesión 2026-06-23

- **Portfolio dividido en dos bloques** (jerarquía visual). Sub-labels bilingües `work-block-label` (rosa, uppercase, con borde inferior): **Proyectos destacados / Featured projects** (Meli+ · Galicia · Macro) y **También trabajé en / More experience** (Nodus · Digital House · Cerem · UNTREF · Nonconformist · Periodismo). Se reordenó (Galicia y Macro subieron; Nodus bajó al 2º bloque).
- **Guía de marca:** se sacó del Portfolio (quedaba duplicada); ahora vive solo en el footer (`/guidelines`). Se borraron los strings huérfanos `guidelinesTitle/Context/Link` (ES y EN).
- **Bio (`aboutP2`):** se cambió el cierre para no repetir la idea de "objetivos de negocio ↔ necesidades de usuarios" (ya está en `aboutP1`). Ahora: ES *"…asegurar que el contenido sea claro, medible y escalable."* / EN *"…to make content clear, measurable, and scalable."*
- **Highlight Anthropic (`aboutBlock3Html`):** ahora "Certificaciones en Claude, Claude Code y **Cowork** (Anthropic)" / "…in Claude, Claude Code, and Cowork (Anthropic)".
- **Nonconformist (`ncContext`):** descripción reescrita a "Contenido B2B para Banco Galicia y Banco Macro a través de Nonconformist" / "B2B content for Banco Galicia and Banco Macro through Nonconformist".
- **Vertical Galicia EN (`galiciaLink2`):** "Mass Consumption" → **"Consumer Goods"** (término de negocio correcto). ES intacto: "Consumo Masivo".
- **Tratamiento visual:** `.work-group--featured` (título 28px, `margin-bottom 48px`) vs `.work-group--compact` (título 18px, `margin-bottom 28px`). El label "Más trabajo" recibe `margin-top 56px` vía `.work-group + .work-block-label`.
- **Testimonios:** se quitó **Esteban Jose Galarza** → quedan **6** (grilla 2 col simétrica).
- **Cert Claude Cowork:** ahora es tarjeta-enlace al Drive (`1I8iyBjtcqe6SiC4DVBm5jpo8NlgbfRFr`), con CTA "Abrir certificado / Open certificate".
- **Strings nuevos:** `portfolioFeatured` / `portfolioMore` en `content.es` y `content.en`.

## 2. Cambios aplicados en sesión previa (commit 5c0df9d)

- **Hero (bajada):** ahora "Diseño el contenido de **productos digitales**…" (antes decía "productos de banca digital"). En itálica, exactamente **2 líneas**, sin palabras viudas. ES y EN.
- **Tagline unificado** en todo el sitio: **`Content Designer & Strategist | UX | AI workflows`** — 12 apariciones, **0 rastros** de "AI-driven workflows". Tocó: `page.tsx` (hero×2, footer×2), `layout.tsx` (title, og/twitter), `opengraph-image.tsx`, `guidelines/page.tsx`.
- **Nodus Company:** agregado en **Trayectoria** (1er ítem, May 2026 – Jul 2026 · Product Content Specialist) y en **Portfolio** (después de Meli, sin link). ES y EN.
- **Certificación:** *Introduction to Claude Cowork · Anthropic (2025)* — **sin link por ahora** (tarjeta `edu-item` sin el CTA "Abrir certificado"). Va después de Claude Code 101.
- **Testimonio:** *Jorge Couto · Líder de Contenidos en Banco Galicia* — inmediatamente después de Guido Villaverde. La sección de testimonios se refactorizó a **bilingüe real** (array `TESTIMONIALS` con `es`/`en` por testimonio; los 6 previos traducidos al ES y el de Jorge al EN). Nombre con link a LinkedIn (color heredado para mantener el formato).
- **Meli+:** línea de resultado agregada (`meliResult`) debajo de la descripción. ES y EN.
- **Portfolio font-size:** `.work-group-subtitle` **13px → 16px**.
- **Botón Cerem:** clase `.work-grid--wide` (`grid-template-columns: max-content`) solo en ese grid, para que "Artículos financieros y redes sociales" **no quiebre en 2 líneas**, sin alterar los demás grupos (Galicia sigue en 3 columnas).
- **SEO bilingüe con switch dinámico por idioma:**
  - `document.title` ahora cambia por idioma en el `useEffect([lang])` de `page.tsx` (igual que ya se hacía con la meta-description). Constantes `TITLE_ES` / `TITLE_EN`.
  - **Title ES/EN:** `Content Designer & Strategist | UX | AI workflows`.
  - **Meta ES:** `UX Writing y Content Design para banca digital y B2B. Diseño sistemas de contenido, defino estrategia y mido resultados con foco en las personas usuarias.`
  - **Meta EN:** `UX Writing and Content Design for digital products and B2B. I build content systems, define strategy, and measure results with a focus on real user needs.`
- **App Galicia Office:** nombre corregido en la versión **EN** ("Galicia Office App" → "App Galicia Office"); ES ya estaba bien.

### Detalles de implementación útiles
- **Viudas / saltos:** se usa `text-wrap: balance` en `.hero-sub` y `text-wrap: pretty` en `.about-intro` (requieren navegador moderno: Chrome 117+ / Safari 17.5+). Si hace falta soporte viejo, usar `&nbsp;` fijo.
- **Hero 2 líneas:** `.hero-sub { max-width: 580px; font-style: italic; }`.
- **Testimonios:** son un único bloque renderizado desde `TESTIMONIALS.map()`; cambian de idioma con el switcher.

## 3. Pendientes

Nada bloqueante al cierre de la sesión 2026-11-03 (ver sección 0 para el detalle de lo que quedó deliberadamente afuera del rediseño).

- ~~**`metadataBase` no seteado** en `layout.tsx`.~~ ✅ Hecho en el rediseño (sección 0).
- ~~**Cert Claude Cowork:** convertir a tarjeta-enlace.~~ ✅ Hecho en sesión 2026-06-23 (link de Drive aplicado).

## 4. Notas técnicas (entorno)

- **iCloud sincroniza `~/Desktop` y `~/Documents`** → **NUNCA clonar repos ahí** (iCloud evicta/desincroniza archivos y rompe el working tree y el `.git`). Por eso la ruta limpia es `~/dev/rapa-site`.
- **Repo original corrupto** en `~/Library/Mobile Documents/com~apple~CloudDocs/Documents/GitHub/rapa-site` (working tree y object store dañados por iCloud) — **no tocar**; el bueno es `~/dev/rapa-site`.
- **Homebrew** instalado en esta sesión: `/opt/homebrew/bin/brew` (Homebrew 6.0.3).
- **gh CLI** instalado y autenticado como **JRapacioli87** (keyring) → el push a `main` funciona con `gh`/git.
- **Node** instalado localmente en `~/.local/node` (v24.17.0, sin sudo). Agregar al PATH con `export PATH="$HOME/.local/node/bin:$PATH"` para `npm`. Dev server: `npm run dev` (localhost:3000). Quedó **frenado** al cierre.
- **Verificar visualmente** con Chrome headless + CDP (Node tiene `WebSocket`/`fetch` globales): forzar `.reveal` a `.visible` antes de capturar, porque el contenido arranca con opacity 0 hasta el scroll. El script vive en `/tmp` (no sobrevive entre sesiones) — rehacerlo si hace falta, es corto: abrir target vía `PUT /json/new`, `Page.navigate` + esperar `Page.loadEventFired`, `Runtime.evaluate` para forzar reveals, `Page.captureScreenshot`.
- **Ojo con `scroll-behavior: smooth`** (está en `html` en `globals.css`) al automatizar capturas: `window.scrollTo(0, Y)` con un salto grande anima en vez de saltar, y una captura rápida después agarra el scroll a mitad de camino (se ve como si hubiera vuelto al tope). Antes de scrollear para capturar, setear `document.documentElement.style.scrollBehavior = 'auto'` vía `Runtime.evaluate`.
- **Verificar texto EN:** el `curl` al HTML solo trae la versión **ES** (server-render por defecto); los strings EN se renderizan en cliente. Para validar EN: render headless, **esperar ~2500ms tras `Page.loadEventFired`** (la hidratación tarda; con esperas cortas el DOM da vacío y los queries fallan), clickear `.lang-btn` "EN", y leer/capturar. No confiar en grep al bundle JS para detectar deploys (los chunks se lazy-loadean).
- **Capturas para revisión (Claude Desktop):** se generan sets ES/EN por sección a 1280px DSF2. La página completa (~9000px) queda ilegible al reducirse; mejor secciones recortadas. **OJO:** guardarlas en `~/Desktop` las expone a que iCloud las evicte — copiar a `~/dev` si se quieren conservar.

## 5. Flujo para retomar

```bash
export PATH="$HOME/.local/node/bin:/opt/homebrew/bin:$PATH"
cd ~/dev/rapa-site
git pull
npm install        # si hiciera falta
npm run dev        # localhost:3000
# editar → npm run build (verificar) → git commit → git push origin main → Vercel deploya solo
```
