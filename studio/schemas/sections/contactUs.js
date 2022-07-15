export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "Contact us",
  name: "contactUs",
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
      initialValue: "ContactUs",
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
      title: "Name text",
      name: "nameText",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Name placeholder",
      name: "namePlaceholder",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Email text",
      name: "emailText",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Email placeholder",
      name: "emailPlaceholder",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Phone text",
      name: "phoneText",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Message text",
      name: "messageText",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Message placeholder",
      name: "messagePlaceholder",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Background image",
      name: "backgroundImage",
      type: "imageWithAlt",
    },
    {
      title: "Button text",
      name: "buttonText",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Agreement text",
      name: "agreementText",
      type: "array",

      of: [
        {
          type: "textItem",
        },
      ],
    },
  ],
};
