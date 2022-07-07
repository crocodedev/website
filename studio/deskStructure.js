import S from "@sanity/desk-tool/structure-builder";
import { sections } from "./desk/sections";

const DOCUMENT_TYPES_IN_STRUCTURE = ["hero", "list"];

export default () => {
  // prettier-ignore
  return (
    S.list()
      .title('Content')
      .items([
        S.divider(),
          sections,
        S.divider(),
        S.divider(),
        // Automatically add new document types to the root pane
        ...S.documentTypeListItems().filter(listItem => !DOCUMENT_TYPES_IN_STRUCTURE.includes(listItem.getId()))
      ])
  )
};
