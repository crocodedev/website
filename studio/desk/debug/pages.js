import S from "@sanity/desk-tool/structure-builder";

export const pages = S.listItem()
  .title("Pages")
  .child(
    S.documentTypeList("page")
      .filter(
        '_type == "page" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
