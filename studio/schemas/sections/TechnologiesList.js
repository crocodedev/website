export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "Technologies List",
  name: "technologiesList",
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
      initialValue: "TechnologiesList",
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
      title: "ListTitle",
      name: "listtitle",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Items",
      name: "items",
      type: "array",

      of: [
        {
          type: "technologyStackItem",
        },
      ],
    },
  ],
};
