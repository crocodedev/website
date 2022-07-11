import S from "@sanity/desk-tool/structure-builder";
import { hero } from "./plLocale/hero";
import { list } from "./plLocale/list";
import { textOne } from "./plLocale/textOne";
import { textTwo } from "./plLocale/textTwo";
import { textThree } from "./plLocale/textThree";
import { ctaText } from "./plLocale/ctaText";
import { notFound } from "./plLocale/notFound";
import { benefits } from "./plLocale/benefits";

export const plLocale = S.listItem()
  .title("PL Sections")
  .child(
    S.list()
      .title("PL Sections")
      .items([hero, list, textOne, textTwo, textThree, ctaText, notFound, benefits]),
  );
