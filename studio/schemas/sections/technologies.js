export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "Technologies",
  name: "technologies",
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
      initialValue: "Technologies",
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
      title: "Text",
      name: "text",
      type: "text",
    },
    {
      title: "Technologies titles",
      name: "technologiesTitles",
      type: "array",

      of: [
        {
          title: "Technology title",
          name: "technologyTitle",
          type: "string",
        },
      ],
    },
    {
      title: "Technologies items",
      name: "technologiesItems",
      type: "array",

      of: [
        {
          type: "technologiesItem",
        },
      ],
    },
  ],
};
