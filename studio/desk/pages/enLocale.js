import S from "@sanity/desk-tool/structure-builder";

export const enLocale = S.listItem()
  .title("EN Pages")
  .child(
    S.documentTypeList("page")
      .filter('_type == "page" && i18n_lang == $baseLanguage')
      .params({ baseLanguage: `en` }),
  );
