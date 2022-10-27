import S from "@sanity/desk-tool/structure-builder";

export const ctaImage = S.listItem()
  .title("CTA Image")
  .child(
    S.documentTypeList("ctaImage")
      .filter(
        '_type == "ctaForm" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
