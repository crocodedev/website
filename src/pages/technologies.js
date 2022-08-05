import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Technologies from "@/sections/Technologies";
import ListOne from "@/sections/ListOne";
import Reviews from "@/sections/Reviews";
import ContactUs from "@/sections/ContactUs";
import Footer from "@/sections/Footer";
import CookiesPopup from "@/components/CookiesPopup";

import "destyle.css/destyle.css";

const TechnologiesPage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="TechnologiesPage" />
    <Global styles={[reboot, fontMontserrat]} />
    <Header />
    <Hero />
    <Technologies />
    <ListOne />
    <Reviews />
    <ContactUs />
    <Footer />
    <CookiesPopup />
  </ThemeProvider>
);

export default TechnologiesPage;
