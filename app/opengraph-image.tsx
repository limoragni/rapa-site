import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Juan Rapacioli | UX Content Designer & Strategist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadDMSerifDisplay() {
  const base =
    "https://raw.githubusercontent.com/google/fonts/main/ofl/dmserifdisplay";
  const [regular, italic] = await Promise.all([
    fetch(`${base}/DMSerifDisplay-Regular.ttf`).then((r) => r.arrayBuffer()),
    fetch(`${base}/DMSerifDisplay-Italic.ttf`).then((r) => r.arrayBuffer()),
  ]);
  return { regular, italic };
}

export default async function Image() {
  let regular: ArrayBuffer | null = null;
  let italic: ArrayBuffer | null = null;
  try {
    const loaded = await loadDMSerifDisplay();
    regular = loaded.regular;
    italic = loaded.italic;
  } catch {}

  const fonts: {
    name: string;
    data: ArrayBuffer;
    style: "normal" | "italic";
    weight: 400;
  }[] = [];
  if (regular)
    fonts.push({
      name: "DM Serif Display",
      data: regular,
      style: "normal",
      weight: 400,
    });
  if (italic)
    fonts.push({
      name: "DM Serif Display",
      data: italic,
      style: "italic",
      weight: 400,
    });

  const serifFamily =
    fonts.length > 0 ? "DM Serif Display, serif" : "Georgia, serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px 80px",
          background: "#fdf6ee",
          position: "relative",
        }}
      >
        {/* Gradient blobs */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "720px",
            height: "480px",
            background:
              "radial-gradient(ellipse at 80% 20%, #f7c5da 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "480px",
            height: "360px",
            background:
              "radial-gradient(ellipse at 10% 80%, rgba(240,168,67,0.22) 0%, transparent 60%)",
          }}
        />

        {/* Tag */}
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#e0357a",
            marginBottom: 22,
          }}
        >
          Content Designer & Strategist | UX | AI-driven workflows
        </div>

        {/* Name */}
        <div
          style={{
            fontFamily: serifFamily,
            fontSize: 140,
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: "#1a1208",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Juan</span>
          <span style={{ color: "#e0357a", fontStyle: "italic" }}>
            Rapacioli
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            marginTop: 30,
            fontSize: 26,
            color: "#5a4e3c",
            fontWeight: 300,
            maxWidth: 780,
            lineHeight: 1.45,
          }}
        >
          Conecto objetivos de negocio con necesidades de personas usuarias,
          una palabra a la vez.
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length > 0 ? fonts : undefined }
  );
}
