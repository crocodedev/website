import S from "@sanity/desk-tool/structure-builder";

export const contactUs = S.listItem()
  .title("Contact us")
  .child(
    S.documentTypeList("contactUs")
      .filter('_type == "contactUs" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `de` }),
  );
