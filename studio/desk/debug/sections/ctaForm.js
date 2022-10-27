import S from "@sanity/desk-tool/structure-builder";

export const ctaForm = S.listItem()
  .title("CtaForm")
  .child(
    S.documentTypeList("ctaForm")
      .filter(
        '_type == "ctaForm" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
