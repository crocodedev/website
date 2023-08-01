import S from "@sanity/desk-tool/structure-builder";

export const technologiesCases = S.listItem()
  .title("technologiesCases")
  .child(
    S.documentTypeList("technologiesCaseItem")
      .filter(
        '_type == "technologiesCaseItem" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
