import S from "@sanity/desk-tool/structure-builder";

export const deLocale = S.listItem()
  .title("DE Pages")
  .child(
    S.documentTypeList("page")
      .filter('_type == "page" && i18n_lang == $baseLanguage')
      .params({ baseLanguage: `de` }),
  );
