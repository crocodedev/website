import S from "@sanity/desk-tool/structure-builder";

export const technologiesList = S.listItem()
  .title("Technology stack")
  .child(
    S.documentTypeList("technologiesList")
      .filter(
        '_type == "technologiesList" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
