export default {
  preview: {
    select: {
      title: "ourClientsTitle",
    },
  },

  title: "Our clients item",
  name: "ourClientsItem",
  type: "object",
  fields: [
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
