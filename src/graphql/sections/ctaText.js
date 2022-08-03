const { link } = require("../objects/link");

module.exports.ctaText = `
    ... on SanityCtaText {
      id
      position
      component
      subtitle
      title
      link {
        ${link}
      }
      bgColor
    }
`;
