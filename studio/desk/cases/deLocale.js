import S from "@sanity/desk-tool/structure-builder";

export const deLocale = S.listItem()
  .title("DE Cases")
  .child(
    S.documentTypeList("casesItem")
      .filter('_type == "casesItem" && i18n_lang == $baseLanguage')
      .params({ baseLanguage: `de` }),
  );
