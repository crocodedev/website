const { link } = require("../objects/link");
const { image } = require("../objects/image");

module.exports.hero = `
        ... on SanityHero {
          id
          position
          component
          title
          subtitle
          fadeColor
          imageWithAltText {
            ${image}
          }
          breadcrumbs {
            ${link}
          }
        }
`;
