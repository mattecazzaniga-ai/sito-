import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#273460",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 420,
            height: "100%",
            background: "linear-gradient(135deg, #273460 0%, #147333 100%)",
            clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", fontSize: 26, color: "#22a855", fontWeight: 700, letterSpacing: 4 }}>
          IL TORNEO DI CALCIO A 5 TRA AZIENDE
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 92,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1,
            marginTop: 24,
          }}
        >
          <span>AZIENDE</span>
          <span style={{ color: "#22a855" }}>IN CAMPO</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "rgba(255,255,255,0.7)", marginTop: 32 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
