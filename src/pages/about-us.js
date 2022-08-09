import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import TextTwo from "@/sections/TextTwo";
import OurClients from "@/sections/OurClients";
import CtaText from "@/sections/CtaText";
import RelatedArticles from "@/sections/RelatedArticles";
import Reviews from "@/sections/Reviews";
import ContactUs from "@/sections/ContactUs";
import Footer from "@/sections/Footer";
import CookiesPopup from "@/components/CookiesPopup";

import "destyle.css/destyle.css";

const AboutUsPage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="AboutUsPage" />
    <Global styles={[reboot, fontMontserrat]} />
    <Header />
    <Hero />
    <TextTwo />
    <TextTwo />
    <OurClients />
    <CtaText />
    <RelatedArticles />
    <Reviews />
    <ContactUs />
    <Footer />
    <CookiesPopup />
  </ThemeProvider>
);

export default AboutUsPage;
