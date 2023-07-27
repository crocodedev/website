const { image } = require("../objects/image");

module.exports.TechnologiesList = `
    ... on SanityTechnologiesList {
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
