import S from "@sanity/desk-tool/structure-builder";

export const notFound = S.listItem()
  .title("Not found")
  .child(
    S.documentTypeList("notFound")
      .filter('_type == "notFound" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `de` }),
  );
