export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "Related articles",
  name: "relatedArticles",
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
      initialValue: "RelatedArticles",
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
      title: "Items",
      name: "items",
      type: "array",

      of: [
        {
          type: "reference",
          to: [{ type: "articlesItem" }],
        },
      ],
    },
    {
      name: "link",
      type: "link",
    },
  ],
};
