export default {
  title: "Internal",
  name: "internal",
  description: "use this to link between pages",
  type: "object",
  hidden: ({ parent, value }) => !value && parent?.external,
  fields: [
    {
      title: "Label",
      name: "label",
      type: "string",
      description: "display label will replace reference title if set",
    },
    {
      title: "Reference",
      name: "reference",
      type: "reference",
      to: [{ type: "page" }, { type: "blogCategory" }, { type: "casesCountry" }],
      options: {
        disableNew: true,
      },
    },
  ],
};
