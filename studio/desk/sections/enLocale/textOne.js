import S from "@sanity/desk-tool/structure-builder";

export const textOne = S.listItem()
  .title("Text one")
  .child(
    S.documentTypeList("textOne")
      .filter('_type == "textOne" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `en` }),
  );
