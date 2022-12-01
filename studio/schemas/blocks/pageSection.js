export default {
  title: "Section",
  name: "pageSection",
  type: "reference",
  to: [
    { type: "hero" },
    { type: "heroMain" },
    { type: "heroProject" },
    { type: "list" },
    { type: "textOne" },
    { type: "textTwo" },
    { type: "textThree" },
    { type: "ctaText" },
    { type: "notFound" },
    { type: "benefits" },
    { type: "contacts" },
    { type: "development" },
    { type: "ourTeam" },
    { type: "ctaImage" },
    { type: "faq" },
    { type: "sliderSteps" },
    { type: "ourClients" },
    { type: "reviews" },
    { type: "technologyStack" },
    { type: "caseStudies" },
    { type: "technologies" },
    { type: "footer" },
    { type: "header" },
    { type: "ctaForm" },
    { type: "contactUs" },
    { type: "challenge" },
    { type: "blockText" },
    { type: "relatedArticles" },
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
