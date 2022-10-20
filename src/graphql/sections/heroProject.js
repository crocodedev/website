const { link } = require("../objects/link");
const { image } = require("../objects/image");

module.exports.heroProject = `
    ... on SanityHeroProject {
      id
      position
      component
      title
      breadcrumbs {
        ${link}
      }
      projectFeatures{
        projectInfo {
          featureImage {
            ${image}
          }
          projectFeature {
            subtitle
            title
          }
        }
      }
      projectImage {
        ${image}
      }
    }
`;
