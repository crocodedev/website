import React from "react";
import { Helmet } from "react-helmet";
import { Global, ThemeProvider } from "@emotion/react";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import NotFound from "@/sections/NotFound";

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="NotFoundPage" />
    <Global styles={[reboot, fontMontserrat]} />
    <NotFound />
  </ThemeProvider>
);

export default NotFoundPage;
