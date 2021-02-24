<template>
	<p class="Entry">
		<g-link :to="`/posts/${post.slug}`">
			<p class="Entry-Date">
				投稿 {{ post.createdAt }} 更新 {{ post.updatedAt }}
			</p>
			{{ post.title }}
		</g-link>
	</p>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .Entry {
    font-size: 1.2rem;
    &-Date {
      font-style: italic;
      font-weight: 100;
    }
  }
</style>
