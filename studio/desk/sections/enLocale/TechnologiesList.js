import S from "@sanity/desk-tool/structure-builder";

export const TechnologiesStackGrid = S.listItem()
  .title("Technologies Stack Grid")
  .child(
    S.documentTypeList("technologiesStackGrid")
      .filter('_type == "technologiesStackGrid" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `en` }),
  );
