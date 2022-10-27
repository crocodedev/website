import S from "@sanity/desk-tool/structure-builder";

export const sliderSteps = S.listItem()
  .title("Slider Steps")
  .child(
    S.documentTypeList("sliderSteps")
      .filter(
        '_type == "sliderSteps" && i18n_lang != $enLanguage && i18n_lang != $plLanguage && i18n_lang != $deLanguage',
      )
      .params({ enLanguage: `en`, plLanguage: `pl`, deLanguage: `de` }),
  );
