const Benefits = `
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

module.exports = Benefits;
