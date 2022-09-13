export default {
  title: "Section",
  name: "blogSections",
  type: "reference",
  to: [{ type: "footer" }, { type: "header" }, { type: "ctaForm" }, { type: "contactUs" }],

  options: {
    filter: ({ document }) => {
      return {
        filter: "__i18n_lang == $baseLanguage",
        params: { baseLanguage: document.i18n_lang },
      };
    },
  },
};
