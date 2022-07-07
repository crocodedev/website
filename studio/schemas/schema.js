import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import page from "./documents/page";
import hero from "./sections/hero";
import list from "./sections/list";
import link from "./objects/link";
import listItem from "./objects/listItem";

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
  ]),
});
