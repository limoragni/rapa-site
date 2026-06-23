# CLAUDE.md — rapa-site (portfolio juanrapacioli.com)

> Contexto para retomar el trabajo en sesiones futuras de Claude Code.
> Última actualización: 2026-06-23. Idioma de trabajo: español (respuestas cortas, iterar y ajustar).

## 1. Estado del proyecto

- **Repo:** https://github.com/limoragni/rapa-site
- **Ruta local limpia:** `~/dev/rapa-site` (FUERA de iCloud — ver Notas técnicas)
- **Deploy:** Vercel, automático desde `main`
- **Producción:** el apex `juanrapacioli.com` redirige (307) a **`www.juanrapacioli.com`** (host real)
- **Último commit:** `494f255` (en `origin/main`). Los cambios del sitio están en `5c0df9d` (desplegado y verificado en producción); `494f255` agrega este CLAUDE.md.
- **Stack:** Next.js 15 (App Router), client component único en `app/page.tsx`. Sitio bilingüe **ES/EN** con switcher (default ES, persistido en `sessionStorage`).

### Archivos clave
- `app/page.tsx` — todo el contenido del home (objeto `content.es` / `content.en`, array `TESTIMONIALS`, render). Hero, Sobre mí, Portfolio, Skills, Trayectoria, Formación, Testimonios, Footer.
- `app/layout.tsx` — metadata SEO estática (title, description, OpenGraph, Twitter).
- `app/globals.css` — estilos.
- `app/opengraph-image.tsx` — imagen OG generada (incluye el tagline).
- `app/guidelines/page.tsx` — página `/guidelines` (brand system; también tiene el tagline).

## 1.b Cambios sesión 2026-06-23

- **Portfolio dividido en dos bloques** (jerarquía visual). Sub-labels bilingües `work-block-label` (rosa, uppercase, con borde inferior): **Trabajo destacado / Featured work** (Meli+ · Galicia · Macro) y **Más trabajo / More work** (Nodus · Digital House · Cerem · UNTREF · Nonconformist · Periodismo · Guía). Se reordenó (Galicia y Macro subieron; Nodus bajó al 2º bloque).
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

- **`metadataBase` no seteado** en `layout.tsx` → warning de build; afecta la resolución de URLs absolutas de las imágenes OG/Twitter. Se arregla con una línea (`metadataBase: new URL("https://www.juanrapacioli.com")`).
- ~~**Cert Claude Cowork:** convertir a tarjeta-enlace.~~ ✅ Hecho en sesión 2026-06-23 (link de Drive aplicado).

## 4. Notas técnicas (entorno)

- **iCloud sincroniza `~/Desktop` y `~/Documents`** → **NUNCA clonar repos ahí** (iCloud evicta/desincroniza archivos y rompe el working tree y el `.git`). Por eso la ruta limpia es `~/dev/rapa-site`.
- **Repo original corrupto** en `~/Library/Mobile Documents/com~apple~CloudDocs/Documents/GitHub/rapa-site` (working tree y object store dañados por iCloud) — **no tocar**; el bueno es `~/dev/rapa-site`.
- **Homebrew** instalado en esta sesión: `/opt/homebrew/bin/brew` (Homebrew 6.0.3).
- **gh CLI** instalado y autenticado como **JRapacioli87** (keyring) → el push a `main` funciona con `gh`/git.
- **Node** instalado localmente en `~/.local/node` (v24.17.0, sin sudo). Agregar al PATH con `export PATH="$HOME/.local/node/bin:$PATH"` para `npm`. Dev server: `npm run dev` (localhost:3000). Quedó **frenado** al cierre.
- **Verificar visualmente** con Chrome headless + CDP (Node tiene `WebSocket`/`fetch` globales): forzar `.reveal` a `.visible` antes de capturar, porque el contenido arranca con opacity 0 hasta el scroll.

## 5. Flujo para retomar

```bash
export PATH="$HOME/.local/node/bin:/opt/homebrew/bin:$PATH"
cd ~/dev/rapa-site
git pull
npm install        # si hiciera falta
npm run dev        # localhost:3000
# editar → npm run build (verificar) → git commit → git push origin main → Vercel deploya solo
```
