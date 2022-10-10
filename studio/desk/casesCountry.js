import S from "@sanity/desk-tool/structure-builder";
import { CopyIcon } from "@sanity/icons";

import { deLocale } from "./casesCountry/deLocale";
import { enLocale } from "./casesCountry/enLocale";
import { plLocale } from "./casesCountry/plLocale";

export const casesCountry = S.listItem()
  .icon(CopyIcon)
  .title("Cases country")
  .child(S.list().title("Locales").items([enLocale, plLocale, deLocale]));
