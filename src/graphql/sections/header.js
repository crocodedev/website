const header = `
        ... on SanityHeader {
          id
          position
          component
          logoImage {
            image {
                ${image}
            }
            altText
          }
          linkWithIcon {
            icon {
                ${image}
            }
            link {
              title
              link {
                ${link}
              }
            }
          }
          headerLinks {
            title
            link {
                ${link} 
            }
          }
        }
`;

module.exports = header;
