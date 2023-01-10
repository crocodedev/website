module.exports.link = `
    _key
    title
    linkExternal {
      blank
      href
      label
    }
    linkInternal {
      label
      reference {
        ... on SanityBlogCategory {
          slug {
            current
          }
        }

        ... on SanityCasesCountry {
          id
          slug {
            current
          }
        }

        ... on SanityPage {
          slug {
            current
          }
        }
      }
    }
`;
