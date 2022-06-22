const { SITE_NAME: name, DEFAULT_LOCALE: lang } = process.env;

module.exports = {
  googleAnalytics: {
    cookieName: "crocode-google-analytics",
  },
  robots: {
    env: {
      development: {
        policy: [{ userAgent: "*", disallow: ["/"] }],
      },
      production: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  },
  pwa: {
    enabled: true,
    manifest: {
      name,
      short_name: name,
      lang,
      start_url: `/`,
      display: `standalone`,
      background_color: `#FFFFFF`,
      theme_color: `#7DBE3B`,
      icon: "src/icons/logo.inline.svg",
      legacy: false,
      cache_busting_mode: "none",
      // crossOrigin: `use-credentials`, // `use-credentials` or `anonymous`
      // theme_color_in_head: false,
    },
    offline: {
      workboxConfig: {
        globPatterns: ["**/icons*"],
      },
    },
  },
};
