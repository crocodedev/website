const { SITE_NAME: name, DEFAULT_LOCALE: lang } = process.env

module.exports = {
  googleAnalytics: {
    cookieName: "crocode-google-analytics",
  },
  robots: {
    env: {
      development: {
        policy: [
          { userAgent: "*", disallow: ["/"] },
          { userAgent: "*", disallow: ["/portfolio-1/"] },
        ],
      },
      production: {
        policy: [
          { userAgent: "*", allow: "/" },
          { userAgent: "*", disallow: ["/portfolio-1/"] },
        ],
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
      background_color: `#fff`,
      theme_color: `#7dbe3b`,
      icon: "src/icons/favicon.svg",
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
}
