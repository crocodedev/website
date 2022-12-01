import S from "@sanity/desk-tool/structure-builder";
import { sections } from "./desk/sections";
import { pages } from "./desk/pages";
import { cases } from "./desk/cases";
import { articles } from "./desk/articles";
import { blogCategory } from "./desk/blogCategory";
import { casesCountry } from "./desk/casesCountry";
import { debug } from "./desk/debug";

const DOCUMENT_TYPES_IN_STRUCTURE = [
  "hero",
  "blockText",
  "heroMain",
  "heroProject",
  "list",
  "benefits",
  "contacts",
  "ctaImage",
  "ctaText",
  "development",
  "faq",
  "notFound",
  "ourTeam",
  "sliderSteps",
  "textOne",
  "textTwo",
  "textThree",
  "ourClients",
  "reviews",
  "technologyStack",
  "caseStudies",
  "technologies",
  "footer",
  "header",
  "contactUs",
  "ctaForm",
  "challenge",
  "relatedArticles",
  "articlesItem",
  "casesItem",
  "blogCategory",
  "casesCountry",
  "page",
  "settings",
];

export default () => {
  // prettier-ignore
  return S.list()
    .title("Content")
    .items([
      pages,
      sections,
      S.divider(),
      casesCountry,
      cases,
      S.divider(),
      blogCategory,
      articles,
      S.divider(),
      S.documentListItem().id("global-config").schemaType("settings").title("Settings"),
      debug,
      S.divider(),
      // Automatically add new document types to the root pane
      ...S.documentTypeListItems().filter(
        (listItem) => !DOCUMENT_TYPES_IN_STRUCTURE.includes(listItem.getId()),
      ),
    ]);
};
