// eslint-disable-next-line import/no-extraneous-dependencies
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { robots, pwa } = require("./config/site");

const {
  SITE_URL: siteUrl,
  GOOGLE_ANALYTICS_TRACKING_ID: trackingId,
  // CONTENTFUL_SPACE_ID: spaceId,
  // CONTENTFUL_HOST: host,
  // CONTENTFUL_PREVIEW_ACCESS_TOKEN: previewAccessToken,
  // CONTENTFUL_ACCESS_TOKEN: accessToken,
  // CONTENTFUL_DELIVERY_TOKEN: deliveryToken,
  // CONTENTFUL_ENVIRONMENT: environment,
} = process.env;

// If you want to use the preview API please define
// CONTENTFUL_HOST and CONTENTFUL_PREVIEW_ACCESS_TOKEN in your
// environment config.
//
// CONTENTFUL_HOST should map to `preview.contentful.com`
// CONTENTFUL_PREVIEW_ACCESS_TOKEN should map to your
// Content Preview API token
//
// For more information around the Preview API check out the documentation at
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
//
// To change back to the normal CDA, remove the CONTENTFUL_HOST variable from your environment.
// const token = (host && previewAccessToken) || accessToken || deliveryToken;

// if (!spaceId || !token) {
//   throw new Error("Contentful spaceId and the access token need to be provided.")
// }

module.exports = {
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
            resolve: "gatsby-plugin-sitemap",
            options: {
              output: "/",
              resolveSiteUrl: () => siteUrl,
            },
          },
          {
            resolve: "gatsby-plugin-robots-txt",
            options: {
              ...(robots || {}),
            },
          },
        ]
      : []),
    ...(trackingId
      ? [
          {
            resolve: "gatsby-plugin-google-analytics",
            options: { trackingId, head: false },
          },
        ]
      : []),
    ...(pwa.enabled
      ? [
          {
            resolve: "gatsby-plugin-manifest",
            options: { ...(pwa.manifest || {}) },
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
    /*
    {
      resolve: "gatsby-source-contentful",
      options: {
        environment: environment || "master",
        spaceId,
        accessToken: token,
        ...(host ? { host } : {}),
      },
    },
*/
    "gatsby-transformer-inline-svg",
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
            options: { ...pwa.offline },
          },
        ]
      : []),
    "gatsby-plugin-eslint",
    "gatsby-plugin-netlify",
  ],
  flags: {
    FAST_DEV: false, // Enable all experiments aimed at improving develop server start time
    DEV_SSR: false, // (Umbrella Issue (https://gatsby.dev/dev-ssr-feedback)) · Server Side Render (SSR) pages on full reloads during develop. Helps you detect SSR bugs and fix them without needing to do full builds. See umbrella issue for how to update custom webpack config
    PRESERVE_FILE_DOWNLOAD_CACHE: false, // (Umbrella Issue (https://gatsby.dev/cache-clearing-feedback)) · Don't delete the downloaded files cache when changing gatsby-node.js & gatsby-config.js files.
    PARALLEL_SOURCING: false, // EXPERIMENTAL · (Umbrella Issue (https://gatsby.dev/parallel-sourcing-feedback)) · Run all source plugins at the same time instead of serially. For sites with multiple source plugins, this can speedup sourcing and transforming considerably
  },
};
