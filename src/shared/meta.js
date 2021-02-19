import { SITE_NAME } from "./const";

/**
 *
 * @param {{title: string, url: string, description: string, image: string, type: string}}
 */
export const meta = ({ title, url, description, image, type }) => ({
  title,
  meta: [
    {
      name: "description",
      content: description.slice(0, 100),
    },
    {
      key: "og:title",
      property: "og:title",
      content: title,
    },
    {
      key: "og:type",
      property: "og:type",
      content: type,
    },
    {
      key: "og:url",
      property: "og:url",
      content: url,
    },
    {
      key: "og:image",
      property: "og:image",
      content: image,
    },
    {
      key: "og:site_name",
      property: "og:site_name",
      content: SITE_NAME,
    },
    {
      key: "og:description",
      property: "og:description",
      content: description.slice(0, 100),
    },
    {
      key: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      key: "twitter:site",
      name: "twitter:site",
      content: "@tyankatsu5",
    },
    {
      key: "twitter:creator",
      name: "twitter:creator",
      content: "tyankatsu",
    },
    {
      key: "twitter:title",
      name: "twitter:title",
      content: title,
    },
    {
      key: "twitter:url",
      name: "twitter:url",
      content: url,
    },
    {
      key: "twitter:description",
      name: "twitter:description",
      content: description.slice(0, 100),
    },
    {
      key: "twitter:image",
      name: "twitter:image",
      content: image,
    },
  ],
});
