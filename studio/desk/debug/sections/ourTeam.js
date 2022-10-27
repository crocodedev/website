import S from "@sanity/desk-tool/structure-builder";

export const ourTeam = S.listItem()
  .title("Our team")
  .child(
    S.documentTypeList("ourTeam")
      .filter(
        '_type == "ourTeam" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
