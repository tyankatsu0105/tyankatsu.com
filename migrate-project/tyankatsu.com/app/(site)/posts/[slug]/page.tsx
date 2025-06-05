import type { Metadata } from "next";
import styles from "./page.module.css";

import { getAllPosts, getPost } from "@/lib/api";

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
  const post = await getPost(slug, false);
  console.log({ post, slug });

  return (
    <div className={styles["container"]}>
      <h1 className={styles["heading"]}>{post.title}</h1>

      <div
        className={styles["content"]}
        dangerouslySetInnerHTML={{ __html: post.contents ?? "" }}
      />
    </div>
  );
}
