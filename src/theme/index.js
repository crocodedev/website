const theme = {
  breakpoints: {
    values: {
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1280,
      "2xl": 1692,
    },

    up(key) {
      return `@media (min-width: ${this.values[key]}px)`;
    },
    down(key) {
      return `@media (max-width: ${this.values[key] - 0.02}px)`;
    },
    between(min, max) {
      return `@media (min-width: ${this.values[min]}px) and (max-width: ${
        this.values[max] - 0.02
      }px)`;
    },
  },
  palette: {
    primary: {
      main: "#7dbe3b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f4fdea",
      main: "#e8fcd5",
      dark: "#448c0d",
    },
    tertiary: {
      main: "#222",
      contrastText: "#fff",
    },
    background: {
      paper: "#f8f8f8",
      default: "#FFF",
    },
    text: {
      primary: "#222",
      secondary: "#fff",
      disabled: "#a6a6a6",
    },
  },
  borderRadius: {
    small: "10px",
    large: "20px",
    button: "100px",
    circle: "100%",
  },
  linearGradient: {
    light: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%)",
    paper: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f8f8f8 100%)",
  },
  shadows: {
    header: "0 0 2px rgba(0, 0, 0, 0.2), 0 2px 10px rgba(0, 0, 0, 0.1)",
    card: "0 0 1px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.05)",
    cardAccent: "0 0 40px rgba(0, 0, 0, 0.06)",
    popup: "0 0 4px rgba(0, 0, 0, 0.1), 0 8px 40px rgba(0, 0, 0, 0.2)",
  },
  typography: {
    rootFontSize: 16,
    pxToRem(value) {
      return `${(value / this.rootFontSize).toFixed(3)}rem`;
    },
    fontFamily: `Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`,
    fontWeight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    fontSize: {
      title0: 80,
      title1: 60,
      title2: 42,
      title3: 30,
      subtitle: 20,
      link: 18,
      text: 16,
      captionText: 14,
    },
    lineHeight: {
      "2xsm": "100%",
      xsm: "120%",
      sm: "150%",
      md: "170%",
      lg: "200%",
    },
  },
};

export default theme;
