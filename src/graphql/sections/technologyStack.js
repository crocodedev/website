const { image } = require("../objects/image");

module.exports.technologyStack = `
    ... on SanityTechnologyStack {
      id
      position
      component
      title
      items {
        _key
        title
        itemimage {
          ${image}
        }
      }
    }
`;
