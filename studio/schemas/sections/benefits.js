export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "Benefits",
  name: "benefits",
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
      title: "Component",
      name: "component",
      type: "string",
      initialValue: "Benefits",
      readOnly: true,
      hidden: true,
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
      title: "Left column items",
      name: "itemsLeft",
      type: "array",

      of: [
        {
          type: "leftColumnItem",
        },
      ],
    },
    {
      title: "Right column items",
      name: "itemsRight",
      type: "array",

      of: [
        {
          type: "rightColumnItem",
        },
      ],
    },
  ],
};
