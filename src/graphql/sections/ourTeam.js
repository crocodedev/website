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
        title
        subtitle
        teamMemberPhoto{
          ${image}
        }
      }
    }
`;
