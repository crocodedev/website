const { link } = require("../objects/link");
const { image } = require("../objects/image");

module.exports.hero = `
        ... on SanityHero {
          id
          position
          component
          sectionTitle
          title
          subtitle
          imageWithAltText {
              ${image}
          }
          breadcrumbs {
            ${link}
          }
        }
`;
