import S from "@sanity/desk-tool/structure-builder";

export const reviews = S.listItem()
  .title("Reviews")
  .child(
    S.documentTypeList("reviews")
      .filter(
        '_type == "reviews" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
