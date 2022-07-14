export default {
  preview: {
    select: {
      title: "devItemTitle",
    },
  },

  title: "Articles item",
  name: "articlesItem",
  type: "document",
  i18n: true,
  fields: [
    {
      title: "Articles item image",
      name: "articlesItemImage",
      type: "imageWithAlt",
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Text",
      name: "text",
      type: "text",
    },
    {
      title: "Date",
      name: "date",
      type: "string",
    },
  ],
};
