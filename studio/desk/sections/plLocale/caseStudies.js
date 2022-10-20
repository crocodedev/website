import S from "@sanity/desk-tool/structure-builder";

export const caseStudies = S.listItem()
  .title("HeroProject studies")
  .child(
    S.documentTypeList("caseStudies")
      .filter('_type == "caseStudies" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `pl` }),
  );
