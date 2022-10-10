import { MasterDetailIcon } from "@sanity/icons";

export default {
  name: "casesCountry",
  type: "document",
  title: "Cases Country",
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
      to: [{ type: "casesCountry" }],
      hidden: true,
    },
    {
      name: "i18n_refs",
      type: "array",
      hidden: true,
      of: [
        {
          type: "reference",
          to: [{ type: "casesCountry" }],
        },
      ],
    },
    {
      title: "Section Title",
      name: "sectionTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Position",
      name: "position",
      type: "string",
    },
    {
      title: "Breadcrumbs",
      name: "breadcrumbs",
      type: "array",

      of: [
        {
          name: "link",
          type: "link",
        },
      ],
    },
    {
      title: "Article separator",
      name: "articleSeparator",
      type: "reference",
      to: [
        {
          type: "ctaForm",
        },
      ],
    },
    {
      title: "Number of posts",
      name: "numberOfPosts",
      type: "number",
    },
    {
      title: "Component",
      name: "component",
      type: "string",
      initialValue: "CasesList",
      readOnly: true,
      hidden: true,
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Sections",
      name: "sections",
      type: "blogContent",
    },
    {
      name: "seo",
      type: "seo",
    },
  ],
};
