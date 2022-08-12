import S from "@sanity/desk-tool/structure-builder";
import { DocumentsIcon } from "@sanity/icons";
import { deLocale } from "./sections/deLocale";
import { enLocale } from "./sections/enLocale";
import { plLocale } from "./sections/plLocale";

export const sections = S.listItem()
  .title("Sections")
  .icon(DocumentsIcon)
  .child(S.list().title("Sections by locale").items([enLocale, plLocale, deLocale]));
