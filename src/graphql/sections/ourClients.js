const { link } = require("../objects/link");
const { image } = require("../objects/image");

module.exports.ourClients = `
    ... on SanityOurClients {
      id
      position
      component
      title
      subtitle
      sliders {
        _key
        clientsList {
          _key
          clientPhoto {
            ${image}
          }
          link {
            ${link}
          }
        }
      }
    }
`;
