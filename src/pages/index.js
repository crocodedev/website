import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import "destyle.css/destyle.css";
import OurTeam from "@/sections/OurTeam";

const HomePage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="HomePage" />
    <Global styles={[reboot, fontMontserrat]} />
    <div>HomePage</div>
    <OurTeam />
  </ThemeProvider>
);

export default HomePage;
