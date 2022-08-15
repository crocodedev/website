export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "Contacts",
  name: "contacts",
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
      initialValue: "Contacts",
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
      title: "Image",
      name: "image",
      type: "imageWithAlt",
    },
    {
      title: "Pop up text",
      name: "popUpText",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Style link",
      name: "styleLink",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Access token",
      name: "accessToken",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Contact items",
      name: "contactItems",
      type: "array",

      of: [
        {
          type: "contactItem",
        },
      ],
    },
  ],
};
