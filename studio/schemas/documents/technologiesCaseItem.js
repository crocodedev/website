import { MasterDetailIcon } from "@sanity/icons";

export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  i18n: {
    fieldNames: {
      lang: "i18n_lang",
      baseReference: "i18n_base",
      references: "i18n_refs",
    },
  },

  title: "Technology item",
  name: "technologiesCaseItem",
  type: "document",
  icon: MasterDetailIcon,
  fields: [
    {
      name: "i18n_lang",
      type: "string",
      hidden: true,
    },
    {
      name: "i18n_base",
      type: "reference",
      to: [{ type: "technologiesCaseItem" }],
      hidden: true,
    },
    {
      name: "i18n_refs",
      type: "array",
      hidden: true,
      of: [
        {
          type: "reference",
          to: [{ type: "technologiesCaseItem" }],
        },
      ],
    },
    {
      title: "Section Title",
      name: "sectionTitle",
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
      title: "Page sections",
      name: "content",
      type: "pageContent",
    },
    {
      name: "seo",
      type: "seo",
    },
  ],
};
