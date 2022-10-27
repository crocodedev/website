import S from "@sanity/desk-tool/structure-builder";

export const contactUs = S.listItem()
  .title("Contact us")
  .child(
    S.documentTypeList("contactUs")
      .filter(
        '_type == "contactUs" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
