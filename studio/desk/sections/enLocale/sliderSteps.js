import S from "@sanity/desk-tool/structure-builder";

export const sliderSteps = S.listItem()
  .title("Slider Steps")
  .child(
    S.documentTypeList("sliderSteps")
      .filter('_type == "sliderSteps" && __i18n_lang == $baseLanguage')
      .params({ baseLanguage: `en` }),
  );
