const Benefits = require("./src/graphql/sections/benefits");
const path = require("path");
const { config } = require("process");

const {
  DEFAULT_LOCALE: defaultLocale = "",
  SITE_URL: siteUrl = "",
  SITE_NAME: name = "",
  GATSBY_RECAPTCHA_KEY: recaptchaKey = "",
} = process.env;

exports.createPages = async ({ graphql, actions: { createPage }, reporter }) => {
  const template = path.resolve("./src/templates/template.js");

  const { data, errors } = await graphql(`
  {
    allSanityPage {
    nodes {
        title
        slug {
          current
        }
        i18n_lang
        content {
            ${Benefits}
        }
      }
  }}
  `);

  if (errors) {
    reporter.panicOnBuild("There was an error loading your Sanity pages", errors);
    return;
  }

  const pages = data.allSanityPage.nodes;
  if (pages.length > 0) {
    pages.forEach((page) => {
      const url =
        defaultLocale === page.i18n_lang
          ? `/${page.slug.current}`
          : `/${page.i18n_lang}/${page.slug.current}`;

      createPage({
        path: url,
        component: template,
        context: {
          baseUrl: defaultLocale === page.i18n_lang ? "/" : `/${page.i18n_lang}/`,
          recaptchaKey,
          seo: {
            ...(page.seo || {}),
            lang: page.i18n_lang,
            siteUrl,
            url,
            name,
          },
          /* 
          cookieConsent: {
            ...cookieConsent.filter((cookie) => cookie.i18n_lang === page.i18n_lang)[0],
            cookieName: config.googleAnalytics.cookieName,
          },
          */
          sections: (page.content || [])
            .filter(({ id }) => id)
            .sort((a, b) => +a.position - +b.position),
        },
      });
    });
  }
};
