import S from "@sanity/desk-tool/structure-builder";

export const technologyStack = S.listItem()
  .title("Technology stack")
  .child(
    S.documentTypeList("technologyStack")
      .filter('_type == "technologyStack" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `pl` }),
  );
