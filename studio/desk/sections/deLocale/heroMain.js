import S from "@sanity/desk-tool/structure-builder";

export const heroMain = S.listItem()
  .title("Hero main")
  .child(
    S.documentTypeList("heroMain")
      .filter('_type == "heroMain" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `de` }),
  );
