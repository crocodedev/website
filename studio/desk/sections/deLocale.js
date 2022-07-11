import S from "@sanity/desk-tool/structure-builder";
import { hero } from "./deLocale/hero";
import { list } from "./deLocale/list";
import { textOne } from "./deLocale/textOne";
import { textTwo } from "./deLocale/textTwo";
import { textThree } from "./deLocale/textThree";
import { ctaText } from "./deLocale/ctaText";
import { notFound } from "./deLocale/notFound";
import { benefits } from "./deLocale/benefits";

export const deLocale = S.listItem()
  .title("DE Sections")
  .child(
    S.list()
      .title("DE Sections")
      .items([hero, list, textOne, textTwo, textThree, ctaText, notFound, benefits]),
  );
