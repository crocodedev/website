import S from "@sanity/desk-tool/structure-builder";
import { DocumentIcon } from "@sanity/icons";

import { deLocale } from "./pages/deLocale";
import { enLocale } from "./pages/enLocale";
import { plLocale } from "./pages/plLocale";

export const pages = S.listItem()
  .title("Pages")
  .icon(DocumentIcon)
  .child(S.list().title("Locales").items([enLocale, plLocale, deLocale]));
