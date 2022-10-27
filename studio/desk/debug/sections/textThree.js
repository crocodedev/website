import S from "@sanity/desk-tool/structure-builder";

export const textThree = S.listItem()
  .title("Text three")
  .child(
    S.documentTypeList("textThree")
      .filter(
        '_type == "textThree" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
