export default {
  preview: {
    select: {
      title: "contactItemTitle",
    },
  },

  title: "Contact item",
  name: "contactItem",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Contact icon",
      name: "contactIcon",
      type: "imageWithAlt",
    },
  ],
};
