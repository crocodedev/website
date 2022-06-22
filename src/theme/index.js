const breakpoints = {
  values: {
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
    "2xl": 1684,
  },
};
const theme = {
  breakpoints: {
    ...breakpoints,
    up: (key) => `@media (min-width: ${breakpoints.values[key]}px)`,
    down: (key) => `@media (max-width: ${breakpoints.values[key] - 0.02}px)`,
    between: (min, max) =>
      `@media (min-width: ${breakpoints.values[min]}px) and (max-width: ${
        breakpoints.values[max] - 0.02
      }px)`,
  },
  palette: {
    primary: {
      main: "#7DBE3B",
      contrastText: "#fff",
    },
    secondary: {
      light: "#F4FDEA",
      main: "#E8FCD5",
      dark: "#448C0D",
    },
    tertiary: {
      main: "#222",
      contrastText: "#fff",
    },
    background: {
      paper: "#F8F8F8",
      default: "#FFF",
    },
    text: {
      primary: "#222",
      secondary: "#fff",
      disabled: "#A6A6A6",
    },
  },
  borderRadius: {
    small: 10,
    large: 20,
    button: 100,
    circle: "100%",
  },
  shadows: {
    header: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 2px 10px rgba(0, 0, 0, 0.1)",
    card: "0px 0px 1px rgba(0, 0, 0, 0.25), 0px 1px 1px rgba(0, 0, 0, 0.05)",
    cardAccent: "0px 0px 40px rgba(0, 0, 0, 0.06);",
    popup: "0px 0px 4px rgba(0, 0, 0, 0.1), 0px 8px 40px rgba(0, 0, 0, 0.2)",
  },
  typography: {
    rootFontSize: 16,
    pxToRem: (value) => `${(value / theme.typography.rootFontSize).toFixed(3)}rem`,
    fontFamily: `Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`,
    fontWeight: {
      bold: 700,
      semiBold: 600,
      medium: 500,
      regular: 400,
    },
    fontSize: {
      title1: 60,
      title2: 42,
      title3: 30,
      subtitle: 20,
      text: 16,
      captionText: 14,
    },
  },
};

export default theme;
