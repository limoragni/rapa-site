import { ImageResponse } from "next/og";

// Same mechanism as app/opengraph-image.tsx. Static DM Sans .woff files from
// @fontsource (the variable Google Fonts file breaks next/og's font parser).
export const runtime = "edge";
export const alt =
  "Banco Galicia · Caso de Content Design · Juan Rapacioli. +392% y +128% sobre benchmark de conversión.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const DEEP = "#063d2f";
const CREAM = "#fffdfb";
const YELLOW = "#f6e27a";
const MINT = "#b8dcce";

async function loadDMSans() {
  const base = "https://cdn.jsdelivr.net/npm/@fontsource/dm-sans@5/files";
  const get = (f: string) => fetch(`${base}/${f}`).then((r) => r.arrayBuffer());
  const [r400, b700, x800] = await Promise.all([
    get("dm-sans-latin-400-normal.woff"),
    get("dm-sans-latin-700-normal.woff"),
    get("dm-sans-latin-800-normal.woff"),
  ]);
  return [
    { name: "DM Sans", data: r400, style: "normal" as const, weight: 400 as const },
    { name: "DM Sans", data: b700, style: "normal" as const, weight: 700 as const },
    { name: "DM Sans", data: x800, style: "normal" as const, weight: 800 as const },
  ];
}

function Figure({ value }: { value: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          fontSize: 112,
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          color: CREAM,
        }}
      >
        {value}
      </div>
      <div style={{ marginTop: 10, fontSize: 24, fontWeight: 400, color: MINT }}>
        sobre benchmark de conversión
      </div>
    </div>
  );
}

export default async function Image() {
  let fonts: Awaited<ReturnType<typeof loadDMSans>> = [];
  try {
    fonts = await loadDMSans();
  } catch {}
  const family = fonts.length > 0 ? "DM Sans" : "system-ui";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: DEEP,
          position: "relative",
          fontFamily: family,
        }}
      >
        {/* Hero gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 760,
            height: 500,
            background:
              "radial-gradient(ellipse at 80% 15%, rgba(15,123,95,0.55) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 520,
            height: 380,
            background:
              "radial-gradient(ellipse at 10% 85%, rgba(246,226,122,0.12) 0%, transparent 60%)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: YELLOW,
            }}
          >
            CASO DE CONTENT DESIGN · 2025 A 2026
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: CREAM,
            }}
          >
            Banco Galicia
          </div>
          <div style={{ marginTop: 14, fontSize: 32, fontWeight: 400, color: CREAM }}>
            B2B Content Strategy
          </div>
        </div>

        <div style={{ display: "flex", gap: 96 }}>
          <Figure value="+392%" />
          <Figure value="+128%" />
        </div>

        <div style={{ fontSize: 22, fontWeight: 400, color: MINT }}>
          Juan Rapacioli · Content Designer &amp; Strategist
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length > 0 ? fonts : undefined }
  );
}
