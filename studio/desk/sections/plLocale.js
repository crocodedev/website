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
import { relatedArticles } from "./plLocale/relatedArticles";
import { footer } from "./plLocale/footer";
import { header } from "./plLocale/header";
import { contactUs } from "./plLocale/contactUs";
import { ctaForm } from "./plLocale/ctaForm";

export const plLocale = S.listItem()
  .title("PL Sections")
  .child(
    S.list()
      .title("PL Sections")
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
        ctaForm,
      ]),
  );
