import S from "@sanity/desk-tool/structure-builder";
import { hero } from "./enLocale/hero";
import { list } from "./enLocale/list";
import { textOne } from "./enLocale/textOne";
export const enLocale = S.listItem()
  .title("EN Sections")
  .child(S.list().title("EN Sections").items([hero, list, textOne]));
