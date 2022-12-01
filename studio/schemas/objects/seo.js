export default {
  preview: {
    select: {
      title: "seoTitle",
    },
  },

  title: "Seo",
  name: "seo",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      title: "Title template",
      name: "titleTemplate",
      type: "boolean",
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Keywords",
      name: "keywords",
      type: "text",
      description: "Separate keywords with SPACE",
    },
    {
      title: "Image",
      name: "image",
      type: "imageWithAlt",
    },
    {
      title: "ogtype",
      name: "ogType",
      type: "string",
    },
    {
      title: "twittercard",
      name: "twitterCard",
      type: "string",
      options: {
        list: [
          {
            title: "App",
            value: "app",
          },
          {
            title: "Summary",
            value: "summary",
          },
          {
            title: "Summary large image",
            value: "summary_large_image",
          },
          {
            title: "Player",
            value: "player",
          },
        ],
      },
    },
  ],
};
