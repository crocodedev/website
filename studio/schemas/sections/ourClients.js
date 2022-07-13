export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "Our clients",
  name: "ourClients",
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
      initialValue: "OurClients",
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
      title: "Items top slider",
      name: "itemsTopSlider",
      type: "array",

      of: [
        {
          type: "ourClientsItem",
        },
      ],
    },
    {
      title: "Items bottom slider",
      name: "itemsBottomSlider",
      type: "array",

      of: [
        {
          type: "ourClientsItem",
        },
      ],
    },
  ],
};
