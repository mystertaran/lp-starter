import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0A0A0A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#FBF9F4",
        fontSize: 134,
        fontWeight: 900,
        letterSpacing: "-0.04em",
        fontFamily: "system-ui, -apple-system, sans-serif",
        lineHeight: 1,
      }}
    >
      F
    </div>,
    { ...size }
  );
}
