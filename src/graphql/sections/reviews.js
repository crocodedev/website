const { image } = require("../objects/image");

module.exports.reviews = `
    ... on SanityReviews {
      id
      position
      component
      title
      subtitle
      items {
        _key
        title
        subtitle
        date
        rating
        text
        userPhoto {
          ${image}
        }        
      }
    }
`;
