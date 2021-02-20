import { SITE_NAME } from "./const";

/**
 * @typedef {"website" | "article"} OGType
 */

/**
 *
 * @param {{title: string, url: string, description: string, image: string, type: OGType}}
 */
export const meta = ({
  title,
  url,
  description,
  image = `${process.env.GRIDSOME_APP_BASE_URL}/ogp.png`,
  type = "article",
}) => ({
  title,
  meta: [
    /**
     * meta
     */
    {
      name: "description",
      content: description.slice(0, 100),
    },
    /**
     * ogp
     */
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
      key: "og:image:alt",
      property: "og:image:alt",
      content: "",
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
    /**
     * twitter
     */
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
