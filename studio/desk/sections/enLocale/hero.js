import S from "@sanity/desk-tool/structure-builder";

export const hero = S.listItem()
  .title("Hero")
  .child(
    S.documentTypeList("hero")
      .filter('_type == "hero" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `en` }),
  );
