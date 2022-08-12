import S from "@sanity/desk-tool/structure-builder";

export const faq = S.listItem()
  .title("FAQ")
  .child(
    S.documentTypeList("faq")
      .filter('_type == "faq" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `de` }),
  );
