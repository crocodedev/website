export default {
  preview: {
    select: {
      title: "title",
    },
  },

  title: "Content item",
  name: "contentItem",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Component",
      name: "component",
      type: "string",
      options: {
        list: [
          { title: "Text", value: "Text" },
          { title: "Image", value: "Image" },
        ],
      },
    },
    {
      title: "Text",
      name: "text",
      type: "array",
      of: [
        {
          type: "text",
        },
      ],
      hidden: (e) => !(e.parent.component === "Text"),
    },
    {
      title: "Content image",
      name: "contentImage",
      type: "imageWithAlt",
      hidden: (e) => !(e.parent.component === "Image"),
    },
  ],
};
