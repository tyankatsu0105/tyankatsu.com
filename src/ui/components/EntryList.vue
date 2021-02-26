<template>
  <component :is="element" class="Entrylist-Item">
    <slot></slot>
  </component>
</template>

<script>
  export default {
    props: {
      element: {
        type: String,
        default: "div",
      },
    },
  };
</script>

<style lang="scss">
  .Entrylist {
    &-Item {
      & + & {
        margin-top: 16px;
      }
    }
  }
</style>
