const { image } = require("../objects/image");

module.exports.imageBlock = `
    ... on SanityImageBlock {
      id
      position
      component
      title
      altText
      image {
        ${image}
      }
    }
`;
