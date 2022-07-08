import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import page from "./documents/page";
import hero from "./sections/hero";
import list from "./sections/list";
import link from "./objects/link";
import listItem from "./objects/listItem";
import linkInternal from "./objects/linkInternal";
import linkExternal from "./objects/linkExternal";
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
    list,

    // object
    link,
    listItem,
    linkInternal,
    linkExternal,

    // blocks
    pageSection,
    pageContent,
    imageWithAlt,
  ]),
});
