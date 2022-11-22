export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "404 page",
  name: "notFound",
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
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Component",
      name: "component",
      type: "string",
      initialValue: "NotFound",
      readOnly: true,
      hidden: true,
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Image",
      name: "image",
      type: "imageWithAlt",
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "text",
    },
    {
      title: "Text",
      name: "text",
      type: "text",
    },
    {
      name: "link",
      type: "link",
    },
  ],
};
