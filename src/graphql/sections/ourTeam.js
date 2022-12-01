const { link } = require("../objects/link");
const { image } = require("../objects/image");

module.exports.ourTeam = `
    ... on SanityOurTeam {
      id
      position
      component
      title
      subtitle
      link {
        ${link}
      }
      items {
        _key
        title
        subtitle
        teamMemberPhoto {
          ${image}
        }
      }
    }
`;
