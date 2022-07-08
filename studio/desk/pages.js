import S from "@sanity/desk-tool/structure-builder";
import { deLocale } from "./pages/deLocale";
import { enLocale } from "./pages/enLocale";
import { plLocale } from "./pages/plLocale";

export const pages = S.listItem()
  .title("Pages")
  .child(S.list().title("Locales").items([enLocale, plLocale, deLocale]));
