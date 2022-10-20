export default {
  preview: {
    select: {
      title: "title",
    },
  },

  title: "Feature container",
  name: "projectInfo",
  type: "object",
  fields: [
    {
      title: "Feature image",
      name: "featureImage",
      type: "imageWithAlt",
    },
    {
      title: "Project Feature",
      name: "projectFeature",
      type: "projectFeature",
    },
  ],
};
