import S from "@sanity/desk-tool/structure-builder";
import { MasterDetailIcon } from "@sanity/icons";

import { deLocale } from "./articles/deLocale";
import { enLocale } from "./articles/enLocale";
import { plLocale } from "./articles/plLocale";

export const articles = S.listItem()
  .icon(MasterDetailIcon)
  .title("Articles")
  .child(S.list().title("Locales").items([enLocale, plLocale, deLocale]));
