import S from "@sanity/desk-tool/structure-builder";

export const challenge = S.listItem()
  .title("Challenge")
  .child(
    S.documentTypeList("challenge")
      .filter('_type == "challenge" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `de` }),
  );
