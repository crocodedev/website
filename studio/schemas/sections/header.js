export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "Header",
  name: "header",
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
      readOnly: true,
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Component",
      name: "component",
      type: "string",
      initialValue: "Header",
      readOnly: true,
      hidden: true,
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Logo image",
      name: "logoImage",
      type: "imageWithAlt",
    },
    {
      name: "Link",
      type: "link",
    },
    {
      title: "Header links",
      name: "headerLinks",
      type: "headerLinks",
    },
    {
      title: "Header button",
      name: "headerButton",
      type: "link",
    },
    {
      title: "Link with icon",
      name: "linkWithIcon",
      type: "iconLink",
    },
    {
      name: "touchUs",
      type: "object",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "subTitle",
          name: "subTitle",
          type: "string",
        },
        {
          title: "Your name",
          name: "YourName",
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
          title: "Your E-mail",
          name: "yourEmail",
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
          title: "Agreement text",
          name: "agreementText",
          type: "textItem",
        },
        {
          title: "Button text",
          name: "buttonText",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
};
