import S from "@sanity/desk-tool/structure-builder";
import { DocumentIcon } from "@sanity/icons";

export const redirect = S.listItem()
  .title("Redirects")
  .icon(DocumentIcon)
  .child(S.documentTypeList("redirect"));
