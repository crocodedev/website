const { link } = require("../objects/link");
const { image } = require("../objects/image");

module.exports.relatedArticles = `
    ... on SanityRelatedArticles {
      id
      position
      component
      title
      link {
        ${link}
      }
      items {
        id
        title
        desc
        slug {
          current
        }
        dateString: date(fromNow: false)
        coverImage {
          ${image}
        }
      }
    }
`;
