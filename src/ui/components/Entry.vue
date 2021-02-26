<template>
  <p class="Entry">
    <g-link :to="link">
      <slot></slot>
      {{ title }}
    </g-link>
  </p>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        default() {
          return {};
        },
      },
      link: {
        type: String,
        default: "",
      },
      title: {
        type: String,
        default: "",
      },
    },
  };
</script>

<style lang="scss" scoped>
  .Entry {
    font-size: 1.2rem;
  }
</style>
