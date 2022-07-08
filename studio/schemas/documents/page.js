import { MasterDetailIcon } from "@sanity/icons";

export default {
  name: "page",
  type: "document",
  title: "Page",
  icon: MasterDetailIcon,
  i18n: true,

  fields: [
    {
      name: "title",
      title: "Title",
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
      type: "array",
      title: "Page sections",
      of: [
        {
          name: "section",
          title: "Section",
          type: "reference",
          to: [{ type: "hero" }, { type: "list" }],
        },
      ],
    },
  ],
};
