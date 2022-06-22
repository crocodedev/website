import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import theme from "@/theme";
import { Helmet } from "react-helmet";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="NotFoundPage" />
    <Global styles={[reboot, fontMontserrat]} />
    <div>NotFoundPage</div>
  </ThemeProvider>
);

export default NotFoundPage;
