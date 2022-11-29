import bgColors from "../objects/bgColors";

export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "FAQ",
  name: "faq",
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
      initialValue: "FAQ",
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
          type: "faqItem",
        },
      ],
    },
    {
      title: "Background color",
      name: "bgColor",
      type: "string",
      options: {
        color: [...bgColors],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
