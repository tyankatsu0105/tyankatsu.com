import { codeToHtml, bundledLanguages } from "shiki";
import { fromAsyncCodeToHtml } from "@shikijs/markdown-it/async";
import MarkdownItAsync from "markdown-it-async";

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
  const md = MarkdownItAsync({ breaks: true });

  // コードブロック処理用のプラグイン
  md.use((md) => {
    const originalFence = md.renderer.rules.fence;
    if (originalFence) {
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const token = tokens[idx];
        if (token.info) {
          // コロン以降を除去して言語部分のみを使用
          const lang = token.info.split(":")[0];
          // サポートされている言語かチェック
          token.info = lang in bundledLanguages ? lang : "text";
        }
        return originalFence.call(this, tokens, idx, options, env, self);
      };
    }
  });

  // シンタックスハイライトの適用
  md.use(
    fromAsyncCodeToHtml(
      async (code, opts) => {
        const lang =
          typeof opts === "string" ? opts : (opts.lang as string) || "text";
        return codeToHtml(code, {
          lang,
          theme: "gruvbox-dark-hard",
        });
      },
      {
        themes: {
          light: "gruvbox-dark-hard",
          dark: "gruvbox-dark-hard",
        },
      }
    )
  );

  const html = await md.renderAsync(params.markdown);
  return html;
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
