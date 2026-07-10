import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "CNIC Front-Back Card Layout Generator — Print Cardify";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #4c1d95 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 64, marginBottom: 20 }}>🆔</div>
        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: 56,
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          CNIC Card Layout Generator
        </div>
        <div
          style={{
            display: "flex",
            color: "rgba(255,255,255,0.9)",
            fontSize: 28,
            maxWidth: 860,
            textAlign: "center",
          }}
        >
          Upload front & back, get a print-ready A4 layout — 85×53.9mm cards
        </div>
      </div>
    ),
    { ...size }
  );
}
