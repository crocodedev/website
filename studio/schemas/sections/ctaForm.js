import bgColors from "../objects/bgColors";

export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "CTA Form",
  name: "ctaForm",
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
      initialValue: "CtaForm",
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
      title: "Message placeholder",
      name: "messagePlaceholder",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Background color",
      name: "bgColor",
      type: "string",
      options: {
        color: [...bgColors],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Button text",
      name: "buttonText",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
