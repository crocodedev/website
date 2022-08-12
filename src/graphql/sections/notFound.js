const { link } = require("../objects/link");
const { image } = require("../objects/image");

module.exports.notFound = `
    ... on SanityNotFound {
      id
      position
      component
      subtitle
      image {
        ${image}
      }
      text
      link {
        ${link}
      }
    }
`;
