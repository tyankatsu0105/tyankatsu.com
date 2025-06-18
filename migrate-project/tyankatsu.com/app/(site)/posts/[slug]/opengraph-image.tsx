import { getPost } from "@/lib/api";
import { ImageResponse } from "next/og";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug, false);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          background: "linear-gradient(135deg, #1a1e24 0%, #272c35 100%)",
          width: "100%",
          height: "100%",
          fontSize: 88,
          fontWeight: "bold",
          color: "#00ff62",
          lineHeight: 1.2,
          textShadow:
            "0 2px 10px rgba(0,255,98,0.4), 0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        <div
          style={{
            padding: "60px",
          }}
        >
          {post.title}
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "60px",
            fontSize: 30,
          }}
        >
          tyankatsu.com
        </div>
      </div>
      // <div
      //   style={{
      //     background: "linear-gradient(135deg, #1a1e24 0%, #272c35 100%)",
      //     width: "100%",
      //     height: "100%",
      //     padding: "60px",
      //     position: "relative",
      //   }}
      // >
      //   <div
      //     style={{
      //       height: "100%",
      //       display: "flex",
      //       alignItems: "center",
      //       justifyContent: "center",
      //     }}
      //   >
      //     <div
      //       style={{
      //         fontSize: 88,
      //         fontWeight: "bold",
      //         color: "#00ff62",
      //         lineHeight: 1.2,
      //         letterSpacing: "0.02em",
      //         textShadow:
      //           "0 2px 10px rgba(0,255,98,0.4), 0 4px 20px rgba(0,0,0,0.4)",
      //         textAlign: "center",
      //         maxWidth: "90%",
      //       }}
      //     >
      //       {post.title}
      //     </div>
      //   </div>

      //   <div
      //     style={{
      //       position: "absolute",
      //       right: "60px",
      //       bottom: "40px",
      //       fontSize: 28,
      //       color: "#ffffff",
      //       letterSpacing: "0.05em",
      //       textShadow: "0 2px 4px rgba(0,0,0,0.5)",
      //       opacity: 0.8,
      //     }}
      //   >
      //     tyankatsu.com
      //   </div>
      // </div>
    )
  );
}
