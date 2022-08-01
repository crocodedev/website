const image = require("../objects/image");

const contacts = `
    ... on SanityContacts {
      id
      position
      component
      title
      subtitle
      popUpText
      styleLink
      accessToken
      contactItems {
        title
        contactIcon {
          ${image}
        }
      }
    }
`;

module.exports = contacts;
