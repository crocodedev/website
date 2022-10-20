const { link } = require("../objects/link");
const { image } = require("../objects/image");

module.exports.header = `
    ... on SanityHeader {
      touchUsModal {
        buttonText
        emailPlaceholder
        subtitle
        namePlaceholder
        title
        yourEmail
        yourName
        agreementText {
          text
          link {
            linkInternal {
              label
            }
          }
        }
      }
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

      headerButton {
        ${link}
      }
    }
`;
