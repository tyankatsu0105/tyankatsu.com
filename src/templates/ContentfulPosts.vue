<template>
	<Layout
		disable-animation
		class="ContentfulPosts"
	>
		<PageHeading>{{ $page.post.title }}</PageHeading>

		<VueMarkdown
			id="contents"
			:source="$page.post.contents"
			class="ContentfulPosts-Contents"
		/>
	</Layout>
</template>

<script>
  import VueMarkdown from "vue-markdown";
  import Layout from "~/layouts/Default.vue";
  import PageHeading from "~/ui/atoms/PageHeading.vue";
  import * as Shared from "~/shared";

  export default {
    components: {
      VueMarkdown,
      Layout,
      PageHeading,
    },

    metaInfo() {
      return Shared.Meta.meta({
        title: this.$page.post.title,
        url: `${process.env.GRIDSOME_APP_BASE_URL}${this.$page.post.path}`,
        description: this.$page.post.contents,
        image: `https://tyankatsu-com-og-image.vercel.app/${this.$page.post.title}.png`,
      });
    },

    async mounted() {
      const highlighter = await shiki.getHighlighter({
        theme: Shared.Shiki.theme["monokai"],
      });
      const contentsElement = document.getElementById("contents");

      document.querySelectorAll("code").forEach(async (element) => {
        if (element.parentNode.tagName !== "PRE") {
          /**
           * codeタグにクラスを付与する
           */
          element.classList.add("code");
          return;
        }
        const wrapCodeElement = document.createElement("div");
        wrapCodeElement.classList.add("wrapCode");

        const highlightCode = await this.getHighlightCode(element, highlighter);
        wrapCodeElement.innerHTML = highlightCode;

        if (this.hasCodeAnnotation(element)) {
          const codeAnnotationElement = document.createElement("p");
          codeAnnotationElement.classList.add("annotation");
          const codeAnnotation = this.getCodeAnnotation(element);
          codeAnnotationElement.textContent = codeAnnotation;
          wrapCodeElement.prepend(codeAnnotationElement);
        }
        contentsElement.insertBefore(wrapCodeElement, element.parentNode);

        element.parentNode.remove();
      });

      document.querySelectorAll("a").forEach((element) => {
        Shared.ToExternalLink.toExternalLink(element);
      });
    },
    methods: {
      /**
       * language-xxのxxを取得
       */
      getLanguageName(element) {
        const hasLanguageName = element.className.startsWith("language-");

        return hasLanguageName
          ? element.className.match(/^language-([a-z]+)/)[1]
          : "";
      },

      /**
       * <code> のクラス名の:以降に文字列があるか返す
       */
      hasCodeAnnotation(element) {
        return /^language-[a-z]+:.*/.test(element.className);
      },

      /**
       * language-xx:yyのyyを取得
       */
      getCodeAnnotation(element) {
        return element.className.match(/^language-[a-z]+:(.*)/)[1];
      },

      /**
       * shikiでhighlightをつける
       */
      async getHighlightCode(element, highlighter) {
        const code = element.innerText;
        return highlighter.codeToHtml(code, this.getLanguageName(element));
      },
    },
  };
</script>

<page-query>
  query Post($path: String!) {
    post: contentfulPosts(path: $path) {
      id
      contents
      title
      date(format: "YYYY.MM.DD", locale: "ja")
      path
    }
  }
</page-query>

<style lang="scss">
  .ContentfulPosts {
    &-Contents {
      font-family: $font-family-contents;
      // ==============================================
      // Base
      // ==============================================
      > * {
        margin-top: 10px;
        line-height: 1.8;
      }
      img {
        margin-top: 10px;
      }
      a,
      cite {
        display: inline;
      }
      a {
        text-decoration: underline;
      }
      // ==============================================
      // headings
      // ==============================================
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 40px 0 20px;
        font-weight: bold;
      }
      h2 {
        padding-bottom: 3px;
        font-size: 2rem;
        border-bottom: 3px solid lighten($color-accent, 20%);
      }
      h3 {
        padding-left: 10px;
        font-size: 1.6rem;
        border-left: 5px solid lighten($color-accent, 20%);
        @include mq-xs {
          font-size: 1.2rem;
        }
      }
      h4 {
        font-size: 1.4rem;
        @include mq-xs {
          font-size: 1.1rem;
        }
      }
      h5 {
        font-size: 1.1rem;
      }
      h6 {
        font-size: 1rem;
      }
      // ==============================================
      // list
      // ==============================================
      ul {
        list-style-type: disc;
      }

      ol {
        list-style-type: decimal;
      }
      ul {
        list-style-position: inside;
      }
      ol {
        list-style-position: inside;
      }
      li {
        padding-left: 1em;
        text-indent: -1em;
      }
      // ==============================================
      // table
      // ==============================================
      table {
        white-space: nowrap;
        table-layout: fixed;
        border-collapse: collapse;
      }
      th,
      td {
        padding: 4px 8px;
        border: 1px solid #ccc;
      }
      th {
        font-weight: bold;
      }
      tr:nth-child(even) {
        background-color: darken(#ccc, 50%);
      }
      .wrapTable {
        width: 100%;
        overflow: scroll;
      }
      // ==============================================
      // blockquote
      // ==============================================
      blockquote {
        padding: 12px;
        font-size: 0.9rem;
        line-height: 1.4;
        background-color: #3a424e;
        border-radius: 5px;
        box-shadow: $box-shadow-default;
        p::before {
          display: block;
          margin-bottom: 5px;
          content: "--Note--";
        }
      }
      // ==============================================
      // hr
      // ==============================================
      hr {
        margin: 32px 0;
      }
      // ==============================================
      // code
      // ==============================================
      .code {
        display: inline;
        padding: 2px 8px;
        margin: 0 4px;
        word-break: break-all;
        background-color: #000;
        border-radius: 4px;
      }
      .wrapCode {
        position: relative;
        .shiki {
          padding: 1em;
          overflow-x: scroll;
        }
        .annotation {
          position: absolute;
          top: 0;
          left: 0;
          padding: 0.3em 0.5em;
          margin: 0;
          background-color: #333;
          border-radius: 4px 0;

          & + .shiki {
            padding: 3em 1em 1em;
          }
        }
      }

      // ==============================================
      // Iframely
      // ==============================================
      .iframely-embed {
        width: 600px;
        transition: $tst-default;

        @include mq-xs {
          width: 100%;
        }
        &:hover {
          transform: translateY(-5px);
        }
      }
    }
  }
</style>
