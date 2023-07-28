const { image } = require("../objects/image");

module.exports.technologiesStackGrid = `
    ... on SanityTechnologiesStackGrid {
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
