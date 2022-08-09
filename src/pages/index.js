import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import TextOne from "@/sections/TextOne";
import Hero from "@/sections/Hero";
import HeroMain from "@/sections/HeroMain";
import ContactUsModal from "@/sections/ContactUsModal";
import SliderSteps from "@/sections/SliderSteps";
import BlogList from "@/sections/BlogList";
import ListOne from "@/sections/ListOne";
import ListTwo from "@/sections/ListTwo";
import TextOne from "@/sections/TextOne";
import OurTeam from "@/sections/OurTeam";
import Technologies from "@/sections/Technologies";
import CaseStudies from "@/sections/CaseStudies";
import Reviews from "@/sections/Reviews";
import RelatedArticles from "@/sections/RelatedArticles";
import ContactUs from "@/sections/ContactUs";
import Footer from "@/sections/Footer";
import CookiesPopup from "@/components/CookiesPopup";

import "destyle.css/destyle.css";

const HomePage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="HomePage" />
    <Global styles={[reboot, fontMontserrat]} />
    <Header />
    <HeroMain />
    <ListOne />
    <ListTwo />
    <TextOne />
    <OurTeam />
    <Technologies />
    <CaseStudies />
    <Reviews />
    <RelatedArticles />
    <ContactUs />
    <Footer />
    <ContactUsModal />
    <CookiesPopup />
  </ThemeProvider>
);

export default HomePage;
