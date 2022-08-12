const { image } = require("../objects/image");

module.exports.sliderSteps = `
    ... on SanitySliderSteps {
      id
      position
      component
      subtitle
      title
      itemsSteps {
        _key
        title
        text
        image {
          ${image}
        }
      }
    }
`;
