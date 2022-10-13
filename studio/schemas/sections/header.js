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
      title: "Touch Us",
      name: "touchUsModal",
      type: "touchUs",
    },
  ],
};
