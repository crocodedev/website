import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import ListTwo from "@/sections/ListTwo";
import FAQ from "@/sections/FAQ";
import Reviews from "@/sections/Reviews";
import ContactUs from "@/sections/ContactUs";
import Footer from "@/sections/Footer";
import CookiesPopup from "@/components/CookiesPopup";

import "destyle.css/destyle.css";

const ServicesPage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="ServicesPage" />
    <Global styles={[reboot, fontMontserrat]} />
    <Header />
    <Hero />
    <ListTwo />
    <FAQ />
    <Reviews />
    <ContactUs />
    <Footer />
    <CookiesPopup />
  </ThemeProvider>
);

export default ServicesPage;
