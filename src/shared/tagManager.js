/* eslint-disable */

export const tagManager = () => {
  if (process.env.NODE_ENV === "production") {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src =
        "https://www.googletagmanager.com/gtm.js?id=" +
        i +
        dl +
        "&gtm_auth=fX__YPxnkT_M0Lvh8lj5EA&gtm_preview=env-5&gtm_cookies_win=x";
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-T3MJNJH");
  } else if (process.env.NODE_ENV === "develop") {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src =
        "https://www.googletagmanager.com/gtm.js?id=" +
        i +
        dl +
        "&gtm_auth=uaOJNKXxoyr5WGB7cQ6g7g&gtm_preview=env-6&gtm_cookies_win=x";
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-T3MJNJH");
  }
};
