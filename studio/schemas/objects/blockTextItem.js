export default {
  preview: {
    select: {
      title: "title",
    },
  },

  title: "Paragraph",
  name: "paragraph",
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
      type: "array",
      of: [{ type: "text" }],
    },
    {
      title: "List",
      name: "list",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      title: "Links",
      name: "links",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
