import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import theme from "@/theme";
import { Helmet } from "react-helmet";
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
