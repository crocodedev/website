import S from "@sanity/desk-tool/structure-builder";
import { hero } from "./deLocale/hero";
import { heroMain } from "./deLocale/heroMain";
import { heroProject } from "./deLocale/heroProject";
import { list } from "./deLocale/list";
import { textOne } from "./deLocale/textOne";
import { textTwo } from "./deLocale/textTwo";
import { textThree } from "./deLocale/textThree";
import { ctaText } from "./deLocale/ctaText";
import { notFound } from "./deLocale/notFound";
import { benefits } from "./deLocale/benefits";
import { contacts } from "./deLocale/contacts";
import { development } from "./deLocale/development";
import { ourTeam } from "./deLocale/ourTeam";
import { ctaImage } from "./deLocale/ctaImage";
import { faq } from "./deLocale/faq";
import { sliderSteps } from "./deLocale/sliderSteps";
import { ourClients } from "./deLocale/ourClients";
import { reviews } from "./deLocale/reviews";
import { technologyStack } from "./deLocale/technologyStack";
import { caseStudies } from "./deLocale/caseStudies";
import { technologies } from "./deLocale/technologies";
import { relatedArticles } from "./deLocale/relatedArticles";
import { footer } from "./deLocale/footer";
import { header } from "./deLocale/header";
import { contactUs } from "./deLocale/contactUs";

export const deLocale = S.listItem()
  .title("DE Sections")
  .child(
    S.list()
      .title("DE Sections")
      .items([
        hero,
        heroMain,
        heroProject,
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
        caseStudies,
        technologies,
        relatedArticles,
        footer,
        header,
        contactUs,
      ]),
  );
