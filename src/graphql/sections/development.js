const { link } = require("../objects/link");
const { image } = require("../objects/image");

module.exports.development = `
    ... on SanityDevelopment {
      id
      component
      position
      subtitle
      title
      items {
        title
        text
        image {
          ${image}
        }
        link {
          ${link}
        }
      }
    }
`;