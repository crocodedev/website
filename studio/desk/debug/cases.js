import S from "@sanity/desk-tool/structure-builder";

export const cases = S.listItem()
  .title("Cases")
  .child(
    S.documentTypeList("casesItem")
      .filter(
        '_type == "casesItem" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
