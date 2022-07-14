export default {
  preview: {
    select: {
      title: "socialIcons",
    },
  },

  title: "Social icons item",
  name: "socialIconsItem",
  type: "object",
  fields: [
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
