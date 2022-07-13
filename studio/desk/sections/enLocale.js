import S from "@sanity/desk-tool/structure-builder";
import { hero } from "./enLocale/hero";
import { heroMain } from "./enLocale/heroMain";
import { list } from "./enLocale/list";
import { textOne } from "./enLocale/textOne";
import { textTwo } from "./enLocale/textTwo";
import { textThree } from "./enLocale/textThree";
import { ctaText } from "./enLocale/ctaText";
import { notFound } from "./enLocale/notFound";
import { benefits } from "./enLocale/benefits";
import { contacts } from "./enLocale/contacts";
import { development } from "./enLocale/development";
import { ourTeam } from "./enLocale/ourTeam";
import { ctaImage } from "./enLocale/ctaImage";
import { faq } from "./enLocale/faq";
import { sliderSteps } from "./enLocale/sliderSteps";
import { ourClients } from "./enLocale/ourClients";
import { reviews } from "./enLocale/reviews";
import { technologyStack } from "./enLocale/technologyStack";

export const enLocale = S.listItem()
  .title("EN Sections")
  .child(
    S.list()
      .title("EN Sections")
      .items([
        hero,
        heroMain,
        list,
        textOne,
        textTwo,
        textThree,
        ctaText,
        notFound,
        benefits,
        contacts,
        development,
        ourTeam,
        ctaImage,
        faq,
        sliderSteps,
        ourClients,
        reviews,
        technologyStack,
      ]),
  );
