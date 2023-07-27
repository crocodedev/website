const { image } = require("../objects/image");

module.exports.technologiesList = `
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
