const { image } = require("../objects/image");

module.exports.contacts = `
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
        _key
        title
        contactIcon {
          ${image}
        }
      }
    }
`;
