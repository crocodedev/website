export default {
  preview: {
    select: {
      title: "title",
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
      title: "Image With Alt Text",
      name: "imageWithAltText",
      type: "imageWithAlt",
    },
    {
      name: "link",
      type: "link",
    },
  ],
};
