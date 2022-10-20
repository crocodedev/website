import S from "@sanity/desk-tool/structure-builder";
import { ErrorOutlineIcon } from "@sanity/icons";

import { articles } from "./debug/articles";
import { blogCategory } from "./debug/blogCategory";
import { cases } from "./debug/cases";
import { casesCountry } from "./debug/casesCountry";
import { pages } from "./debug/pages";

export const debug = S.listItem()
  .title("Debugging")
  .icon(ErrorOutlineIcon)
  .child(S.list().title("List").items([articles, blogCategory, cases, casesCountry, pages]));
