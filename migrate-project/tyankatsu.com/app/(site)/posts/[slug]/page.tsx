import type { Metadata } from "next";

import { getAllPosts } from "@/lib/api";

// import Link from "next/link";
// import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Posts - tyankatsu.com",
  description: "ブログ投稿一覧ページです。",
};

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <>{slug}</>;
}
