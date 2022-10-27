import S from "@sanity/desk-tool/structure-builder";

export const faq = S.listItem()
  .title("FAQ")
  .child(
    S.documentTypeList("faq")
      .filter(
        '_type == "faq" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
