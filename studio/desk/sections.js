import S from "@sanity/desk-tool/structure-builder";
import { DocumentsIcon } from "@sanity/icons";
import { hero } from "./sections/hero";
import { list } from "./sections/list";

export const sections = S.listItem()
  .title("Sections")
  .icon(DocumentsIcon)
  .child(S.list().title("Sections").items([hero, list]));
