const link = require("../objects/link");

const footer = `
    ... on SanityFooter {
      id
      position
      component
      copyrightText
      logoImage
      socialIcons
      column {
        title
        items {
          _key
          link {
            ${link}
          }
        }
        _key
      }
      bottomLinks
    }
`;

module.exports = footer;
