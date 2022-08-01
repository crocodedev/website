const { link } = require("../objects/link");
const { image } = require("../objects/image");

module.exports.caseStudies = `
    ... on SanityCaseStudies {
      id
      subtitle
      title
      position
      component
      items {
        _key
        text
        title
        marker
        casesItemImage {
            ${image}
        }
        link {
          ${link}
        }
      }
    }
`;
