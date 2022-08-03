module.exports.faq = `
    ... on SanityFaq {
      id
      component
      position
      subtitle
      title
      items {
        _key
        text
        title
      }
    }
`;
