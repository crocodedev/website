import fadeColors from "../objects/fadeColors";

export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "Hero",
  name: "hero",
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
      initialValue: "Hero",
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
      title: "Image With Alt Text",
      name: "imageWithAltText",
      type: "imageWithAlt",
    },
    {
      title: "Fade color",
      name: "fadeColor",
      type: "string",
      options: {
        list: [...fadeColors],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Breadcrumbs",
      name: "breadcrumbs",
      type: "array",

      of: [
        {
          name: "link",
          type: "link",
        },
      ],
    },
  ],
};
