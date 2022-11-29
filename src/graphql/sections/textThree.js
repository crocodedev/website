const { image } = require("../objects/image");

module.exports.textThree = `
    ... on SanityTextThree {
      id
      position
      component
      title
      subtitle
      text
      bgColor
      image{
        ${image}
      }
    }
`;
