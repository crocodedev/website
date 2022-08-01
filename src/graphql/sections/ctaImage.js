const link = require("../objects/link");
const image = require("../objects/image");

const ctaImage = `
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

module.exports = ctaImage;
