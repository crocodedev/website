import S from "@sanity/desk-tool/structure-builder";

export const heroMain = S.listItem()
  .title("Hero main")
  .child(
    S.documentTypeList("heroMain")
      .filter(
        '_type == "heroMain" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
