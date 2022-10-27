import S from "@sanity/desk-tool/structure-builder";

export const header = S.listItem()
  .title("Header")
  .child(
    S.documentTypeList("header")
      .filter(
        '_type == "header" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
