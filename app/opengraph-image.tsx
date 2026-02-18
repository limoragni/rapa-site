import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Juan Rapacioli — Content Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(ellipse at 80% 20%, #f7c5da 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "400px",
            height: "300px",
            background:
              "radial-gradient(ellipse at 10% 80%, rgba(240,168,67,0.18) 0%, transparent 60%)",
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
            marginBottom: 20,
          }}
        >
          Content Designer | UX Writing & Content Strategy
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 120,
            fontWeight: 700,
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
            marginTop: 28,
            fontSize: 26,
            color: "#5a4e3c",
            fontWeight: 300,
            maxWidth: 600,
          }}
        >
          Connecting business objectives with user needs through intentional,
          clear content.
        </div>
      </div>
    ),
    { ...size }
  );
}
