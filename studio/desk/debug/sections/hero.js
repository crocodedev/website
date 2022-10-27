import S from "@sanity/desk-tool/structure-builder";

export const hero = S.listItem()
  .title("Hero")
  .child(
    S.documentTypeList("hero")
      .filter(
        '_type == "hero" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
