import S from "@sanity/desk-tool/structure-builder";

export const ourTeam = S.listItem()
  .title("Our team")
  .child(
    S.documentTypeList("ourTeam")
      .filter('_type == "ourTeam" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `pl` }),
  );
