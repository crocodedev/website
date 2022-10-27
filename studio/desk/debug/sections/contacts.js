import S from "@sanity/desk-tool/structure-builder";

export const contacts = S.listItem()
  .title("Contacts")
  .child(
    S.documentTypeList("contacts")
      .filter(
        '_type == "contacts" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
