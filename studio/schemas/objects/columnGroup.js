export default {
  preview: {
    select: {
      title: "title",
    },
  },

  title: "Column group",
  name: "columnGroup",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Link",
      name: "link",
      type: "link",
    },
    {
      title: "Items",
      name: "items",
      type: "array",
      of: [{ type: "columnLinksItem" }],
    },
  ],
};
