export default {
  preview: {
    select: {
      title: "title",
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
      title: "Image",
      name: "image",
      type: "imageWithAlt",
    },
    {
      name: "link",
      type: "link",
    },
  ],
};
