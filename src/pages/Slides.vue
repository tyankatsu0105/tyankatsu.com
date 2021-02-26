<template>
  <Slides :slides="$page.allSlide" />
</template>

<script>
  import Slides from "~/ui/templates/Slides.vue";
  import * as Shared from "~/shared";

  export default {
    components: {
      Slides,
    },

    metaInfo() {
      return Shared.Meta.meta({
        title: "Slides",
        url: `${process.env.GRIDSOME_APP_BASE_URL}/slides`,
        description: `スライド一覧ページです。`,
        type: "website",
      });
    },
  };
</script>

<page-query>
  query Slide {
    allSlide {
      edges {
        node {
          id
          title
          url
        }
      }
    }
  }
</page-query>
