import S from "@sanity/desk-tool/structure-builder";

export const reviews = S.listItem()
  .title("Reviews")
  .child(
    S.documentTypeList("reviews")
      .filter('_type == "reviews" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `en` }),
  );
