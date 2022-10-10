import S from "@sanity/desk-tool/structure-builder";

export const casesCountry = S.listItem()
  .title("Cases country")
  .child(
    S.documentTypeList("casesCountry")
      .filter(
        '_type == "casesCountry" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
