import { css } from "@emotion/react";

const fontUrl = "fonts/Montserrat/";

const fontMontserrat = css`
  @font-face {
    font-family: "Montserrat";
    src: local("Montserrat Regular"), local("Montserrat-Regular"),
      url("${fontUrl}Montserrat-Regular.woff2") format("woff2"),
      url("${fontUrl}Montserrat-Regular.woff") format("woff"),
      url("${fontUrl}Montserrat-Regular.ttf") format("truetype"),
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: "Montserrat";
    src: local("Montserrat Medium"), local("Montserrat-Medium"),
      url("${fontUrl}Montserrat-Medium.woff2") format("woff2"),
      url("${fontUrl}Montserrat-Medium.woff") format("woff"),
      url("${fontUrl}Montserrat-Medium.ttf") format("truetype"),
    font-weight: 500;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: "Montserrat";
    src: local("Montserrat SemiBold"), local("Montserrat-SemiBold"),
      url("${fontUrl}Montserrat-SemiBold.woff2") format("woff2"),
      url("${fontUrl}Montserrat-SemiBold.woff") format("woff"),
      url("${fontUrl}Montserrat-SemiBold.ttf") format("truetype"),
    font-weight: 600;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: "Montserrat";
    src: local("Montserrat Bold"), local("Montserrat-Bold"),
      url("${fontUrl}Montserrat-Bold.woff2") format("woff2"),
      url("${fontUrl}Montserrat-Bold.woff") format("woff"),
      url("${fontUrl}Montserrat-Bold.ttf") format("truetype"),
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }
`;

export default fontMontserrat;
