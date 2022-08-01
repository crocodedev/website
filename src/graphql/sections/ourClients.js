const { link } = require("../objects/link");
const { image } = require("../objects/image");

module.exports.ourClients = `
    ... on SanityOurClients {
      id
      position
      component
      title
      subtitle
      itemsBottomSlider {
        clientPhoto {
          ${image}
        }
        link {
          ${link}
        }
      }
      itemsTopSlider {
        clientPhoto {
          ${image}
        }
        link {
          ${link}
        }
      }
    }
`;
