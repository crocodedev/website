import S from "@sanity/desk-tool/structure-builder";

export const textThree = S.listItem()
  .title("Text three")
  .child(
    S.documentTypeList("textThree")
      .filter('_type == "textThree" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `en` }),
  );
