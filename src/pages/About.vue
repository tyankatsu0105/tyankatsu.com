<template>
  <Layout>
    <PageHeading>About</PageHeading>

    <section class="About-Section">
      <h2 class="About-Section_Heading">Work</h2>

      <ul class="About-List">
        <li class="About-ListItem">
          Front-end Engineer: Linc'well - (December 2022 - Present)
        </li>

        <li class="About-ListItem">
          Front-end Engineer: HRBrain - (July 2020 - October 2022)
        </li>

        <li class="About-ListItem">
          Front-end Engineer: VEGA corporation - (July 2018 - June 2020)
        </li>

        <li class="About-ListItem">
          Web Designer: Japanese company - (2016 - June 2018)
        </li>
      </ul>
    </section>

    <section class="About-Section">
      <h2 class="About-Section_Heading">Internet</h2>

      <ul class="About-List">
        <li class="About-ListItem">
          <g-link
            href="https://twitter.com/tyankatsu5"
            class="About-ListItem_Link"
          >
            Twitter
          </g-link>
        </li>

        <li class="About-ListItem">
          <g-link
            href="https://github.com/tyankatsu0105"
            class="About-ListItem_Link"
          >
            GitHub
          </g-link>
        </li>

        <li class="About-ListItem">
          <g-link
            href="https://www.npmjs.com/~tyankatsu0105"
            class="About-ListItem_Link"
          >
            npm
          </g-link>
        </li>

        <li class="About-ListItem">
          <g-link
            href="https://speakerdeck.com/tyankatsu"
            class="About-ListItem_Link"
          >
            Speaker Deck
          </g-link>
        </li>

        <li class="About-ListItem">
          <g-link
            href="https://katsulog.netlify.app/"
            class="About-ListItem_Link"
          >
            katsulog(diary)
          </g-link>
        </li>
      </ul>
    </section>

    <section class="About-Section">
      <h2 class="About-Section_Heading">Book</h2>

      <ul class="About-List">
        <li class="About-ListItem">
          <g-link
            href="https://ponday.booth.pm/items/1316963"
            class="About-ListItem_Link"
          >
            チームマネジメントとGridsome／VuePress
          </g-link>
        </li>
      </ul>
    </section>

    <section class="About-Section">
      <h2 class="About-Section_Heading">Community</h2>

      <ul class="About-List">
        <li class="About-ListItem">
          <g-link
            href="https://aniken.connpass.com/"
            class="About-ListItem_Link"
          >
            アニメーション研究会
          </g-link>
        </li>

        <li class="About-ListItem">
          <g-link href="https://ffs.connpass.com/" class="About-ListItem_Link">
            Frontend-Fukuoka.spec
          </g-link>
        </li>

        <li class="About-ListItem">
          <g-link
            href="https://v-fukuoka.connpass.com/"
            class="About-ListItem_Link"
          >
            v-fukuoka
          </g-link>
        </li>

        <li class="About-ListItem">
          <g-link
            href="https://fec-fukuoka.connpass.com/"
            class="About-ListItem_Link"
          >
            フロントエンドカンファレンス福岡
          </g-link>
        </li>
      </ul>
    </section>

    <section class="About-Section">
      <h2 class="About-Section_Heading">Podcast</h2>

      <ul class="About-List">
        <li class="About-ListItem">
          <g-link
            href="https://spotifyanchor-web.app.link/e/LhoxDoIJKyb"
            class="About-ListItem_Link"
          >
            くつぬぎ、くつろぎ
          </g-link>
        </li>

        <li class="About-ListItem">
          <g-link href="https://anchor.fm/hrbrain" class="About-ListItem_Link">
            HRBrain ノウナイラジオ
          </g-link>
        </li>

        <li class="About-ListItem">
          <g-link
            href="https://anchor.fm/fukuokazatsudanradio"
            class="About-ListItem_Link"
          >
            ちょっとお隣よかですか？ - 福岡IT系雑談ラジオ
          </g-link>
        </li>
      </ul>
    </section>
  </Layout>
</template>

<script>
  import Layout from "~/layouts/Default.vue";
  import PageHeading from "~/ui/atoms/PageHeading.vue";
  import { meta } from "~/shared/meta";

  export default {
    components: {
      Layout,
      PageHeading,
    },

    metaInfo() {
      return meta({
        title: "About",
        url: `${process.env.GRIDSOME_APP_BASE_URL}/about`,
        description: `著者紹介ページです。`,
      });
    },
  };
</script>

<style lang="scss" scoped>
  .About {
    &-Section {
      & + & {
        margin-top: 12px;
      }
      &_Heading {
        font-size: 2rem;
        font-weight: bold;
      }
    }

    &-ListItem {
      font-weight: bold;
    }
  }
</style>
