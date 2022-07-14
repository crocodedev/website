export default {
  preview: {
    select: {
      title: "technologiesItemTitle",
    },
  },

  title: "Technologies item",
  name: "technologiesItem",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Technology image",
      name: "technologyImage",
      type: "imageWithAlt",
    },
    {
      name: "link",
      type: "link",
    },
  ],
};
