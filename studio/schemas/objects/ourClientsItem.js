export default {
  preview: {
    select: {
      title: "title",
    },
  },

  title: "Our clients item",
  name: "ourClientsItem",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Client photo",
      name: "clientPhoto",
      type: "imageWithAlt",
    },
    {
      name: "link",
      type: "link",
    },
  ],
};
