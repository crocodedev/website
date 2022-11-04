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
    projectImage {
      ${image}
    }
    projectFeatures {
      _key
      title
      text
    }
  }
`;
