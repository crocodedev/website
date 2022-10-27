import S from "@sanity/desk-tool/structure-builder";

export const footer = S.listItem()
  .title("Footer")
  .child(
    S.documentTypeList("footer")
      .filter(
        '_type == "footer" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
