const path = require("path");
const { config } = require("process");

exports.createPages = async ({ graphql, actions: { createPage }, reporter }) => {
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

      createPage({
        path: url,
        component: template,
        context: {
          baseUrl: defaultLocale === page.locale ? "/" : `/${page.locale}/`,
          recaptchaKey,
          seo: {
            ...(page.seo || {}),
            lang: page.locale,
            siteUrl,
            url,
            name,
          },
          cookieConsent: {
            ...cookieConsent.filter((cookie) => cookie.locale === page.locale)[0],
            cookieName: config.googleAnalytics.cookieName,
          },
          sections: (page.sections || [])
            .filter(({ id }) => id)
            .sort((a, b) => +a.position - +b.position),
        },
      });
    });
  }
};
