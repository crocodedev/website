const { link } = require("../objects/link");

module.exports.ctaText = `
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