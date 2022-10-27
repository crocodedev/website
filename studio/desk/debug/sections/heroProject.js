import S from "@sanity/desk-tool/structure-builder";

export const heroProject = S.listItem()
  .title("Hero project")
  .child(
    S.documentTypeList("heroProject")
      .filter(
        '_type == "heroProject" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
