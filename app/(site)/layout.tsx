import type { Metadata } from "next";

import { PageLayout } from "@/design/layouts/page_layout";

export const metadata: Metadata = {
  metadataBase: new URL("https://tyankatsu.com"),
  title: "tyankatsu.com",
  description:
    "フロントエンドエンジニアのtyankatsuの取り組んでいることや考察や技術を紹介するサイトです。",
};

export default PageLayout;
