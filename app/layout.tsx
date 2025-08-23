import "the-new-css-reset/css/reset.css";
import { DotGothic16, Noto_Sans_JP } from "next/font/google";
import type { Metadata } from "next";

const geistDotGothic16 = DotGothic16({
  variable: "--font-geist-dot-gothic-16",
  weight: "400",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tyankatsu.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistDotGothic16.variable} ${notoSansJP.variable}`}>
        {children}
      </body>
    </html>
  );
}
