import S from "@sanity/desk-tool/structure-builder";

export const textOne = S.listItem()
  .title("Text one")
  .child(
    S.documentTypeList("textOne")
      .filter(
        '_type == "textOne" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
