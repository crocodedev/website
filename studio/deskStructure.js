import S from "@sanity/desk-tool/structure-builder";
import { sections } from "./desk/sections";
import { pages } from "./desk/pages";

const DOCUMENT_TYPES_IN_STRUCTURE = [
  "hero",
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
];

export default () => {
  // prettier-ignore
  return (
    S.list()
      .title('Content')
      .items([
        pages,
        S.divider(),
        sections,
        S.divider(),
        S.divider(),
        // Automatically add new document types to the root pane
        ...S.documentTypeListItems().filter(listItem => !DOCUMENT_TYPES_IN_STRUCTURE.includes(listItem.getId()))
      ])
  )
};
