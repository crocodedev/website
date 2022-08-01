const { image } = require("../objects/image");

module.exports.technologies = `
    ... on SanityTechnologies {
      id
      position
      component
      title
      text
      technologiesTitles
      subtitle
      technologiesItems {
        title
        technologyImage {
          ${image}
        }
      }
    }
`;
