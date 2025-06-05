import { Posts } from "./contentful";

const POST_GRAPHQL_FIELDS = `
  title
  slug
  contents
  eyecatch {
    url
    width
    height
  }
  sys{
    firstPublishedAt
    publishedAt
  }
`;

type ContentfulResponse = {
  data: {
    postsCollection: {
      items: Posts[];
    };
  };
};

async function fetchGraphQL(
  query: string,
  preview = false
): Promise<ContentfulResponse> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    }
  ).then((response) => response.json());
}

function extractPostEntries(fetchResponse: ContentfulResponse): Posts[] {
  return fetchResponse?.data?.postsCollection?.items;
}

export async function getAllPosts(isDraftMode: boolean): Promise<Posts[]> {
  const entries = await fetchGraphQL(
    `query {
      postsCollection(where: { slug_exists: true }, order: sys_firstPublishedAt_DESC, preview: ${
        isDraftMode ? "true" : "false"
      }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  );

  return extractPostEntries(entries);
}
