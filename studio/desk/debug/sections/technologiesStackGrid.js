import S from "@sanity/desk-tool/structure-builder";

export const technologiesStackGrid = S.listItem()
  .title("Technologies Stack Grid")
  .child(
    S.documentTypeList("technologiesStackGrid")
      .filter(
        '_type == "technologiesStackGrid" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
