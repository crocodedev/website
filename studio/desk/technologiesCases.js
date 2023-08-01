import S from "@sanity/desk-tool/structure-builder";
import { CopyIcon } from "@sanity/icons";

import { deLocale } from "./technologiesCases/deLocale";
import { enLocale } from "./technologiesCases/enLocale";
import { plLocale } from "./technologiesCases/plLocale";

export const technologiesCases = S.listItem()
  .icon(CopyIcon)
  .title("Technologies Cases")
  .child(S.list().title("Locales").items([enLocale, plLocale, deLocale]));
