import bgColors from "../objects/bgColors";

export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "List",
  name: "list",
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
      options: {
        list: [
          { title: "List One", value: "ListOne" },
          { title: "List Two", value: "ListTwo" },
          { title: "List Three", value: "ListThree" },
          { title: "List Four", value: "ListFour" },
          { title: "List Five", value: "ListFive" },
          { title: "List Six", value: "ListSix" },
          { title: "List Seven", value: "ListSeven" },
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
      title: "Text",
      name: "text",
      type: "text",
    },
    {
      title: "Items",
      name: "items",
      type: "array",

      of: [
        {
          type: "listItem",
        },
      ],
    },
    {
      title: "Background color",
      name: "bgColor",
      type: "string",
      options: {
        list: [...bgColors],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
