module.exports.sliderSteps = `
    ... on SanitySliderSteps {
      id
      position
      component
      subtitle
      title
      itemsStepsImage {
       asset {
          gatsbyImageData(placeholder: BLURRED)
          altText
        }
      }
      itemsSteps {
        title
        text
      }
    }
`;
