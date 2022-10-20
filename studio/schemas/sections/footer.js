export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "Footer",
  name: "footer",
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
      initialValue: "Footer",
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
      title: "Copyright text",
      name: "copyrightText",
      type: "string",
    },
    {
      title: "Social icons",
      name: "socialIcons",
      type: "array",

      of: [{ type: "socialIconsItem" }],
    },
    {
      title: "Column",
      name: "column",
      type: "array",
      of: [
        {
          type: "columnGroup",
        },
      ],
    },
    {
      title: "Bottom links",
      name: "bottomLinks",
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
