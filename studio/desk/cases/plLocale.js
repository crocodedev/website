import S from "@sanity/desk-tool/structure-builder";

export const plLocale = S.listItem()
  .title("PL Cases")
  .child(
    S.documentTypeList("casesItem")
      .filter('_type == "casesItem" && i18n_lang == $baseLanguage')
      .params({ baseLanguage: `pl` }),
  );
