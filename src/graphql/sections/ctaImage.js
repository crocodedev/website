const { link } = require("../objects/link");
const { image } = require("../objects/image");

module.exports.ctaImage = `
    ... on SanityCtaImage {
      id
      position
      component
      title
      subtitle
      bgColor
      link {
        ${link}
      }
      image{
        ${image}
      }
    }
`;
