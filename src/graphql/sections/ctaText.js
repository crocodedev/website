const link = require("../objects/link");

const ctaText = `
    ... on SanityCtaText {
      id
      subtitle
      title
      position
      component
      link {
        ${link}
      }
      bgColor
    }
`;

module.exports = ctaText;
