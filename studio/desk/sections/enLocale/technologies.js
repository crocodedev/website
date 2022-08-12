import S from "@sanity/desk-tool/structure-builder";

export const technologies = S.listItem()
  .title("Technologies")
  .child(
    S.documentTypeList("technologies")
      .filter('_type == "technologies" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `en` }),
  );
