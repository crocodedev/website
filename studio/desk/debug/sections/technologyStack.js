import S from "@sanity/desk-tool/structure-builder";

export const technologyStack = S.listItem()
  .title("Technology stack")
  .child(
    S.documentTypeList("technologyStack")
      .filter(
        '_type == "technologyStack" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
