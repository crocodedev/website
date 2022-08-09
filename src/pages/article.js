import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import Header from "@/sections/Header";
import Article from "@/sections/Article";
import Footer from "@/sections/Footer";
import CookiesPopup from "@/components/CookiesPopup";

import "destyle.css/destyle.css";

const ArticlePage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="ArticlePage" />
    <Global styles={[reboot, fontMontserrat]} />
    <Header />
    <Article />
    <Footer />
    <CookiesPopup />
  </ThemeProvider>
);

export default ArticlePage;
