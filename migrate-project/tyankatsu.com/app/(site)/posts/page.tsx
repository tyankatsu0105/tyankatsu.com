import { draftMode } from "next/headers";
import { getAllPosts } from "@/lib/api";
import type { Metadata } from "next";
import {
  Container,
  Heading,
  ListContainer,
  ListItem,
  Link,
} from "@/design/base";

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
    <Container>
      <Heading>Posts</Heading>

      <ListContainer>
        {allPosts.map((post) => (
          <ListItem key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <span>
                投稿日時：{toJST(post.sys.firstPublishedAt)} 最終更新日時：
                {toJST(post.sys.publishedAt)}
                {"　"}
              </span>
              <span>{post.title}</span>
            </Link>
          </ListItem>
        ))}
      </ListContainer>
    </Container>
  );
}
