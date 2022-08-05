import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import TextTwo from "@/sections/TextTwo";
import ListSeven from "@/sections/ListSeven";
import CtaText from "@/sections/CtaText";
import SliderSteps from "@/sections/SliderSteps";
import ListThree from "@/sections/ListThree";
import CaseStudies from "@/sections/CaseStudies";
import Reviews from "@/sections/Reviews";
import ContactUs from "@/sections/ContactUs";
import Footer from "@/sections/Footer";
import CookiesPopup from "@/components/CookiesPopup";

import "destyle.css/destyle.css";

const MvpDevelopmentPage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="MvpDevelopmentPage" />
    <Global styles={[reboot, fontMontserrat]} />
    <Header />
    <Hero />
    <TextTwo />
    <ListSeven />
    <CtaText />
    <SliderSteps />
    <ListThree />
    <CaseStudies />
    <Reviews />
    <ContactUs />
    <Footer />
    <CookiesPopup />
  </ThemeProvider>
);

export default MvpDevelopmentPage;
