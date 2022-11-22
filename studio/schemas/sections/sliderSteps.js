export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "Slider steps",
  name: "sliderSteps",
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
      initialValue: "SliderSteps",
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
      title: "Items steps",
      name: "itemsSteps",
      type: "array",

      of: [
        {
          type: "textItemSteps",
        },
      ],
    },
  ],
};
