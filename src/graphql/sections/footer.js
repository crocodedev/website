const { link } = require("../objects/link");
const { image } = require("../objects/image");

module.exports.footer = `
    ... on SanityFooter {
      id
      position
      component
      copyrightText
      logoImage {
        ${image}
      }
      socialIcons{
        iconImage {
          ${image}
        }
        link{
          ${link}
        }
      }
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
      bottomLinks {
        ${link}
      }
    }
`;
