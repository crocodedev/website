const { link } = require("../objects/link");
const { image } = require("../objects/image");

module.exports.list = `
    ... on SanityList {
      id
      position
      component
      title
      text
      bgColor
      items {
        _key
        text
        title
        imageWithAltText {
          ${image}
        }
        link {
          ${link}
        }
      }
    }
`;
