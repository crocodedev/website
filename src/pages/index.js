import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import ListOne from "@/sections/ListOne";
import ListTwo from "@/sections/ListTwo";
import ListThree from "@/sections/ListThree";
import ListFour from "@/sections/ListFour";
import ListSix from "@/sections/ListSix";
import OurTeam from "@/sections/OurTeam";
import RelatedArticles from "@/sections/RelatedArticles";

import "destyle.css/destyle.css";

const HomePage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="HomePage" />
    <Global styles={[reboot, fontMontserrat]} />
    <ListSix />
    <ListOne />
    <ListTwo />
    <ListThree />
    <ListFour />
    <OurTeam />
    <RelatedArticles />
  </ThemeProvider>
);

export default HomePage;
