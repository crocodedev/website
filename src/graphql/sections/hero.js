const { link } = require("../objects/link");
const { image } = require("../objects/image");
const { imagePortfolio } = require("../objects/imagePortfolio");

module.exports.hero = `
        ... on SanityHero {
          id
          position
          component
          title
          subtitle
          _rawRichTextBlock
          fadeColor
          imageWithAltText {
            ${image}
          }
          breadcrumbs {
            ${link}
          }
          portfolio {
            ${imagePortfolio}
          }
        }
`;
