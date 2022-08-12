import S from "@sanity/desk-tool/structure-builder";

export const header = S.listItem()
  .title("Header")
  .child(
    S.documentTypeList("header")
      .filter('_type == "header" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `en` }),
  );
