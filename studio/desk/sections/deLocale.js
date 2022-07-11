import S from "@sanity/desk-tool/structure-builder";
import { hero } from "./deLocale/hero";
import { list } from "./deLocale/list";
import { textOne } from "./deLocale/textOne";

export const deLocale = S.listItem()
  .title("DE Sections")
  .child(S.list().title("DE Sections").items([hero, list, textOne]));
