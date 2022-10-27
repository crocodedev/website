import S from "@sanity/desk-tool/structure-builder";

export const benefits = S.listItem()
  .title("Benefits")
  .child(
    S.documentTypeList("benefits")
      .filter(
        '_type == "benefits" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
