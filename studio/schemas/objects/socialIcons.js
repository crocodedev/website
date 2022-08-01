export default {
  preview: {
    select: {
      title: "title",
    },
  },

  title: "Social icons item",
  name: "socialIconsItem",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Icon image",
      name: "iconImage",
      type: "imageWithAlt",
    },
    {
      name: "link",
      type: "link",
    },
  ],
};
