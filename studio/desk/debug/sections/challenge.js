import S from "@sanity/desk-tool/structure-builder";

export const challenge = S.listItem()
  .title("Challenge")
  .child(
    S.documentTypeList("challenge")
      .filter(
        '_type == "challenge" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
