import S from "@sanity/desk-tool/structure-builder";

export const caseStudies = S.listItem()
  .title("Case Studies")
  .child(
    S.documentTypeList("caseStudies")
      .filter('_type == "caseStudies" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `en` }),
  );
