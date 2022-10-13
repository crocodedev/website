import S from "@sanity/desk-tool/structure-builder";

export const policy = S.listItem()
  .title("Policy")
  .child(
    S.documentTypeList("policy")
      .filter('_type == "policy" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `en` }),
  );
