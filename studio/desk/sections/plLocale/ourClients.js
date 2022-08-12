import S from "@sanity/desk-tool/structure-builder";

export const ourClients = S.listItem()
  .title("Our Clients")
  .child(
    S.documentTypeList("ourClients")
      .filter('_type == "ourClients" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `pl` }),
  );
