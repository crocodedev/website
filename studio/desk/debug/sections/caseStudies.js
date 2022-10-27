import S from "@sanity/desk-tool/structure-builder";

export const caseStudies = S.listItem()
  .title("Case Studies")
  .child(
    S.documentTypeList("caseStudies")
      .filter(
        '_type == "caseStudies" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
