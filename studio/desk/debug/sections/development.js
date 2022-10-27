import S from "@sanity/desk-tool/structure-builder";

export const development = S.listItem()
  .title("Development")
  .child(
    S.documentTypeList("development")
      .filter(
        '_type == "development" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
