import S from "@sanity/desk-tool/structure-builder";

export const plLocale = S.listItem()
  .title("PL Articles")
  .child(
    S.documentTypeList("articlesItem")
      .filter('_type == "articlesItem" && i18n_lang == $baseLanguage')
      .params({ baseLanguage: `pl` }),
  );
