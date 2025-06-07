import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";

import type { Metadata } from "next";
import styles from "./page.module.css";

import { getAllPosts, getPost } from "@/lib/api";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug, false);

  return {
    title: `${post.title} - tyankatsu.com`,
    description: post.contents?.slice(0, 150) || "No description available",
  };
}

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

const getHighlightedMarkdown = async (params: { markdown: string }) => {
  const codeBlockRegex = /```(\w+)\n([\s\S]*?)```/g;

  // マッチした全てのコードブロックを抽出
  const codeBlocks: { lang: BundledLanguage; code: string }[] = [];
  const replaced =
    params.markdown.replace(
      codeBlockRegex,
      (_, lang: BundledLanguage, code: string) => {
        codeBlocks.push({ lang, code });
        // プレースホルダーを返す
        return `___CODE_BLOCK_${codeBlocks.length - 1}___`;
      }
    ) ?? "";

  // 全てのコードブロックを非同期でハイライト
  const highlightedBlocks = await Promise.all(
    codeBlocks.map(async ({ lang, code }) => {
      try {
        return await codeToHtml(code, { lang, theme: "github-dark" });
      } catch {
        return `<pre><code>${code}</code></pre>`;
      }
    })
  );

  // プレースホルダーを実際のハイライトされたコードで置換
  const finalContent = highlightedBlocks.reduce(
    (content, block, index) =>
      content.replace(`___CODE_BLOCK_${index}___`, block),
    replaced
  );

  return finalContent;
};

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug, false);

  const contents = await getHighlightedMarkdown({
    markdown: post.contents ?? "",
  });

  return (
    <div className={styles["container"]}>
      <h1 className={styles["heading"]}>{post.title}</h1>

      <div className={styles["content"]}>
        <div dangerouslySetInnerHTML={{ __html: contents }} />
      </div>
    </div>
  );
}
