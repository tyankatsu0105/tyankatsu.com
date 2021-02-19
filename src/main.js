// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

import "@/styles/core/fonts.scss";
import "@/styles/core/reset.scss";
import "@/styles/core/base.scss";

import store from "./store";

export default function (Vue, { router, head, isClient, appOptions }) {
  appOptions.store = store;
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
