export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "List",
  name: "list",
  type: "document",
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
    },
    {
      title: "Title",
      name: "title",
      type: "string",
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
  ],
};
