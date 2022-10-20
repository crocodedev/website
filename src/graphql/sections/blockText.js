module.exports.blockText = `
    ... on SanityBlockText {
          id
          sectionTitle
          subtitle
          title
          position
          component
          content {
            title
            text
            list
            links
            _key
          }
        }
`;
