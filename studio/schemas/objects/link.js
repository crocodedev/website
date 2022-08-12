import { LinkIcon } from "@sanity/icons";

export default {
  preview: {
    select: {
      internalLabel: "linkInternal.label",
      internalTitle: "linkInternal.reference.title",
      externalLabel: "linkExternal.label",
      externalHref: "linkExternal.text",
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
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Link Internal",
      name: "linkInternal",
      type: "internal",
    },
    {
      title: "Link External",
      name: "linkExternal",
      type: "external",
    },
  ],
};
