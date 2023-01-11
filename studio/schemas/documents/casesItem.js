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

  title: "Cases item",
  name: "casesItem",
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
      to: [{ type: "casesItem" }],
      hidden: true,
    },
    {
      name: "i18n_refs",
      type: "array",
      hidden: true,
      of: [
        {
          type: "reference",
          to: [{ type: "casesItem" }],
        },
      ],
    },
    {
      title: "Section Title",
      name: "sectionTitle",
      type: "string",
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
      title: "Technologies",
      name: "technologies",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Country",
      name: "country",
      type: "reference",
      to: [{ type: "casesCountry" }],
    },
    {
      title: "Text",
      name: "text",
      type: "text",
    },
    {
      title: "Marker",
      name: "marker",
      type: "string",
    },
    {
      name: "link",
      type: "link",
    },
    {
      title: "Cover image",
      name: "casesItemImage",
      type: "imageWithAlt",
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

    //  refs for filtration

    /* {
      title: "Technologies",
      name: "technologies",
      type: "array",
      of: [
        {
          title: "Technology",
          name: "item",
          type: "reference",
          to: [{ type: "technologies" }],
        },
      ],
    }, */
  ],
};
