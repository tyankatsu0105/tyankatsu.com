<template>
  <Posts :posts="$page.allContentfulPosts" />
</template>

<script>
  import Posts from "~/ui/templates/Posts.vue";
  import * as Shared from "~/shared";

  export default {
    components: {
      Posts,
    },

    metaInfo() {
      return Shared.Meta.meta({
        title: "Posts",
        url: `${process.env.GRIDSOME_APP_BASE_URL}/posts`,
        description: `ブログ投稿一覧ページです。`,
        type: "website",
      });
    },
  };
</script>

<page-query>
  query Post {
    allContentfulPosts(order: DESC) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      totalCount
      edges {
        node {
          id
          title
          slug
          category {
            ... on ContentfulCategory {
              id
              title
            }
          }
          tags {
            id
            title
          }
          createdAt: createdAt(format: "YYYY.MM.DD", locale: "ja")
          updatedAt: updatedAt(format: "YYYY.MM.DD", locale: "ja")
        }
      }
    }
  }
</page-query>
