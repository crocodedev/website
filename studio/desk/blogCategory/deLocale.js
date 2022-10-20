import S from "@sanity/desk-tool/structure-builder";

export const deLocale = S.listItem()
  .title("DE Blog categories")
  .child(
    S.documentTypeList("blogCategory")
      .filter('_type == "blogCategory" && i18n_lang == $baseLanguage')
      .params({ baseLanguage: `de` }),
  );
