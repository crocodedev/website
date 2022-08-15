const { image } = require("../objects/image");
const { link } = require("../objects/link");

module.exports.contacts = `
    ... on SanityContacts {
      id
      position
      component
      title
      subtitle
      image {
        ${image}
      }
      popUpText
      styleLink
      accessToken
      contactItems {
        _key
        title
        contactIcon {
          ${image}
        }
        itemLink {
          ${link}
        }
      }
    }
`;
