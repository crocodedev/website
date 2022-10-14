export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  title: "Policy",
  name: "policy",
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
      initialValue: "Policy",
      readOnly: true,
      hidden: true,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "policyCookies",
      type: "policyCookies",
    },
    {
      name: "policyPrivacy",
      type: "policyPrivacy",
    },
  ],
};
