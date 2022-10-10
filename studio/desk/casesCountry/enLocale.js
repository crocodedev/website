import S from "@sanity/desk-tool/structure-builder";

export const enLocale = S.listItem()
  .title("EN Cases countries")
  .child(
    S.documentTypeList("casesCountry")
      .filter('_type == "casesCountry" && i18n_lang == $baseLanguage')
      .params({ baseLanguage: `en` }),
  );
