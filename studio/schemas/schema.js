import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// documents
import page from "./documents/page";
import blogCategory from "./documents/blogCategory";
import settings from "./documents/settings";
import casesItem from "./documents/casesItem";
import casesCountry from "./documents/casesCountry";

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
import footer from "./sections/footer";
import header from "./sections/header";
import contactUs from "./sections/contactUs";
import ctaForm from "./sections/ctaForm";
import challenge from "./sections/challenge";
import blockText from "./sections/blockText";
import relatedArticles from "./sections/relatedArticles";

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
import technologiesItem from "./objects/technologiesItem";
import articlesItem from "./documents/articlesItem";
import socialIconItem from "./objects/socialIcons";
import columnLinksItem from "./objects/columnLinks";
import iconLink from "./objects/iconLink";
import textItem from "./objects/agreementTextItems";
import seo from "./objects/seo";
import columnGroup from "./objects/columnGroup";
import heroMainItem from "./objects/heroMainItem";
import ourClientsArray from "./objects/ourClientsArray";
import ourClientsSlider from "./objects/ourClientsSlider";
import technologyCategory from "./objects/technologyCategory";
import technologiesArray from "./objects/technologiesArray";
import locale from "./objects/locale";
import contentItem from "./objects/contentItem";
import blockTextItem from "./objects/blockTextItem";
import modalWindow from "./objects/modalWindow";
import cookies from "./objects/cookies";
import cookiesItem from "./objects/cookiesItem";
import heroProjectInfo from "./objects/heroProjectInfo";

// blocks
import pageSection from "./blocks/pageSection";
import pageContent from "./blocks/pageContent";
import imageWithAlt from "./blocks/imageWithAlt";
import imageArray from "./blocks/imageArray";
import itemsSteps from "./blocks/itemsSteps";
import headerLinks from "./blocks/headerLinks";
import blogContent from "./blocks/blogContent";
import blogSections from "./blocks/blogSections";
import touchUs from "./blocks/touchUs";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    // documents
    page,
    blogCategory,
    articlesItem,
    locale,
    settings,
    casesItem,
    casesCountry,

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
    footer,
    header,
    contactUs,
    ctaForm,
    challenge,
    blockText,
    relatedArticles,

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
    technologiesItem,
    socialIconItem,
    columnLinksItem,
    iconLink,
    textItem,
    seo,
    columnGroup,
    heroMainItem,
    ourClientsArray,
    ourClientsSlider,
    technologyCategory,
    technologiesArray,
    contentItem,
    modalWindow,
    blockTextItem,
    heroProjectInfo,
    cookies,
    cookiesItem,

    // blocks
    pageSection,
    pageContent,
    imageWithAlt,
    imageArray,
    itemsSteps,
    headerLinks,
    blogSections,
    blogContent,
    touchUs,
  ]),
});
