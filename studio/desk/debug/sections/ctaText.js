import S from "@sanity/desk-tool/structure-builder";

export const ctaText = S.listItem()
  .title("CTA Text")
  .child(
    S.documentTypeList("ctaText")
      .filter(
        '_type == "ctaText" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
