import S from "@sanity/desk-tool/structure-builder";
import { MasterDetailIcon } from "@sanity/icons";

import { deLocale } from "./blogCategory/deLocale";
import { enLocale } from "./blogCategory/enLocale";
import { plLocale } from "./blogCategory/plLocale";

export const blogCategory = S.listItem()
  .icon(MasterDetailIcon)
  .title("Blog categories")
  .child(S.list().title("Locales").items([enLocale, plLocale, deLocale]));
