module.exports.benefits = `
  ... on SanityBenefits {
    id
    component
    position
    subtitle
    title
    itemsLeft {
      _key
      text
      title
    }
  
    itemsRight {
      _key
      text
      title
    }
  }
`;
