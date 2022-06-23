import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import ListTwo from "@/sections/ListTwo";
import OurTeam from "@/sections/OurTeam";
import RelatedArticles from "@/sections/RelatedArticles";
import ListThree from "@/sections/ListThree";
import ListSix from "@/sections/ListSix";
import ListOne from "@/sections/ListOne";

import "destyle.css/destyle.css";

const HomePage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="HomePage" />
    <Global styles={[reboot, fontMontserrat]} />
    <ListTwo />
    <OurTeam />
    <RelatedArticles />
    <ListThree />
    <ListOne />
    <ListSix />
  </ThemeProvider>
);

export default HomePage;
