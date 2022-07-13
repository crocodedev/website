export default {
  preview: {
    select: {
      title: "devItemTitle",
    },
  },

  title: "Development item",
  name: "devItem",
  type: "object",
  fields: [
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
      name: "link",
      type: "link",
    },
  ],
};
