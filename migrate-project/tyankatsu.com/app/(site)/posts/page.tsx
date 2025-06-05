import { draftMode } from "next/headers";

import { getAllPosts } from "@/lib/api";

import Link from "next/link";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts - tyankatsu.com",
  description: "ブログ投稿一覧ページです。",
};
export default async function Posts() {
  const { isEnabled } = await draftMode();
  const allPosts = await getAllPosts(isEnabled);

  const toJST = (dateString: string) => {
    return new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dateString));
  };

  return (
    <>
      <div className={styles["container"]}>
        <h1 className={styles["heading"]}>Posts</h1>

        <ul className={styles["list"]}>
          {allPosts.map((post) => (
            <li key={post.slug} className={styles["list-item"]}>
              <Link
                href={`/posts/${post.slug}`}
                className={styles["list-item-link"]}
              >
                <span>
                  投稿日時：{toJST(post.sys.firstPublishedAt)} 最終更新日時：
                  {toJST(post.sys.publishedAt)}
                </span>
                <span>{post.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
