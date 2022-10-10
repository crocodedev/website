import S from "@sanity/desk-tool/structure-builder";

export const enLocale = S.listItem()
  .title("EN Cases")
  .child(
    S.documentTypeList("casesItem")
      .filter('_type == "casesItem" && i18n_lang == $baseLanguage')
      .params({ baseLanguage: `en` }),
  );
