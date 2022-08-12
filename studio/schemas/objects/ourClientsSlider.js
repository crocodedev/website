export default {
  preview: {
    select: {
      title: "title",
    },
  },

  title: "Our clients slider",
  name: "ourClientsSlider",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Clients list",
      name: "clientsList",
      type: "ourClientsArray",
    },
  ],
};
