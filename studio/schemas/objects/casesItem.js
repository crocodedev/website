export default {
  preview: {
    select: {
      title: "title",
    },
  },

  title: "Cases item",
  name: "casesItem",
  type: "document",
  i18n: true,
  fields: [
    {
      title: "Cases item image",
      name: "casesItemImage",
      type: "imageWithAlt",
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Text",
      name: "text",
      type: "text",
    },
    {
      title: "Marker",
      name: "marker",
      type: "string",
    },
    {
      name: "link",
      type: "link",
    },
    /* {
      title: "Technologies",
      name: "technologies",
      type: "array",
      of: [
        {
          title: "Technology",
          name: "item",
          type: "reference",
          to: [{ type: "technologies" }],
        },
      ],
    },
    {
      title: "Countries",
      name: "countries",
      type: "array",
      of: [
        {
          title: "Country",
          name: "item",
          type: "reference",
          to: [{ type: "countries" }],
        },
      ],
    }, */
  ],
};
