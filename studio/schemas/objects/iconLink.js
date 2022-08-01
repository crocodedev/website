export default {
  preview: {
    select: {
      title: "title",
    },
  },

  title: "Icon link",
  name: "iconLink",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "link",
      type: "link",
    },
    {
      title: "Icon",
      name: "icon",
      type: "imageWithAlt",
    },
  ],
};
