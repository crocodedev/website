import S from "@sanity/desk-tool/structure-builder";

export const technologies = S.listItem()
  .title("Technologies")
  .child(
    S.documentTypeList("technologies")
      .filter(
        '_type == "technologies" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
