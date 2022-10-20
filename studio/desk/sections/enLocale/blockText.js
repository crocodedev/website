import S from "@sanity/desk-tool/structure-builder";

export const blockText = S.listItem()
  .title("Block Text")
  .child(
    S.documentTypeList("blockText")
      .filter('_type == "blockText" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `en` }),
  );
