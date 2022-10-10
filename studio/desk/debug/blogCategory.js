import S from "@sanity/desk-tool/structure-builder";

export const blogCategory = S.listItem()
  .title("Blog category")
  .child(
    S.documentTypeList("blogCategory")
      .filter(
        '_type == "blogCategory" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
