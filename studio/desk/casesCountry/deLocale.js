import S from "@sanity/desk-tool/structure-builder";

export const deLocale = S.listItem()
  .title("DE Cases countries")
  .child(
    S.documentTypeList("casesCountry")
      .filter('_type == "casesCountry" && i18n_lang == $baseLanguage')
      .params({ baseLanguage: `de` }),
  );
