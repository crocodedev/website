export default {
  preview: {
    select: {
      title: "title",
    },
  },

  title: "Technology category",
  name: "technologyCategory",
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
      title: "Technologies list",
      name: "technologiesList",
      type: "technologiesArray",
    },
  ],
};
