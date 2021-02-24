<template>
	<div class="Heading">
		<div class="Heading-Inner">
			<h1 class="Heading-Inner_Text">
				<slot></slot>
			</h1>
		</div>
	</div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .Heading {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 72px;
    padding: 12px;
    background-color: transparentize($color-font, 0.3);
    border-radius: 0 0 20px 20px;

    &-Inner {
      overflow-x: scroll;
      overflow-y: hidden;
      &_Text {
        font-size: 2rem;
        font-weight: bold;
        color: $color-black;
        white-space: nowrap;
      }
    }
  }
</style>
