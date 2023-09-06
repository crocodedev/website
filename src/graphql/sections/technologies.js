const {
  image
} = require("../objects/image");
const {
  link
} = require("../objects/link");

module.exports.technologies = `
    ... on SanityTechnologies {
      id
      position
      component
      title
      subtitle
      categories {
        title
        slug
        text
        _key
        technologiesList {
          title
          _key
          technologyImage {
            ${image}
          }
          link {
            ${link}
          }
        }
      }
      breadcrumbs {
        ${link}
      }
    }
`;
