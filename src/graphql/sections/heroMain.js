const { link } = require("../objects/link");
const { image } = require("../objects/image");

module.exports.heroMain = `
    ... on SanityHeroMain {
      id
      position
      component
      link {
        ${link}
      }
      logoImage {
        ${image}
      }
      bgImage {
        ${image}
      }
      breadcrumbs {
        ${link}
      }
    }
`;
