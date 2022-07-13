import S from "@sanity/desk-tool/structure-builder";

export const development = S.listItem()
  .title("Development")
  .child(
    S.documentTypeList("development")
      .filter('_type == "development" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `de` }),
  );
