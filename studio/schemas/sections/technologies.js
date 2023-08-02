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
      options: {
        list: [
          { title: "Technologies", value: "Technologies" },
          { title: "Technologies Grid", value: "TechnologiesGrid" },
        ],
      },
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
      title: "Categories",
      name: "categories",
      type: "array",
      of: [
        {
          type: "technologyCategory",
        },
      ],
    },
    {
      title: "Breadcrumbs",
      name: "breadcrumbs",
      type: "array",

      of: [
        {
          name: "link",
          type: "link",
        },
      ],
    },
  ],
};
