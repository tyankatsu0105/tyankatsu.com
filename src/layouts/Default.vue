<template>
	<div class="Default">
		<transition
			name="page"
			appear
		>
			<div
				class="Default_Container"
				:class="{
					'open-Header': isHeaderOpen,
					'disable-animation': disableAnimation,
				}"
			>
				<HeaderOpenButton />
				<VHeader />
				<div class="Default_ContentsWrap">
					<main class="Default_Contents">
						<slot></slot>
					</main>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
  import { mapState } from "vuex";
  import VHeader from "~/ui/components/VHeader.vue";
  import HeaderOpenButton from "~/ui/atoms/HeaderOpenButton.vue";
  export default {
    components: {
      VHeader,
      HeaderOpenButton,
    },
    props: {
      disableAnimation: {
        type: Boolean,
      },
    },
    computed: {
      ...mapState("VHeader", ["isHeaderOpen"]),
    },
    metaInfo: {
      htmlAttrs: {
        lang: "ja",
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "@/styles/utility/transition-page.scss";
  @import "@/styles/utility/glitch.scss";
  .Default {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    padding: 25px;

    @include mq-xs {
      padding: 12px;
    }
    &_Container {
      @include background-stripe(
        $border-width: 2px,
        $color2: rgba(122, 122, 122, 0.1)
      );
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      &:not(.disable-animation) {
        @include background-stripe($border-width: 2px);
      }
      &:not(.disable-animation)::before {
        @include background-stripe(
          $color1: rgba(41, 41, 41, 0.062),
          $border-width: 1px
        );
        position: absolute;
        top: 1px;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        content: "";
        animation: glitch-background-1 0.5s linear 0s infinite alternate-reverse;
      }
    }
    &_ContentsWrap {
      width: 100%;
      height: 100%;
      padding: 20px 20px calc(25px + 72px);
      overflow-y: scroll;

      @include mq-xs {
        padding: 90px 10px calc(10px + 72px);
      }
    }
    &_Contents {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
    }
  }
  .open-Header {
    overflow: hidden;
  }
</style>
