import S from "@sanity/desk-tool/structure-builder";

export const contacts = S.listItem()
  .title("Contacts")
  .child(
    S.documentTypeList("contacts")
      .filter('_type == "contacts" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `de` }),
  );
