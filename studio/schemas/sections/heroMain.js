import fadeColors from "../objects/fadeColors";

export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "Hero Main",
  name: "heroMain",
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
      initialValue: "HeroMain",
      readOnly: true,
      hidden: true,
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Background image",
      name: "bgImage",
      type: "imageWithAlt",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Logo image",
      name: "logoImage",
      type: "imageWithAlt",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      type: "link",
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
      title: "Items",
      name: "items",
      type: "array",

      of: [
        {
          type: "heroMainItem",
        },
      ],
    },
  ],
};
