import S from "@sanity/desk-tool/structure-builder";

export const plLocale = S.listItem()
  .title("PL Technologies cases")
  .child(
    S.documentTypeList("technologiesCaseItem")
      .filter('_type == "technologiesCaseItem" && i18n_lang == $baseLanguage')
      .params({ baseLanguage: `pl` }),
  );
