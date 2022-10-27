import S from "@sanity/desk-tool/structure-builder";

export const ourClients = S.listItem()
  .title("Our Clients")
  .child(
    S.documentTypeList("ourClients")
      .filter(
        '_type == "ourClients" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
