import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import page from "./documents/page";
import hero from "./sections/hero";
import list from "./sections/list";
import textOne from "./sections/textOne";
import textTwo from "./sections/textTwo";
import textThree from "./sections/textThree";
import ctaText from "./sections/ctaText";
import notFound from "./sections/notFound";
import link from "./objects/link";
import listItem from "./objects/listItem";
import leftColumnItem from "./objects/leftColumnItem";
import rightColumnItem from "./objects/rightColumnItem";
import textTwoItem from "./objects/textTwoItem";
import linkInternal from "./objects/linkInternal";
import linkExternal from "./objects/linkExternal";
import pageSection from "./blocks/pageSection";
import pageContent from "./blocks/pageContent";
import imageWithAlt from "./blocks/imageWithAlt";
import benefits from "./sections/benefits";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    // documents
    page,

    // sections
    hero,
    list,
    textOne,
    textTwo,
    textThree,
    ctaText,
    notFound,
    benefits,

    // object
    link,
    listItem,
    linkInternal,
    linkExternal,
    textTwoItem,
    leftColumnItem,
    rightColumnItem,

    // blocks
    pageSection,
    pageContent,
    imageWithAlt,
  ]),
});
