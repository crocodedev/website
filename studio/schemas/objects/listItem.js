export default {
  preview: {
    select: {
      title: "listTitle",
    },
  },

  title: "ListItem",
  name: "listItem",
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
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      name: "link",
      type: "link",
    },
  ],
};
