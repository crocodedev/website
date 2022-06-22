import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import "destyle.css/destyle.css";
import SectionHeading from "@/components/SectionHeading";

const HomePage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="HomePage" />
    <Global styles={[reboot, fontMontserrat]} />
    <SectionHeading text="subscription" title="heading of section" />
  </ThemeProvider>
);

export default HomePage;
