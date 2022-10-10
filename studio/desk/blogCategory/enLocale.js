import S from "@sanity/desk-tool/structure-builder";

export const enLocale = S.listItem()
  .title("EN Blog categories")
  .child(
    S.documentTypeList("blogCategory")
      .filter('_type == "blogCategory" && i18n_lang == $baseLanguage')
      .params({ baseLanguage: `en` }),
  );
