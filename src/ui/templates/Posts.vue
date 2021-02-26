<template>
  <Layout>
    <PageHeading>Posts</PageHeading>

    <ul>
      <EntryList
        v-for="({ node: post }, index) in posts.edges"
        :key="index"
        :element="'li'"
      >
        <Entry :link="`/posts/${post.slug}`" :title="post.title">
          <p>投稿 {{ post.createdAt }} 更新 {{ post.updatedAt }}</p>
        </Entry>
      </EntryList>
    </ul>
  </Layout>
</template>

<script>
  import Layout from "~/layouts/Default.vue";
  import PageHeading from "~/ui/atoms/PageHeading.vue";
  import EntryList from "~/ui/components/EntryList.vue";
  import Entry from "~/ui/components/Entry.vue";
  export default {
    components: {
      Layout,
      PageHeading,
      EntryList,
      Entry,
    },
    props: {
      posts: {
        type: Object,
        default() {
          return {};
        },
      },
    },
  };
</script>
