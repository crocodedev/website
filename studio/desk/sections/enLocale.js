import S from "@sanity/desk-tool/structure-builder";
import { hero } from "./enLocale/hero";
import { list } from "./enLocale/list";
import { textOne } from "./enLocale/textOne";
import { textTwo } from "./enLocale/textTwo";
import { textThree } from "./enLocale/textThree";
import { ctaText } from "./enLocale/ctaText";
import { notFound } from "./enLocale/notFound";
import { benefits } from "./enLocale/benefits";
import { contacts } from "./enLocale/contacts";

export const enLocale = S.listItem()
  .title("EN Sections")
  .child(
    S.list()
      .title("EN Sections")
      .items([hero, list, textOne, textTwo, textThree, ctaText, notFound, benefits, contacts]),
  );
