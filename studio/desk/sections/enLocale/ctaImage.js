import S from "@sanity/desk-tool/structure-builder";

export const ctaImage = S.listItem()
  .title("CTA Image")
  .child(
    S.documentTypeList("ctaImage")
      .filter('_type == "ctaImage" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `en` }),
  );
