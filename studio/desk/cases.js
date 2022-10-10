import S from "@sanity/desk-tool/structure-builder";
import { CopyIcon } from "@sanity/icons";

import { deLocale } from "./cases/deLocale";
import { enLocale } from "./cases/enLocale";
import { plLocale } from "./cases/plLocale";

export const cases = S.listItem()
  .icon(CopyIcon)
  .title("Cases")
  .child(S.list().title("Locales").items([enLocale, plLocale, deLocale]));
