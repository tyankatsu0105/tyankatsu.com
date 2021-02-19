<template>
	<button
		class="HeaderOpenButton"
		type="button"
		@click="shouldHeaderOpen(true)"
	>
		Menu
	</button>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    methods: {
      ...mapActions("VHeader", ["shouldHeaderOpen"]),
    },
  };
</script>

<style lang="scss" scoped>
  .HeaderOpenButton {
    position: fixed;
    top: calc(25px + 1rem);
    right: calc(25px + 1rem);
    z-index: $z-index-header;
    font-size: $font-size-header-nav;
    color: $color-accent;
  }
</style>
