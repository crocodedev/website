const { image } = require("../objects/image");

module.exports.textOne = `
    ... on SanityTextOne {
      id
      position
      component
      title
      subtitle
      text
      tabletImage {
        ${image}
      }
      mobileImage {
        ${image}
      }
      desktopImage {
        ${image}
      }
    }
`;
