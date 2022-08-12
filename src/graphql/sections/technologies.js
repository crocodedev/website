const { image } = require("../objects/image");

module.exports.technologies = `
    ... on SanityTechnologies {
      id
      position
      component
      title
      subtitle
      categories {
        title
        text
        _key
        technologiesList {
          title
          _key
          technologyImage {
            ${image}
          }
        }
      }
    }
`;
