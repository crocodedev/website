export default {
  title: "Redirect",
  name: "redirect",
  type: "document",
  fields: [
    {
      title: "From Path",
      name: "fromPath",
      type: "string",
    },
    {
      title: "To Path",
      name: "toPath",
      type: "string",
    },
    {
      title: "Status Code",
      name: "statusCode",
      type: "number",
    },
    {
      title: "Force",
      name: "force",
      type: "boolean",
    },
    {
      title: "Ignore Case",
      name: "ignoreCase",
      type: "boolean",
    },
    {
      title: "Redirect In Browser",
      name: "redirectInBrowser",
      type: "boolean",
    },
  ],
};
