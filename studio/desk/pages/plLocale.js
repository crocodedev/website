import S from "@sanity/desk-tool/structure-builder";

export const plLocale = S.listItem()
  .title("PL Pages")
  .child(
    S.documentTypeList("page")
      .filter('_type == "page" && i18n_lang == $baseLanguage')
      .params({ baseLanguage: `pl` }),
  );
