import S from "@sanity/desk-tool/structure-builder";

export const ctaText = S.listItem()
  .title("CTA Text")
  .child(
    S.documentTypeList("ctaText")
      .filter('_type == "ctaText" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `de` }),
  );
