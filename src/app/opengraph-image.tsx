import { ImageResponse } from "next/og";

export const alt = "The Fabos — jedno centrum dowodzenia dla wielokanałowego e-commerce";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#FBF9F4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#6E6A63",
        }}
      >
        <span>The Fabos</span>
        <span>Operations platform</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 108,
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          textTransform: "uppercase",
          color: "#0A0A0A",
        }}
      >
        <span>Jedno centrum</span>
        <span>dowodzenia dla</span>
        <span>
          wielokanałowego <span style={{ color: "#FF4C00" }}>e-commerce.</span>
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          fontSize: 26,
          color: "#0A0A0A",
        }}
      >
        <span style={{ maxWidth: 780, lineHeight: 1.3, color: "#2A2825" }}>
          Spina kanały sprzedaży, fulfillment, zwroty i księgowość w jedno źródło prawdy.
        </span>
        <span style={{ fontWeight: 700, letterSpacing: "0.08em" }}>fabos.pl</span>
      </div>
    </div>,
    { ...size }
  );
}
