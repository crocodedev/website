const { image } = require("../objects/image");
const { link } = require("../objects/link");

module.exports.technologyStack = `
    ... on SanityTechnologyStack {
      id
      position
      component
      title
      items {
        _key
        title
        itemimage {
          ${image}
        }
        link{
          ${link}
        }
      }
    }
`;
