import { codeToHtml } from "shiki";
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

  md.use(
    fromAsyncCodeToHtml(codeToHtml, {
      themes: {
        light: "gruvbox-dark-hard",
        dark: "gruvbox-dark-hard",
      },
    })
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
