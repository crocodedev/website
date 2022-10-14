export default {
  title:"Policy Privacy",
  name: "policyPrivacy",
  type: "object",
  fields: [
    {
      title: "Title Privacy",
      name: "titlePrivacy",
      type: "string",
    },
    {
      name: "policyWith",
      type: "policyWith",
    },
    {
      title: "Policy Text",
      name: "policyText",
      type: "array",

      of: [
        {
          type: "policyText",
        },
      ],
    },
  ],
};
