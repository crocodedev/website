import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// documents
import page from "./documents/page";

// sections
import hero from "./sections/hero";
import heroMain from "./sections/heroMain";
import heroProject from "./sections/heroProject";
import list from "./sections/list";
import textOne from "./sections/textOne";
import textTwo from "./sections/textTwo";
import textThree from "./sections/textThree";
import ctaText from "./sections/ctaText";
import notFound from "./sections/notFound";
import benefits from "./sections/benefits";
import contacts from "./sections/contacts";
import development from "./sections/development";
import ourTeam from "./sections/ourTeam";
import ctaImage from "./sections/ctaImage";
import faq from "./sections/faq";
import sliderSteps from "./sections/sliderSteps";
import ourClients from "./sections/ourClients";
import reviews from "./sections/reviews";
import technologyStack from "./sections/technologyStack";
import caseStudies from "./sections/caseStudies";
import technologies from "./sections/technologies";
import relatedArticles from "./sections/relatedArticles";
import footer from "./sections/footer";
import header from "./sections/header";
import contactUs from "./sections/contactUs";
import ctaForm from "./sections/ctaForm";

// objects
import link from "./objects/link";
import listItem from "./objects/listItem";
import leftColumnItem from "./objects/leftColumnItem";
import rightColumnItem from "./objects/rightColumnItem";
import textTwoItem from "./objects/textTwoItem";
import linkInternal from "./objects/linkInternal";
import linkExternal from "./objects/linkExternal";
import contactItem from "./objects/contactItem";
import devItem from "./objects/devItem";
import ourTeamItem from "./objects/ourTeamItem";
import faqItem from "./objects/faqItem";
import textItemSteps from "./objects/textItemSteps";
import ourClientsItem from "./objects/ourClientsItem";
import reviewItem from "./objects/reviewItem";
import technologyStackItem from "./objects/technologyStackItem";
import projectFeature from "./objects/projectFeature";
import casesItem from "./objects/casesItem";
import technologiesItem from "./objects/technologiesItem";
import articlesItem from "./objects/articlesItem";
import socialIconItem from "./objects/socialIcons";
import columnLinkItem from "./objects/columnLinks";
import iconLink from "./objects/iconLink";
import textItem from "./objects/agreementTextItems";

// blocks
import pageSection from "./blocks/pageSection";
import pageContent from "./blocks/pageContent";
import imageWithAlt from "./blocks/imageWithAlt";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    // documents
    page,

    // sections
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

    // objects
    link,
    listItem,
    linkInternal,
    linkExternal,
    textTwoItem,
    leftColumnItem,
    rightColumnItem,
    contactItem,
    devItem,
    ourTeamItem,
    faqItem,
    textItemSteps,
    ourClientsItem,
    reviewItem,
    technologyStackItem,
    projectFeature,
    casesItem,
    technologiesItem,
    articlesItem,
    socialIconItem,
    columnLinkItem,
    iconLink,
    textItem,

    // blocks
    pageSection,
    pageContent,
    imageWithAlt,
  ]),
});
