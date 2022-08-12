const { link } = require("../objects/link");
const { image } = require("../objects/image");

module.exports.header = `
        ... on SanityHeader {
          id
          position
          component
          logoImage {
            ${image}
          }
          
          linkWithIcon {
            icon {
              ${image}
            }
            link {
              ${link}
            }
          }

          headerLinks {
            ${link} 
          }
          headerButton {
            ${link}
          }
        }
`;
