export default {
  preview: {
    select: {
      title: "title",
    },
  },

  title: "Challenge",
  name: "challenge",
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
      initialValue: "Challenge",
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
      title: "Modal content",
      name: "modalContent",
      type: "array",

      of: [
        {
          title: "Modal text",
          name: "modalText",
          type: "text",
        },
      ],
    },
    {
      title: "Images item",
      name: "imagesItem",
      type: "array",

      of: [
        {
          title: "Image",
          name: "image",
          type: "image",
        },
      ],
    },
  ],
};