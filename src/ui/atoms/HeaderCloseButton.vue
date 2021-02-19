<template>
	<button
		type="button"
		class="HeaderCloseButton"
		data-text="CLOSE"
		@click="shouldHeaderOpen(false)"
	>
		CLOSE
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
  @import "@/styles/utility/glitch.scss";

  .HeaderCloseButton {
    position: fixed;
    top: calc(25px + 1rem);
    right: calc(25px + 1rem);
    z-index: $z-index-header;
    font-size: $font-size-header-nav;
    color: $color-accent;

    &::before,
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      content: attr(data-text);
    }

    &::before {
      @include chromatic-aberration-text($x: -2px, $color: #ff0000);
      left: 1px;
      animation: glitch-text-1 1s linear 0s infinite alternate-reverse;
    }
    &::after {
      @include chromatic-aberration-text($x: -2px, $color: complement(#ff0000));
      left: -1px;
      animation: glitch-text-2 1s linear 0s infinite alternate-reverse;
    }
  }
</style>
