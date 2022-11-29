import bgColors from "../objects/bgColors";
import fadeColors from "../objects/fadeColors";

export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "Text One",
  name: "textOne",
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
      initialValue: "TextOne",
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
      title: "Text",
      name: "text",
      type: "text",
    },
    {
      title: "Image",
      name: "image",
      type: "imageWithAlt",
    },
    {
      title: "Image for mobile",
      name: "mobileImage",
      type: "imageWithAlt",
    },
    {
      title: "Image for tablet",
      name: "tabletImage",
      type: "imageWithAlt",
    },
    {
      title: "Image for desktop",
      name: "desktopImage",
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
      title: "Background color",
      name: "bgColor",
      type: "string",
      options: {
        list: [...bgColors],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
