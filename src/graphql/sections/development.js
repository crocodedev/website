const link = require("../objects/link");
const image = require("../objects/image");

const development = `
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

module.exports = development;
