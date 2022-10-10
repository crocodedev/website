import S from "@sanity/desk-tool/structure-builder";

export const articles = S.listItem()
  .title("Articles")
  .child(
    S.documentTypeList("articlesItem")
      .filter(
        '_type == "articlesItem" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
