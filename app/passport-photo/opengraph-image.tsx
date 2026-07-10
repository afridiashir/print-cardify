import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Passport Photo Maker — Print Cardify";

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
            "linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #312e81 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 64, marginBottom: 20 }}>📸</div>
        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: 56,
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          Passport Photo Maker
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
          Turn one photo into a print-ready grid of 35×45mm passport photos
        </div>
      </div>
    ),
    { ...size }
  );
}
