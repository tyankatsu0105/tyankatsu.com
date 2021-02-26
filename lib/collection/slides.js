const speakerdeckScraper = require("@arayaryoma/speakerdeck-scraper");

module.exports = async () => {
  const speakerDeck = await speakerdeckScraper.fetchDecks({
    username: "tyankatsu",
  });

  return speakerDeck.map((deck) => ({
    title: deck.title,
    url: deck.url,
  }));
};
