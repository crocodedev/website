import {
  MasterDetailIcon
} from "@sanity/icons";

export default {
  preview: {
    select: {
      title: "sectionTitle",
    },
  },

  name: "technologiesCaseItem",
  type: "document",
  title: "Technologies Case Item",
  icon: MasterDetailIcon,
  i18n: {
    fieldNames: {
      lang: "i18n_lang",
      baseReference: "i18n_base",
      references: "i18n_refs",
    },
  },

  fields: [{
      name: "i18n_lang",
      type: "string",
      hidden: true,
    },
    {
      name: "i18n_base",
      type: "reference",
      to: [{
        type: "technologiesCaseItem"
      }],
      hidden: true,
    },
    {
      name: "i18n_refs",
      type: "array",
      hidden: true,
      of: [{
        type: "reference",
        to: [{
          type: "technologiesCaseItem"
        }],
      }, ],
    },
    {
      name: "sectionTitle",
      title: "Section title",
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
      name: "content",
      title: "Page sections",
      type: "pageContent",
    },
    {
      name: "seo",
      type: "seo",
    },
  ],
};
