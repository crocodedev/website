import S from "@sanity/desk-tool/structure-builder";

export const textTwo = S.listItem()
  .title("Text two")
  .child(
    S.documentTypeList("textTwo")
      .filter('_type == "textTwo" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `pl` }),
  );
