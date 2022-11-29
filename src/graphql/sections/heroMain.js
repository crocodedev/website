const { link } = require("../objects/link");
const { image } = require("../objects/image");

module.exports.heroMain = `
    ... on SanityHeroMain {
      id
      position
      component
      fadeColor
      items {
        text
        _key
      }
      link {
        ${link}
      }
      logoImage {
        ${image}
      }
      bgImage {
        ${image}
      }
    }
`;
