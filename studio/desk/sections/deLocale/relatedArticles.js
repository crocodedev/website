import S from "@sanity/desk-tool/structure-builder";

export const relatedArticles = S.listItem()
  .title("Related articles")
  .child(
    S.documentTypeList("relatedArticles")
      .filter('_type == "relatedArticles" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `de` }),
  );
