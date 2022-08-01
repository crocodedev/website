const { image } = require("../objects/image");

module.exports.technologyStack = `
    ... on SanityTechnologyStack {
      id
      position
      component
      title
      subtitle
      items {
        title
        itemimage {
          ${image}
        }
      }
    }
`;
