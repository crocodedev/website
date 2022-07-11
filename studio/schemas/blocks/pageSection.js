export default {
  title: "Section",
  name: "pageSection",
  type: "reference",
  to: [
    { type: "hero" },
    { type: "list" },
    { type: "textOne" },
    { type: "textTwo" },
    { type: "textThree" },
    { type: "ctaText" },
    { type: "notFound" },
    { type: "benefits" },
  ],
  options: {
    filter: ({ document }) => {
      return {
        filter: "__i18n_lang == $baseLanguage",
        params: { baseLanguage: document.i18n_lang },
      };
    },
  },
};
