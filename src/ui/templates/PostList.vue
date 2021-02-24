<template>
	<Layout>
		<PageHeading>Posts</PageHeading>

		<ul>
			<li
				v-for="({ node: post }, index) in posts.edges"
				:key="index"
				class="PostList-ListItem"
			>
				<Entry :post="post" />
			</li>
		</ul>
	</Layout>
</template>

<script>
  import Layout from "~/layouts/Default.vue";
  import PageHeading from "~/ui/atoms/PageHeading.vue";
  import Entry from "~/ui/components/Entry.vue";
  export default {
    components: {
      Layout,
      PageHeading,
      Entry,
    },
    props: {
      posts: {
        type: Object,
      },
    },
  };
</script>

<style lang="scss">
  .PostList {
    &-ListItem {
      & + & {
        margin-top: 16px;
      }
    }
  }
</style>
