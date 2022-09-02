const path = require("path");
const { config } = require("process");

const { benefits } = require("./src/graphql/sections/benefits");
const { caseStudies } = require("./src/graphql/sections/caseStudies");
const { challenge } = require("./src/graphql/sections/challenge");
const { contacts } = require("./src/graphql/sections/contacts");
const { contactUs } = require("./src/graphql/sections/contactUs");
const { ctaForm } = require("./src/graphql/sections/ctaForm");
const { ctaImage } = require("./src/graphql/sections/ctaImage");
const { ctaText } = require("./src/graphql/sections/ctaText");
const { development } = require("./src/graphql/sections/development");
const { faq } = require("./src/graphql/sections/faq");
const { footer } = require("./src/graphql/sections/footer");
const { header } = require("./src/graphql/sections/header");
const { hero } = require("./src/graphql/sections/hero");
const { heroMain } = require("./src/graphql/sections/heroMain");
const { heroProject } = require("./src/graphql/sections/heroProject");
const { list } = require("./src/graphql/sections/list");
const { notFound } = require("./src/graphql/sections/notFound");
const { ourClients } = require("./src/graphql/sections/ourClients");
const { ourTeam } = require("./src/graphql/sections/ourTeam");
const { reviews } = require("./src/graphql/sections/reviews");
const { sliderSteps } = require("./src/graphql/sections/sliderSteps");
const { technologies } = require("./src/graphql/sections/technologies");
const { technologyStack } = require("./src/graphql/sections/technologyStack");
const { textOne } = require("./src/graphql/sections/textOne");
const { textTwo } = require("./src/graphql/sections/textTwo");
const { textThree } = require("./src/graphql/sections/textThree");

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
      allSanityArticlesItem {
    nodes {
      sectionTitle
      position
      title
      component
      categoryReference {
        _id
      }
    }
  }
  allSanityBlogCategory {
    nodes {
      sectionTitle
      position
      component
      numberOfPosts
      title
    }
  }
    allSanityPage {
    nodes {
        title
        slug {
          current
        }
        i18n_lang
        content {
            ${benefits}
            ${caseStudies}
            ${challenge}
            ${contacts}
            ${contactUs}
            ${ctaForm}
            ${ctaImage}
            ${ctaText}
            ${development}
            ${faq}
            ${footer}
            ${header}
            ${hero}
            ${heroMain}
            ${heroProject}
            ${list}
            ${notFound}
            ${ourClients}
            ${ourTeam}
            ${reviews}
            ${sliderSteps}
            ${technologies}
            ${technologyStack}
            ${textOne}
            ${textTwo}
            ${textThree}
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
          ? `/${page.slug.current !== "/" ? page.slug.current : ""}`
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
