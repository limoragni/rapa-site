import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Juan Rapacioli · Content Designer & Strategist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadDMSans() {
  const base = "https://cdn.jsdelivr.net/npm/@fontsource/dm-sans@5/files";
  const [regular400, bold700, extrabold800, extrabold800italic] =
    await Promise.all([
      fetch(`${base}/dm-sans-latin-400-normal.woff`).then((r) =>
        r.arrayBuffer()
      ),
      fetch(`${base}/dm-sans-latin-700-normal.woff`).then((r) =>
        r.arrayBuffer()
      ),
      fetch(`${base}/dm-sans-latin-800-normal.woff`).then((r) =>
        r.arrayBuffer()
      ),
      fetch(`${base}/dm-sans-latin-800-italic.woff`).then((r) =>
        r.arrayBuffer()
      ),
    ]);
  return { regular400, bold700, extrabold800, extrabold800italic };
}

export default async function Image() {
  let regular400: ArrayBuffer | null = null;
  let bold700: ArrayBuffer | null = null;
  let extrabold800: ArrayBuffer | null = null;
  let extrabold800italic: ArrayBuffer | null = null;
  try {
    const loaded = await loadDMSans();
    regular400 = loaded.regular400;
    bold700 = loaded.bold700;
    extrabold800 = loaded.extrabold800;
    extrabold800italic = loaded.extrabold800italic;
  } catch {}

  const fonts: {
    name: string;
    data: ArrayBuffer;
    style: "normal" | "italic";
    weight: 400 | 700 | 800;
  }[] = [];
  if (regular400) {
    fonts.push({ name: "DM Sans", data: regular400, style: "normal", weight: 400 });
  }
  if (bold700) {
    fonts.push({ name: "DM Sans", data: bold700, style: "normal", weight: 700 });
  }
  if (extrabold800) {
    fonts.push({ name: "DM Sans", data: extrabold800, style: "normal", weight: 800 });
  }
  if (extrabold800italic) {
    fonts.push({ name: "DM Sans", data: extrabold800italic, style: "italic", weight: 800 });
  }

  const sansFamily = fonts.length > 0 ? "DM Sans" : "system-ui";

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
          background: "#063d2f",
          position: "relative",
          fontFamily: sansFamily,
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
              "radial-gradient(ellipse at 80% 20%, rgba(15,123,95,0.55) 0%, transparent 65%)",
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
              "radial-gradient(ellipse at 10% 80%, rgba(246,226,122,0.14) 0%, transparent 60%)",
          }}
        />

        {/* Tag */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#f6e27a",
            marginBottom: 24,
            maxWidth: 920,
          }}
        >
          Content Designer &amp; Strategist · UX Writing · Branding · Content
          Strategy · AI workflows
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 128,
            fontWeight: 800,
            lineHeight: 0.98,
            letterSpacing: "-0.02em",
            color: "#fffdfb",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Juan</span>
          <span style={{ color: "#f6e27a", fontStyle: "italic" }}>
            Rapacioli
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            marginTop: 30,
            fontSize: 26,
            fontWeight: 400,
            color: "#b8dcce",
            maxWidth: 780,
            lineHeight: 1.45,
          }}
        >
          Diseño el contenido de productos digitales: convierto objetivos de
          negocio en experiencias claras, una palabra a la vez.
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length > 0 ? fonts : undefined }
  );
}
