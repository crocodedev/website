const { link } = require("../objects/link");

module.exports.notFound = `
    ... on SanityNotFound {
      id
      position
      component
      title
      subtitle
      text
      link {
        ${link}
      }
    }
`;
