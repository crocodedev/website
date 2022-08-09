import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Development from "@/sections/Development";
import Benefits from "@/sections/Benefits";
import ListOne from "@/sections/ListOne";
import CtaText from "@/sections/CtaText";
import SliderSteps from "@/sections/SliderSteps";
import ListThree from "@/sections/ListThree";
import Technologies from "@/sections/Technologies";
import CaseStudies from "@/sections/CaseStudies";
import Reviews from "@/sections/Reviews";
import RelatedArticles from "@/sections/RelatedArticles";
import ContactUs from "@/sections/ContactUs";
import Footer from "@/sections/Footer";
import CookiesPopup from "@/components/CookiesPopup";

import "destyle.css/destyle.css";

const DevelopmentPage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="DevelopmentPage" />
    <Global styles={[reboot, fontMontserrat]} />
    <Header />
    <Hero />
    <Development />
    <Benefits />
    <ListOne />
    <CtaText />
    <SliderSteps />
    <ListThree />
    <Technologies />
    <CaseStudies />
    <Reviews />
    <CtaText />
    <RelatedArticles />
    <ContactUs />
    <Footer />
    <CookiesPopup />
  </ThemeProvider>
);

export default DevelopmentPage;
