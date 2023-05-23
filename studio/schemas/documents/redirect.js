import { MasterDetailIcon } from "@sanity/icons";

export default {
  preview: {
    select: {
      title: "fromPath",
    },
  },

  title: "Redirect",
  name: "redirect",
  type: "document",
  icon: MasterDetailIcon,
  i18n: {
    fieldNames: {
      lang: "i18n_lang",
      baseReference: "i18n_base",
      references: "i18n_refs",
    },
  },
  fields: [
    {
      name: "i18n_lang",
      type: "string",
      hidden: true,
    },
    {
      name: "i18n_base",
      type: "reference",
      to: [{ type: "redirect" }],
      hidden: true,
    },
    {
      name: "i18n_refs",
      type: "array",
      hidden: true,
      of: [
        {
          type: "reference",
          to: [{ type: "redirect" }],
        },
      ],
    },
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
