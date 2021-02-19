<template>
	<PostList :posts="$page.allContentfulPosts" />
</template>

<script>
  import PostList from "~/ui/templates/PostList.vue";
  export default {
    components: {
      PostList,
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
          createdAt(locale: "ja")
          updatedAt(locale: "ja")
          formatedCreatedAt: createdAt(format: "YYYY.MM.DD", locale: "ja")
          formatedUpdatedAt: updatedAt(format: "YYYY.MM.DD", locale: "ja")
        }
      }
    }
  }

  # fragment Category on ContentfulBlog{
  #   title
  # }
</page-query>
