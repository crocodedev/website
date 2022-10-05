import S from "@sanity/desk-tool/structure-builder";

export const deLocale = S.listItem()
  .title("DE Articles")
  .child(
    S.documentTypeList("articlesItem")
      .filter('_type == "articlesItem" && i18n_lang == $baseLanguage')
      .params({ baseLanguage: `de` }),
  );
