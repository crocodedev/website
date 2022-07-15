import S from "@sanity/desk-tool/structure-builder";

export const ctaForm = S.listItem()
  .title("CtaForm")
  .child(
    S.documentTypeList("ctaForm")
      .filter('_type == "ctaForm" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `de` }),
  );
