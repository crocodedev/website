import S from "@sanity/desk-tool/structure-builder";

export const enLocale = S.listItem()
  .title("EN Technologies cases")
  .child(
    S.documentTypeList("technologiesCaseItem")
      .filter('_type == "technologiesCaseItem" && i18n_lang == $baseLanguage')
      .params({ baseLanguage: `en` }),
  );
