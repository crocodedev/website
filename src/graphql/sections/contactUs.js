const link = require("../objects/link");
const image = require("../objects/image");

const contactUs = `
... on SanityContactUs {
    id
    title
    subtitle
    position
    nameText
    component
    namePlaceholder
    messagePlaceholder
    messageText
    phoneText
    emailText
    emailPlaceholder
    backgroundImage {
      image {
        ${image}
      }
    }
    imageTitle
    imageSubtitle
    buttonText
    agreementText {
      text
      title
      link {
        ${link}
      }
    }
}
    
`;

module.exports = contactUs;
