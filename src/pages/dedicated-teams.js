import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import ListThree from "@/sections/ListThree";
import ListSix from "@/sections/ListSix";
import SliderSteps from "@/sections/SliderSteps";
import ListFour from "@/sections/ListFour";
import Technologies from "@/sections/Technologies";
import CaseStudies from "@/sections/CaseStudies";
import Reviews from "@/sections/Reviews";
import ContactUs from "@/sections/ContactUs";
import Footer from "@/sections/Footer";
import CookiesPopup from "@/components/CookiesPopup";

import "destyle.css/destyle.css";

const DedicatedTeamsPage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="DedicatedTeamsPage" />
    <Global styles={[reboot, fontMontserrat]} />
    <Header />
    <Hero />
    <ListThree />
    <ListSix />
    <SliderSteps />
    <ListFour />
    <Technologies />
    <CaseStudies />
    <Reviews />
    <ContactUs />
    <Footer />
    <CookiesPopup />
  </ThemeProvider>
);

export default DedicatedTeamsPage;
