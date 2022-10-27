import S from "@sanity/desk-tool/structure-builder";

export const list = S.listItem()
  .title("List")
  .child(
    S.documentTypeList("list")
      .filter(
        '_type == "list" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
