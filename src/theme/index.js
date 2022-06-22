const theme = {
  breakpoints: {
    values: {
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1280,
      "2xl": 1536,
      "3xl": 1920,
    },
    up: (key) => `@media (min-width: ${this.breakpoints.values[key]}px)`,
    down: (key) => `@media (max-width: ${this.breakpoints.values[key] - 0.02}px)`,
    between: (min, max) =>
      `@media (min-width: ${this.breakpoints.values[min]}px) and (max-width: ${
        this.breakpoints.values[max] - 0.02
      }px)`,
  },
  palette: {
    // common: {
    //   black: "#000",
    //   white: "#fff",
    // },
    primary: {
      main: "#7DBE3B",
    },
    // gray: {
    //   50: "#F8F8FB",
    //   100: "#F3F3F9",
    // },
  },
  // borderRadius: 20,
  typography: {
    rootFontSize: 16,
    pxToRem: (value) => `${(value / this.typography.rootFontSize).toFixed(3)}rem`,
    fontFamily: `Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`,
  },
};

export default theme;
