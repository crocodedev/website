export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "Text Two",
  name: "textTwo",
  type: "document",
  i18n: true,
  fields: [
    {
      title: "Section Title",
      name: "sectionTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Position",
      name: "position",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "text",
    },
    {
      title: "Text",
      name: "text",
      type: "text",
    },
    {
      title: "Image",
      name: "image",
      type: "imageWithAlt",
    },
    {
      title: "Items",
      name: "items",
      type: "array",

      of: [
        {
          type: "textTwoItem",
        },
      ],
    },
  ],
};
