const { link } = require("../objects/link");
const { image } = require("../objects/image");

module.exports.caseStudies = `
    ... on SanityCaseStudies {
      id
      subtitle
      title
      position
      component
      link {
        ${link}
      }
      items {
        _id
        text
        title
        slug {
          current
        }
        marker
        casesItemImage {
          ${image}
        }
      }

    }
`;
