const { link } = require("../objects/link");
const { image } = require("../objects/image");

module.exports.contactUs = `
... on SanityContactUs {
    id
    title
    subtitle
    position
    nameText
    component
    namePlaceholder
    messagePlaceholder
    messageIcon {
      ${image}
    }
    messageText
    phoneText
    emailText
    emailPlaceholder
    backgroundImage {
      ${image}
    }
    imageTitle
    imageSubtitle
    buttonText
    image {
      ${image}
    }
    agreementText {
      text
      title
      link {
        ${link}
      }
    }
}

`;
