/**
 *
 * @param {HTMLAnchorElement} element
 */
export const toExternalLink = (element) => {
  const href = element.getAttribute("href");
  if (isInternalLink(href)) return;

  element.setAttribute("target", "_blank");
  element.setAttribute("rel", "noopener noreferrer");
};

/**
 *
 * @param {string} href
 */
const isInternalLink = (href) =>
  href.startsWith(process.env.GRIDSOME_APP_BASE_URL);
