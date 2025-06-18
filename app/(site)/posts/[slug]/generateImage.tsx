import { getPost } from "@/lib/api";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

export async function generateImage(slug: string) {
  const post = await getPost(slug, false);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundSize: "100% 8px, 100% 100%, 100% 100%",
          backgroundColor: "#1a1e24",
          background:
            "linear-gradient(transparent 50%,rgba(0, 0, 0, 0.3) 50%),repeating-linear-gradient(45deg,rgba(255, 255, 255, 0.03) 0px,rgba(255, 255, 255, 0.03) 1px,rgba(0, 0, 0, 0.1) 1px,rgba(0, 0, 0, 0.1) 2px), repeating-linear-gradient(-45deg,rgba(255, 255, 255, 0.02) 0px,rgba(255, 255, 255, 0.02) 2px,rgba(0, 0, 0, 0.08) 2px,rgba(0, 0, 0, 0.08) 4px);",
          width: "100%",
          height: "100%",
          letterSpacing: "0.1em",
          filter: "contrast(0.85) brightness(0.9) blur(0.3px) grayscale(0.1)",
        }}
      >
        <div
          style={{
            fontSize: 70,
            fontWeight: "bold",
            color: "#00ff62",
            lineHeight: 1.2,
            filter: "contrast(0.9) blur(0.3px)",
            textShadow: "0 0 2px #00ff62, 0 0 5px #00ff62, 0 0 10px #00ff62",
            padding: "40px",
          }}
        >
          {post.title}
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#333",
            backgroundColor: "#74f74b",
            textShadow: "0 0 2px #333, 0 0 5px #333",
            padding: "0 40px",
          }}
        >
          tyankatsu.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "DotGothic16",
          data: await loadGoogleFont(
            "DotGothic16",
            `${post.title} tyankatsu.com`
          ),
          style: "normal",
        },
      ],
    }
  );
}
