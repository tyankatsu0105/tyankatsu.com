<template>
	<Layout>
		<div class="Index">
			<h1
				class="Index_Heading"
				data-text="Tyankatsu"
			>
				Tyankatsu
			</h1>
		</div>
	</Layout>
</template>

<script>
  import Layout from "~/layouts/Default.vue";
  import * as Shared from "~/shared";

  export default {
    components: {
      Layout,
    },

    metaInfo() {
      return {
        ...Shared.Meta.meta({
          title: Shared.Const.SITE_NAME,
          url: `${process.env.GRIDSOME_APP_BASE_URL}`,
          description: Shared.Const.DESCRIPTION,
          type: "website",
        }),
        titleTemplate: "%s",
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import "~/styles/utility/glitch.scss";
  .Index {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    &_Heading {
      position: relative;
      font-size: 10rem;
      font-weight: bold;
      color: #fff;
      &::before,
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        content: attr(data-text);
      }
      &::before {
        @include chromatic-aberration-text(
          $x: -2px,
          $color: $chromatic-aberration-color-main
        );
        left: 1px;
        animation: glitch-text-1 1s linear 0s infinite alternate-reverse;
      }
      &::after {
        @include chromatic-aberration-text(
          $x: -2px,
          $color: $chromatic-aberration-color-sub
        );
        left: -1px;
        animation: glitch-text-2 1s linear 0s infinite alternate-reverse;
      }
    }
  }
</style>
