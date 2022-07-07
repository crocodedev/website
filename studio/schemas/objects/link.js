import { LinkIcon } from "@sanity/icons";
import { boolean } from "yup";

export default {
  preview: {
    select: {
      internalLabel: "internal.label",
      internalTitle: "internal.reference.title",
      externalLabel: "external.label",
      externalHref: "external.text",
    },
    prepare({ internalLabel, internalTitle, externalLabel, externalHref }) {
      return {
        title: internalLabel ?? internalTitle ?? externalLabel,
        subtitle: internalTitle ?? externalHref,
      };
    },
  },

  title: "Link",
  name: "link",
  type: "object",
  icon: LinkIcon,
  fields: [
    {
      title: "Internal",
      name: "internal",
      description: "use this to link between pages",
      type: "object",
      hidden: ({ parent, value }) => !value && parent?.external,
      fields: [
        {
          title: "Label",
          name: "label",
          type: "string",
          description: "display label will replace reference title if set",
        },
        {
          title: "Reference",
          name: "reference",
          type: "reference",
          to: [{ type: "page" }],
          options: {
            disableNew: true,
          },
        },
      ],
    },
    {
      title: "External",
      name: "external",
      description: "use this to link to an external website",
      type: "object",
      hidden: ({ parent, value }) => !value && parent?.internal,
      fields: [
        {
          title: "Label",
          name: "label",
          type: "string",
        },
        {
          title: "URL",
          name: "href",
          type: "url",
          validation: (Rule) => Rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
        },
        {
          title: "Open in new tab",
          name: "blank",
          type: "boolean",
        },
      ],
    },
  ],
};
