import S from "@sanity/desk-tool/structure-builder";

export const footer = S.listItem()
  .title("Footer")
  .child(
    S.documentTypeList("footer")
      .filter('_type == "footer" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `de` }),
  );
