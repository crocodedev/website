export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "Cases item",
  name: "casesItem",
  type: "document",
  i18n: true,
  fields: [
    {
      title: "Cases item image",
      name: "casesItemImage",
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
      title: "Marker",
      name: "marker",
      type: "string",
    },
  ],
};
