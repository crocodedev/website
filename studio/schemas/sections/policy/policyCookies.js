export default {
  title: "Policy Cookies",
  name: "policyCookies",
  type: "object",
  fields: [
    {
      title: "Title Cookies",
      name: "titleCookies",
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
