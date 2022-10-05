const { image } = require("../objects/image");

module.exports.challenge = `
    ... on SanityChallenge {
      id
      position
      title
      subtitle
      component
      modalContent {
        _key
        title
        text
      }
      imagesItem {
        ${image}
      }
    }
`;
