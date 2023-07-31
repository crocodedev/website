import S from "@sanity/desk-tool/structure-builder";

export const deLocale = S.listItem()
  .title("DE Technologies cases")
  .child(
    S.documentTypeList("technologiesCaseItem")
      .filter('_type == "technologiesCaseItem" && i18n_lang == $baseLanguage')
      .params({ baseLanguage: `de` }),
  );
