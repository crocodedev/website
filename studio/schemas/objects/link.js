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
