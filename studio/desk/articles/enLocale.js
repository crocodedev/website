import S from "@sanity/desk-tool/structure-builder";

export const enLocale = S.listItem()
  .title("EN Articles")
  .child(
    S.documentTypeList("articlesItem")
      .filter('_type == "articlesItem" && i18n_lang == $baseLanguage')
      .params({ baseLanguage: `en` }),
  );
