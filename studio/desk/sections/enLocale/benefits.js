import S from "@sanity/desk-tool/structure-builder";

export const benefits = S.listItem()
  .title("Benefits")
  .child(
    S.documentTypeList("benefits")
      .filter('_type == "benefits" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `en` }),
  );
