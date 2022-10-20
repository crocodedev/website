import { CogIcon } from "@sanity/icons";

export default {
  preview: {
    select: {
      title: "name",
    },
  },

  title: "Settings",
  name: "settings",
  type: "document",
  icon: CogIcon,
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: [/*"create", 'delete',*/ "update", "publish"],
  fields: [
    {
      title: "Site name",
      name: "name",
      type: "string",
    },
    {
      title: "Site url",
      name: "siteUrl",
      type: "string",
    },
    {
      title: "Recaptcha key",
      name: "recaptchaKey",
      type: "string",
    },
    {
      title: "Default locale",
      name: "defaultLocale",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Polish", value: "pl" },
          { title: "Deutch", value: "de" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Locales",
      name: "locales",
      type: "array",

      of: [
        {
          type: "locale",
        },
      ],
    },
    {
      title: "Cookies",
      name: "cookies",
      type: "cookies",
    },
  ],
};
