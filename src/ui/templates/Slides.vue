<template>
  <Layout>
    <PageHeading>Slides</PageHeading>

    <ul>
      <EntryList
        v-for="({ node: slide }, index) in slides.edges"
        :key="index"
        :element="'li'"
      >
        <Entry :link="slide.url" :title="slide.title"></Entry>
      </EntryList>
    </ul>
  </Layout>
</template>

<script>
  import Layout from "~/layouts/Default.vue";
  import PageHeading from "~/ui/atoms/PageHeading.vue";
  import EntryList from "~/ui/components/EntryList.vue";
  import Entry from "~/ui/components/Entry.vue";
  export default {
    components: {
      Layout,
      PageHeading,
      EntryList,
      Entry,
    },
    props: {
      slides: {
        type: Object,
        default() {
          return {};
        },
      },
    },
  };
</script>
