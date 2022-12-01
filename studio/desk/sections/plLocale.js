import S from "@sanity/desk-tool/structure-builder";
import { hero } from "./plLocale/hero";
import { heroMain } from "./plLocale/heroMain";
import { heroProject } from "./plLocale/heroProject";
import { list } from "./plLocale/list";
import { textOne } from "./plLocale/textOne";
import { textTwo } from "./plLocale/textTwo";
import { textThree } from "./plLocale/textThree";
import { ctaText } from "./plLocale/ctaText";
import { notFound } from "./plLocale/notFound";
import { benefits } from "./plLocale/benefits";
import { contacts } from "./plLocale/contacts";
import { development } from "./plLocale/development";
import { ourTeam } from "./plLocale/ourTeam";
import { ctaImage } from "./plLocale/ctaImage";
import { faq } from "./plLocale/faq";
import { sliderSteps } from "./plLocale/sliderSteps";
import { ourClients } from "./plLocale/ourClients";
import { reviews } from "./plLocale/reviews";
import { technologyStack } from "./plLocale/technologyStack";
import { caseStudies } from "./plLocale/caseStudies";
import { technologies } from "./plLocale/technologies";
import { footer } from "./plLocale/footer";
import { header } from "./plLocale/header";
import { contactUs } from "./plLocale/contactUs";
import { ctaForm } from "./plLocale/ctaForm";
import { challenge } from "./plLocale/challenge";
import { blockText } from "./plLocale/blockText";
import { relatedArticles } from "./plLocale/relatedArticles";

export const plLocale = S.listItem()
  .title("PL Sections")
  .child(
    S.list()
      .title("PL Sections")
      .items([
        blockText,
        benefits,
        caseStudies,
        ctaForm,
        ctaText,
        contacts,
        ctaImage,
        challenge,
        contactUs,
        development,
        faq,
        footer,
        header,
        hero,
        heroMain,
        heroProject,
        list,
        notFound,
        ourClients,
        ourTeam,
        reviews,
        sliderSteps,
        technologyStack,
        technologies,
        textOne,
        textTwo,
        textThree,
        relatedArticles,
      ]),
  );
