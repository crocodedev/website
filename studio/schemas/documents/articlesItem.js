import { MasterDetailIcon } from "@sanity/icons";

export default {
  preview: {
    select: {
      title: "title",
    },
  },

  name: "articlesItem",
  type: "document",
  title: "Articles item",
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
      to: [{ type: "articlesItem" }],
      hidden: true,
    },
    {
      name: "i18n_refs",
      type: "array",
      hidden: true,
      of: [
        {
          type: "reference",
          to: [{ type: "articlesItem" }],
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
      title: "Category reference",
      name: "categoryReference",
      type: "reference",
      to: [{ type: "blogCategory" }],
    },
    {
      title: "Position",
      name: "position",
      type: "string",
    },
    {
      title: "Component",
      name: "component",
      type: "string",
      initialValue: "articlesItem",
      readOnly: true,
      hidden: true,
      validation: (Rule) => Rule.required(),
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
      title: "Sections",
      name: "sections",
      type: "blogContent",
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }, { type: "imageWithAlt" }],
    },
    {
      title: "Cover image",
      name: "image",
      type: "imageWithAlt",
    },
    {
      name: "seo",
      type: "seo",
    },
  ],
};
