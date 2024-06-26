import bgColors from "../objects/bgColors";

export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "Text Two",
  name: "textTwo",
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
      initialValue: "TextTwo",
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
      title: "RichTextBlock",
      name: "richTextBlock",
      type: "array",
      of: [
        {
          type: 'block',
        },
       
      ]
    },
    {
      title: "DEPRECATED Text",
      name: "text",
      type: "text",
    },
    {
      title: "Image",
      name: "image",
      type: "imageWithAlt",
    },
    {
      title: "Items",
      name: "items",
      type: "array",

      of: [
        {
          type: "textTwoItem",
        },
      ],
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
