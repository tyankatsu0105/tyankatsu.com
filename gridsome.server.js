const slides = require("./lib/collection/slides");

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    const slideCollection = addCollection({
      typeName: "Slide",
    });
    const decks = await slides();

    for (const deck of decks) {
      slideCollection.addNode({
        title: deck.title,
        url: deck.url,
      });
    }

    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
