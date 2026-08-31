import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#001b4a",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <svg width="70" height="54" viewBox="0 0 97.93 74.93" fill="none">
          <polygon
            fill="#00b2ff"
            points="97.93 12.62 80.17 36.55 97.93 60.48 97.93 74.93 82.95 74.93 55.09 37.39 70.4 16.84 57.93 16.84 48.88 29.02 36.19 11.92 45.01 0 97.93 0 97.93 12.62"
          />
          <polygon
            fill="#00b2ff"
            points="61.74 63.01 52.92 74.93 0 74.93 0 62.31 17.76 38.37 0 14.44 0 0 14.98 0 42.85 37.54 27.53 58.09 40 58.09 49.05 45.9 61.74 63.01"
          />
        </svg>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              color: "#fdfcfa",
              lineHeight: 1.05,
            }}
          >
            Organising the un-organised.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 26, color: "#66cdff" }}>
            PerpeX Insights — B2B Transformation &amp; Execution Services
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
