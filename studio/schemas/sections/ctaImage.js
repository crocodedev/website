export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "CTA Image",
  name: "ctaImage",
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
      initialValue: "CtaImage",
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
      name: "link",
      type: "link",
    },
    {
      title: "Background color",
      name: "bgColor",
      type: "string",
      options: {
        color: [
          { title: "dark", value: "dark" },
          { title: "light", value: "light" },
          { title: "paper", value: "paper" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
