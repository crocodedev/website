import S from "@sanity/desk-tool/structure-builder";

export const plLocale = S.listItem()
  .title("PL Cases country")
  .child(
    S.documentTypeList("casesCountry")
      .filter('_type == "casesCountry" && i18n_lang == $baseLanguage')
      .params({ baseLanguage: `pl` }),
  );
