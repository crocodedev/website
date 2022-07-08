export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "Hero",
  name: "hero",
  type: "document",
  i18n: true,
  fields: [
    {
      title: "Section Title",
      name: "sectionTitle",
      type: "string",
    },
    {
      title: "Position",
      name: "position",
      type: "number",
    },
    {
      title: "Component",
      name: "component",
      type: "string",
    },
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
      title: "Image",
      name: "image",
      type: "image",
      fields: [
        {
          title: "Caption",
          name: "alt",
          type: "string",
        },
      ],
    },
  ],
};
