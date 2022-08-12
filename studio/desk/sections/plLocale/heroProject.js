import S from "@sanity/desk-tool/structure-builder";

export const heroProject = S.listItem()
  .title("Hero project")
  .child(
    S.documentTypeList("heroProject")
      .filter('_type == "heroProject" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `pl` }),
  );
