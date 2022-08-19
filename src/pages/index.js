import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import PrivacyPolicy from "@/sections/PrivacyPolicy";
import Header from "@/sections/Header";

import "destyle.css/destyle.css";

const HomePage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="HomePage" />
    <Global styles={[reboot, fontMontserrat]} />
    <Header />
    <PrivacyPolicy />
  </ThemeProvider>
);

export default HomePage;
