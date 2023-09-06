const { link } = require("../objects/link");
const { image } = require("../objects/image");

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
        }
`;
