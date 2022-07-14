export default {
  preview: {
    select: {
      title: "iconLink",
    },
  },

  title: "Icon link",
  name: "iconLink",
  type: "object",
  fields: [
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
