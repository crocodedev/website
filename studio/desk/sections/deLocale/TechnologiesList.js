import S from "@sanity/desk-tool/structure-builder";

export const TechnologiesList = S.listItem()
  .title("Technology stack")
  .child(
    S.documentTypeList("technologiesList")
      .filter('_type == "technologiesList" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `de` }),
  );
