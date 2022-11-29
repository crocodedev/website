module.exports.faq = `
    ... on SanityFaq {
      id
      component
      position
      subtitle
      title
      bgColor
      items {
        _key
        text
        title
      }
    }
`;
