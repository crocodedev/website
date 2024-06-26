// eslint-disable-next-line import/no-extraneous-dependencies
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { robots, pwa } = require("./config/site");

const {
  SITE_URL: siteUrl,
  GOOGLE_ANALYTICS_TRACKING_ID: trackingId,
  GOOGLE_TAGMANAGER_TRACKING_ID: tagManagerId,
} = process.env;

module.exports = {
  trailingSlash: "always",
  ...(siteUrl
    ? {
        siteMetadata: {
          siteUrl,
        },
      }
    : {}),
  plugins: [
    ...(siteUrl
      ? [
          {
            resolve: "gatsby-source-sanity",
            options: {
              projectId: process.env.SANITY_PROJECT_ID,
              dataset: process.env.SANITY_DATASET,
              token: process.env.SANITY_TOKEN,
              watchMode: true,
            },
          },
          {
            resolve: "gatsby-plugin-sitemap",
            options: {
              output: "/",
              resolveSiteUrl: () => siteUrl,
            },
          },
          {
            resolve: "gatsby-plugin-robots-txt",
            options: {
              host: "https://crocodelab.com",
              sitemap: "https://crocodelab.com/sitemap-index.xml",
              policy: [{ userAgent: "*", allow: "/" }],
            },
          },
          {
            resolve: "gatsby-plugin-htaccess",
            options: {
              RewriteBase: "/custom/",
              https: true,
              www: true,
              SymLinksIfOwnerMatch: true,
              host: "www.crocodelab.com", // if 'www' is set to 'false', be sure to also remove it here!
              redirect: [
                "RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]",
                {
                  from: "crocode.io",
                  to: "crocodelab.com",
                },
              ],
              custom: `
            # This is a custom rule!
            # This is a another custom rule!
        `,
            },
          },
        ]
      : []),
    ...(trackingId
      ? [
          {
            resolve: "gatsby-plugin-google-analytics",
            options: { trackingId, head: true },
          },
        ]
      : []),
 
    ...(pwa.enabled
      ? [
          {
            resolve: "gatsby-plugin-manifest",
            options: {
              ...(pwa.manifest || {}),
            },
          },
        ]
      : []),
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-sharp",
      options: {
        checkSupportedExtensions: false,
      },
    },
    /* */
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    ...(pwa.enabled
      ? [
          {
            resolve: "gatsby-plugin-offline",
            options: {
              ...pwa.offline,
            },
          },
        ]
      : []),
    "gatsby-plugin-eslint",
    "gatsby-plugin-netlify",
    "gatsby-plugin-htaccess",
  ],
  flags: {
    FAST_DEV: false, // Enable all experiments aimed at improving develop server start time
    DEV_SSR: false, // (Umbrella Issue (https://gatsby.dev/dev-ssr-feedback)) · Server Side Render (SSR) pages on full reloads during develop. Helps you detect SSR bugs and fix them without needing to do full builds. See umbrella issue for how to update custom webpack config
    PRESERVE_FILE_DOWNLOAD_CACHE: false, // (Umbrella Issue (https://gatsby.dev/cache-clearing-feedback)) · Don't delete the downloaded files cache when changing gatsby-node.js & gatsby-config.js files.
    PARALLEL_SOURCING: false, // EXPERIMENTAL · (Umbrella Issue (https://gatsby.dev/parallel-sourcing-feedback)) · Run all source plugins at the same time instead of serially. For sites with multiple source plugins, this can speedup sourcing and transforming considerably
  },
};
