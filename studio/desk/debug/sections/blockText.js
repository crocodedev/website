import S from "@sanity/desk-tool/structure-builder";

export const blockText = S.listItem()
  .title("Block Text")
  .child(
    S.documentTypeList("blockText")
      .filter(
        '_type == "blockText" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
