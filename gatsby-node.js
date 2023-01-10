const path = require("path");

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
const { blockText } = require("./src/graphql/sections/blockText");
const { image } = require("./src/graphql/objects/image");
const { link } = require("./src/graphql/objects/link");
const { relatedArticles } = require("./src/graphql/sections/relatedArticles");

exports.createPages = async ({ graphql, actions: { createPage }, reporter }) => {
  const template = path.resolve("./src/templates/template.js");

  const { data, errors } = await graphql(`
  {
  allSanityCasesItem {
    nodes {
      id
      i18n_lang
      sectionTitle
      title
      slug {
        current
      }
      technologies
      country {
        _id
      }
      text
      marker
      link {
        ${link}
      }
      casesItemImage {
        ${image}
      }
      content {
        ${benefits}
        ${relatedArticles}
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
        ${blockText}
      }
    }
  }
  allSanityCasesCountry {
    nodes {
      seo {
        description
        twitterCard
        titleTemplate
        title
        ogType
        keywords
        image {
          altText
          image {
            asset {
              url
              height
              width
            }
          }
        }
      }
      id
      _id
      i18n_lang
      sectionTitle
      numberOfPosts
      title
      component
      position
      slug {
        current
      }
      breadcrumbs {
        ${link}
      }
      articleSeparator {
        position
        sectionTitle
        title
        component
        bgColor
        buttonText
        id
        messagePlaceholder
      }
      sections {
        ${footer}
        ${header}
        ${ctaForm}
        ${contactUs}
      }
    }
  }
  allSanitySettings {
    nodes {
      cookies {
        de {
          title
          text
          cookiesName
          clickHere
          buttonText
        }
        en {
          title
          text
          cookiesName
          clickHere
          buttonText
        }
        pl {
          title
          text
          cookiesName
          clickHere
          buttonText
        }
      }
      siteUrl
      recaptchaKey
      name
      defaultLocale
      locales {
        _key
        title
        index
        icon {
          ${image}
        }
      }
    }
  }
  allSanityArticlesItem {
    nodes {
      seo {
        description
        twitterCard
        titleTemplate
        title
        ogType
        keywords
        image {
          altText
          image {
            asset {
              url
              height
              width
            }
          }
        }
      }
      id
      date
      title
      i18n_lang
      position
      component
      author
      sharedText
      desc
      buttonTitle
      slug {
        current
      }
      breadcrumbs {
        ${link}
      }
      categoryReference {
        _id
      }
      coverImage {
        ${image}
      }
      sections {
        ${footer}
        ${header}
        ${ctaForm}
        ${contactUs}
      }
      articleSeparator {
        position
        sectionTitle
        title
        component
        bgColor
        buttonText
        id
        messagePlaceholder
      }
      content {
        text
        title
        component
        contentImage {
          ${image}
        }
    }
    }
  }
  allSanityBlogCategory {
    nodes {
      seo {
        description
        twitterCard
        titleTemplate
        title
        ogType
        keywords
        image {
          altText
          image {
            asset {
              url
              height
              width
            }
          }
        }
      }
      _id
      id
      title
      position
      component
      numberOfPosts
      i18n_lang
      sections {
        ${footer}
        ${header}
        ${ctaForm}
        ${contactUs}
      }
      slug {
        current
      }
      breadcrumbs {
        ${link}
      }
      articleSeparator {
        bgColor
        buttonText
        component
        title
        position
        messagePlaceholder
      }
    }
  }
  allSanityPage {
  nodes {
      seo {
        description
        twitterCard
        titleTemplate
        title
        ogType
        keywords
        image {
          altText
          image {
            asset {
              url
              height
              width
            }
          }
        }
      }
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
          ${blockText}
          ${relatedArticles}
      }
    }
  }}
  `);

  if (errors) {
    reporter.panicOnBuild("There was an error loading your Sanity pages", errors);
    return;
  }

  const pages = data.allSanityPage.nodes;
  const { cookies, siteUrl, recaptchaKey, name, defaultLocale, locales } =
    data.allSanitySettings.nodes[0];

  const blogPages = data.allSanityBlogCategory.nodes;
  const articles = data.allSanityArticlesItem.nodes;
  const casesCountry = data.allSanityCasesCountry.nodes;
  const casesItem = data.allSanityCasesItem.nodes;

  if (casesCountry.length > 0) {
    casesCountry.forEach((page) => {
      const url = page.slug.current;
      const casesCountryItem =
        page.slug.current === "/cases"
          ? casesItem
          : [...casesItem].filter((el) => page._id === el.country._id);

      const technologyFilter = [
        ...new Set(casesCountryItem.reduce((prev, curr) => prev.concat(curr.technologies), [])),
      ];

      createPage({
        path: url,
        component: template,
        context: {
          baseUrl: defaultLocale === page.i18n_lang ? "/" : `/${page.i18n_lang}/`,
          locales,
          currentLocale: page.i18n_lang,
          defaultLocale,
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
          sections: (
            [
              ...page.sections,
              {
                ...page,
                casesItems: casesCountryItem,
                countryFilter: casesCountry,
                technologyFilter,
              },
            ] || []
          )
            .filter(({ id }) => id)
            .sort((a, b) => +a.position - +b.position),
        },
      });
    });
  }

  if (casesItem.length > 0) {
    casesItem.forEach((page) => {
      const url = page.slug.current;
      createPage({
        path: url,
        component: template,
        context: {
          baseUrl: defaultLocale === page.i18n_lang ? "/" : `/${page.i18n_lang}/`,
          locales,
          currentLocale: page.i18n_lang,
          defaultLocale,
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
          sections: ([...page.content, { ...page }] || [])
            .filter(({ id }) => id)
            .sort((a, b) => +a.position - +b.position),
        },
      });
    });
  }

  if (articles.length > 0) {
    articles.forEach((page) => {
      const url = page.slug.current;
      createPage({
        path: url,
        component: template,
        context: {
          baseUrl: defaultLocale === page.i18n_lang ? "/" : `/${page.i18n_lang}/`,
          locales,
          currentLocale: page.i18n_lang,
          defaultLocale,
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
          sections: ([...page.sections, { ...page }] || [])
            .filter(({ id }) => id)
            .sort((a, b) => +a.position - +b.position),
        },
      });
    });
  }

  if (blogPages.length > 0) {
    blogPages.forEach((page) => {
      const categoryArticles =
        page.slug.current === "/blog"
          ? articles
          : [...articles].filter((el) => page._id === el.categoryReference._id);

      const pageCount = Math.ceil(categoryArticles.length / page.numberOfPosts);

      for (let currentPage = 0; currentPage < pageCount; currentPage += 1) {
        const url = page.slug.current + (currentPage === 0 ? "" : `/${1 + currentPage}`);

        const postItems = categoryArticles.slice(
          page.numberOfPosts * currentPage,
          page.numberOfPosts * (currentPage + 1),
        );

        createPage({
          path: url,
          component: template,
          context: {
            baseUrl: defaultLocale === page.i18n_lang ? "/" : `/${page.i18n_lang}/`,
            locales,
            currentLocale: page.i18n_lang,
            defaultLocale,
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
            sections: (
              [
                ...page.sections,
                { ...page, articles: postItems, categories: blogPages, pageCount },
              ] || []
            )
              .filter(({ id }) => id)
              .sort((a, b) => +a.position - +b.position),
          },
        });
      }
    });
  }

  if (pages.length > 0) {
    pages.forEach((page) => {
      const url = page.slug.current;
      createPage({
        path: url,
        component: template,
        context: {
          baseUrl: defaultLocale === page.i18n_lang ? "/" : `/${page.i18n_lang}/`,
          locales,
          currentLocale: page.i18n_lang,
          defaultLocale,
          recaptchaKey,
          seo: {
            ...(page.seo || {}),
            lang: page.i18n_lang,
            siteUrl,
            url,
            name,
          },

          cookieConsent: {
            ...cookies[page.i18n_lang],
            /* cookieName: config.googleAnalytics.cookieName, */
          },
          sections: (page.content || [])
            .filter(({ id }) => id)
            .sort((a, b) => +a.position - +b.position),
        },
      });
    });
  }
};
