import { getPost } from "@/lib/api";
import { ImageResponse } from "next/og";

export const alt = "About Acme";
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

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug, false);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #1a1e24 0%, #272c35 100%)",
          width: "100%",
          height: "100%",
          padding: "60px",
          letterSpacing: "0.1em",
        }}
      >
        <div
          style={{
            fontSize: 70,
            fontWeight: "bold",
            color: "#00ff62",
            lineHeight: 1.2,
            textShadow:
              "0 2px 10px rgba(0,255,98,0.4), 0 4px 20px rgba(0,0,0,0.4)",
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
