export default {
  title: "Touch us",
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
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    },
    {
      title: "Your name",
      name: "yourName",
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
};
