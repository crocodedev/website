import S from "@sanity/desk-tool/structure-builder";

export const plLocale = S.listItem()
  .title("PL Blog categories")
  .child(
    S.documentTypeList("blogCategory")
      .filter('_type == "blogCategory" && i18n_lang == $baseLanguage')
      .params({ baseLanguage: `pl` }),
  );
