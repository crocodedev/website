import S from "@sanity/desk-tool/structure-builder";
import { hero } from "./plLocale/hero";
import { list } from "./plLocale/list";

export const plLocale = S.listItem()
  .title("PL Sections")
  .child(S.list().title("PL Sections").items([hero, list]));
