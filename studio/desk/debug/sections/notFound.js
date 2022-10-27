import S from "@sanity/desk-tool/structure-builder";

export const notFound = S.listItem()
  .title("Not found")
  .child(
    S.documentTypeList("notFound")
      .filter(
        '_type == "notFound" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
