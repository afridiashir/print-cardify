import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE_NAME} — Free Print-Ready Card & Passport Photo Layouts`;

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
            "linear-gradient(135deg, #7c3aed 0%, #6d28d9 40%, #0891b2 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 76,
              height: 76,
              borderRadius: 20,
              background: "rgba(255,255,255,0.18)",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
            }}
          >
            🖨️
          </div>
          <div style={{ display: "flex", color: "white", fontSize: 60, fontWeight: 700 }}>
            {SITE_NAME}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "rgba(255,255,255,0.92)",
            fontSize: 30,
            maxWidth: 860,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Print-ready CNIC card layouts & passport photo grids, free in your browser
        </div>
      </div>
    ),
    { ...size }
  );
}
