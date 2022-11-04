export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "Hero Project",
  name: "heroProject",
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
      initialValue: "HeroProject",
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
      title: "Project image",
      name: "projectImage",
      type: "array",

      of: [
        {
          type: "imageWithAlt",
        },
      ],
    },
    {
      title: "Project features",
      name: "projectFeatures",
      type: "array",

      of: [
        {
          type: "heroProjectInfo",
        },
      ],
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
