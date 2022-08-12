const { image } = require("../objects/image");

module.exports.textTwo = `
    ... on SanityTextTwo {
      id
      position
      component
      title
      subtitle
      text
      image {
        ${image}
      }
      items {
        _key
        title
        text
      }
    }
`;
