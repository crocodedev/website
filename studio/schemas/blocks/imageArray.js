export default {
  preview: {
    select: {
      title: "title",
    },
  },

  title: "Image array",
  name: "imageArray",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      type: "imageWithAlt",
    },
  ],
};
