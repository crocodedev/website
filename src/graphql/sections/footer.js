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
        _key
        iconImage {
          ${image}
        }
        link{
          ${link}
        }
      }
      column {
        title
        _key
        link {
            ${link}
          }
        items {
          _key
          link {
            ${link}
          }
        }
      }
      bottomLinks {
        ${link}
      }
    }
`;
