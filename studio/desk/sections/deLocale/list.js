import S from "@sanity/desk-tool/structure-builder";

export const list = S.listItem()
  .title("List")
  .child(
    S.documentTypeList("list")
      .filter('_type == "list" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `de` }),
  );
