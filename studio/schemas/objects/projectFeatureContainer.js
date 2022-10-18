export default {
  preview: {
    select: {
      title: "title",
    },
  },

  title: "Project feature container",
  name: "projectFeatureContainer",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "projectFeatureInner",
      type: "projectFeatureInner",
    },
  ],
};
