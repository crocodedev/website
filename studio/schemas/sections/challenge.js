export default {
  preview: {
    select: {
      title: "sectionTitle",
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
      validation: (Rule) => Rule.required().max(3),

      of: [
        {
          type: "modalWindow",
        },
      ],
    },
    {
      title: "Images item",
      name: "imagesItem",
      type: "imageWithAlt",
    },
  ],
};
