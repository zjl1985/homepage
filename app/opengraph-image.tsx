import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
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
          justifyContent: "space-between",
          padding: 72,
          background: "#1b2a24",
          color: "#efe9dd",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, opacity: 0.6 }}>
          {site.role.toUpperCase()}
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", fontSize: 280, lineHeight: 0.8 }}>
          zer<span style={{ color: "#e0654a", fontStyle: "italic" }}>o</span>
        </div>
        <div style={{ display: "flex", fontSize: 32, opacity: 0.8 }}>{site.taglineEn}</div>
      </div>
    ),
    size,
  );
}
