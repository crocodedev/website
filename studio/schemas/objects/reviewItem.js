export default {
  preview: {
    select: {
      title: "title",
    },
  },

  title: "Review item",
  name: "reviewItem",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Subitle",
      name: "subtitle",
      type: "string",
    },
    {
      title: "Text",
      name: "text",
      type: "text",
    },
    {
      title: "User photo",
      name: "userPhoto",
      type: "imageWithAlt",
    },
    {
      title: "Date",
      name: "date",
      type: "string",
    },
    {
      title: "Rating",
      name: "rating",
      type: "number",
    },
  ],
};
