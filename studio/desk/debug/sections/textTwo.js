import S from "@sanity/desk-tool/structure-builder";

export const textTwo = S.listItem()
  .title("Text two")
  .child(
    S.documentTypeList("textTwo")
      .filter(
        '_type == "textTwo" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
