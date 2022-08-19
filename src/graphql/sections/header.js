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
        _key
        ${link}
      }
      
      langFlag {
        _key
        ${image}
      }
    
      headerButton {
        ${link}
      }
    }
`;
