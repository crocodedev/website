import S from "@sanity/desk-tool/structure-builder";
import { hero } from "./sections/hero";
import { heroMain } from "./sections/heroMain";
import { heroProject } from "./sections/heroProject";
import { list } from "./sections/list";
import { textOne } from "./sections/textOne";
import { textTwo } from "./sections/textTwo";
import { textThree } from "./sections/textThree";
import { ctaText } from "./sections/ctaText";
import { notFound } from "./sections/notFound";
import { benefits } from "./sections/benefits";
import { contacts } from "./sections/contacts";
import { development } from "./sections/development";
import { ourTeam } from "./sections/ourTeam";
import { ctaImage } from "./sections/ctaImage";
import { faq } from "./sections/faq";
import { sliderSteps } from "./sections/sliderSteps";
import { ourClients } from "./sections/ourClients";
import { reviews } from "./sections/reviews";
import { technologyStack } from "./sections/technologyStack";
import { caseStudies } from "./sections/caseStudies";
import { technologies } from "./sections/technologies";
import { footer } from "./sections/footer";
import { header } from "./sections/header";
import { contactUs } from "./sections/contactUs";
import { ctaForm } from "./sections/ctaForm";
import { challenge } from "./sections/challenge";
import { blockText } from "./sections/blockText";

export const sections = S.listItem()
  .title("Sections")
  .child(
    S.list()
      .title("Sections")
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
      ]),
  );
