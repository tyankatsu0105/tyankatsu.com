<template>
	<p class="Entry">
		<g-link :to="`/posts/${post.slug}`">
			<span class="Entry-Date">{{ date }}</span> | {{ post.title }}
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
    computed: {
      date() {
        let result = {
          string: "",
          time: "",
        };
        const createdAtTime = new Date(this.post.createdAt).getTime();
        const updatedAtTime = new Date(this.post.updatedAt).getTime();

        if (createdAtTime === updatedAtTime) {
          result = {
            string: "公開",
            time: this.post.formatedCreatedAt,
          };
        }

        if (createdAtTime < updatedAtTime) {
          result = {
            string: "更新",
            time: this.post.formatedUpdatedAt,
          };
        }

        return `${result.string}:${result.time}`;
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
