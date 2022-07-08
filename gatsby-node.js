const path = require("path");

exports.createPages = async ({ graphql, actions: { createPages }, reporter }) => {
  const template = path.resolve("./src/teplates/template.js");

  const { data, errors } = await graphql(``);

  if (errors) {
    reporter.panicOnBuild("There was an error loading your Sanity pages", errors);
    return;
  }

  const pages = data.allSanityPages.nodes;

  if (pages.lenght > 0) {
    pages.forEach((page) => {
      const url =
        defaultLocale === page.locale
          ? `/${page.slug.current}`
          : `/${page.locale}/${page.slug.current}`;
    });
  }
};
