import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
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
        fontSize: 380,
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
