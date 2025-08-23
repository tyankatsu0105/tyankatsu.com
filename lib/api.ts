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

function extractPost(fetchResponse: ContentfulResponse): Posts {
  return fetchResponse?.data?.postsCollection?.items?.[0];
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

  if (!entries || !entries.data || !entries.data.postsCollection) {
    throw new Error("Failed to fetch posts: Contentful response is invalid.");
  }

  const items = extractPostEntries(entries);
  if (!items || items.length === 0) {
    throw new Error("No posts found in the Contentful response.");
  }

  return items;
}

export async function getPost(
  slug: string,
  isDraftMode: boolean
): Promise<Posts> {
  const entry = await fetchGraphQL(
    `query {
      postsCollection(where: { slug: "${slug}" }, preview: ${
      isDraftMode ? "true" : "false"
    }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  );

  return extractPost(entry);
}
