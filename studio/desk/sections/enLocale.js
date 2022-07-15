import S from "@sanity/desk-tool/structure-builder";
import { hero } from "./enLocale/hero";
import { heroMain } from "./enLocale/heroMain";
import { heroProject } from "./enLocale/heroProject";
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
import { caseStudies } from "./enLocale/caseStudies";
import { technologies } from "./enLocale/technologies";
import { relatedArticles } from "./enLocale/relatedArticles";
import { footer } from "./enLocale/footer";
import { header } from "./enLocale/header";
import { contactUs } from "./enLocale/contactUs";
import { ctaForm } from "./enLocale/ctaForm";

export const enLocale = S.listItem()
  .title("EN Sections")
  .child(
    S.list()
      .title("EN Sections")
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
