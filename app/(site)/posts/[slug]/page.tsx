import { codeToHtml, bundledLanguages } from "shiki";
import { fromAsyncCodeToHtml } from "@shikijs/markdown-it/async";
import MarkdownItAsync from "markdown-it-async";
import type { Metadata } from "next";
import Image from "next/image";

import { Container, Heading } from "@/design/base";
import styles from "./page.module.css";

/* eslint-disable @typescript-eslint/no-explicit-any */

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

  // リンクのカスタマイズ
  const defaultRender =
    md.renderer.rules.link_open ||
    function (tokens: any[], idx: number, options: any, env: any, self: any) {
      return self.renderToken(tokens, idx, options);
    };

  md.renderer.rules.link_open = function (
    tokens: any[],
    idx: number,
    options: any,
    env: any,
    self: any
  ) {
    const token = tokens[idx];
    const hrefIndex = token.attrIndex("href");
    if (hrefIndex >= 0 && token.attrs) {
      const href = token.attrs[hrefIndex][1];

      // サイト内部リンクかどうかをチェック
      const isInternalLink = /^\/|^#/.test(href);

      if (!isInternalLink) {
        token.attrPush(["target", "_blank"]); // 外部リンクの場合、target="_blank"を追加
        token.attrPush(["rel", "noopener noreferrer"]); // セキュリティ対策
      }
    }
    return defaultRender(tokens, idx, options, env, self);
  };

  // カスタムスタイルの追加
  const customStyle = `
    <style>
      .code-block {
        position: relative;
        margin: 1em 0;
      }
      .code-filename {
        position: absolute;
        top: 0;
        right: 1em;
        padding: 0.2em 0.6em;
        font-size: 0.9em;
        color: #666;
        background: #f5f5f5;
        border-radius: 0 0 4px 4px;
        border: 1px solid #ddd;
        border-top: none;
      }
    </style>
  `;

  // コードブロック処理用のプラグイン
  md.use((md) => {
    const originalFence = md.renderer.rules.fence;
    if (originalFence) {
      md.renderer.rules.fence = function (
        tokens: any[],
        idx: number,
        options: any,
        env: any,
        self: any
      ) {
        const token = tokens[idx];
        if (token.info) {
          const [lang, filename] = token.info.split(":");
          // サポートされている言語かチェック
          token.info = lang in bundledLanguages ? lang : "text";

          // ファイル名がある場合は、コードブロックの上部にファイル名を表示
          if (filename) {
            const originalRendered = originalFence.call(
              this,
              tokens,
              idx,
              options,
              env,
              self
            );
            return `<div class="code-block">
              <div class="code-filename">${filename}</div>
              ${originalRendered}
            </div>`;
          }
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
        const html = await codeToHtml(code, {
          lang,
          theme: "gruvbox-dark-hard",
        });
        // data-code-type="shiki"属性を追加
        return html.replace(
          '<pre class="shiki',
          '<pre data-code-type="shiki" class="shiki'
        );
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
  return customStyle + html;
  /* eslint-enable @typescript-eslint/no-explicit-any */
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
    <Container>
      <Heading>{post.title}</Heading>
      <div className={styles["content"]}>
        {post.eyecatch && (
          <Image
            src={post.eyecatch.url}
            alt={post.title}
            width={post.eyecatch.width}
            height={post.eyecatch.height}
            loading="lazy"
          />
        )}

        <div dangerouslySetInnerHTML={{ __html: contents }} />
      </div>
    </Container>
  );
}
