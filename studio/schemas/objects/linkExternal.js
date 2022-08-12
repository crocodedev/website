export default {
  title: "External",
  name: "external",
  description: "use this to link to an external website",
  type: "object",
  hidden: ({ parent, value }) => !value && parent?.internal,
  fields: [
    {
      title: "Label",
      name: "label",
      type: "string",
    },
    {
      title: "URL",
      name: "href",
      type: "url",
      validation: (Rule) => Rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
    },
    {
      title: "Open in new tab",
      name: "blank",
      type: "boolean",
    },
  ],
};
