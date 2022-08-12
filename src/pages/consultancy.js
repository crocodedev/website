import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import ListSeven from "@/sections/ListSeven";
import ListFive from "@/sections/ListFive";
import TextTwo from "@/sections/TextTwo";
import Reviews from "@/sections/Reviews";
import RelatedArticles from "@/sections/RelatedArticles";
import ContactUs from "@/sections/ContactUs";
import Footer from "@/sections/Footer";
import CookiesPopup from "@/components/CookiesPopup";

import "destyle.css/destyle.css";

const ConsultancyPage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="ConsultancyPage" />
    <Global styles={[reboot, fontMontserrat]} />
    <Header />
    <Hero color="gray" />
    <ListSeven />
    <ListFive />
    <TextTwo />
    <Reviews />
    <RelatedArticles />
    <ContactUs />
    <Footer />
    <CookiesPopup />
  </ThemeProvider>
);

export default ConsultancyPage;
