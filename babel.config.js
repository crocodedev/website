/* eslint-disable no-template-curly-in-string */
module.exports = {
  presets: ["babel-preset-gatsby"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@": "./src",
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ["transform-react-remove-prop-types"],
    },
  },
};
