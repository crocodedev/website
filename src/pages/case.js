import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import Header from "@/sections/Header";
import Case from "@/sections/Case";
import TextThree from "@/sections/TextThree";
import TechnologyStack from "@/sections/TechnologyStack";
import Reviews from "@/sections/Reviews";
import CtaImage from "@/sections/CtaImage";
import CaseStudies from "@/sections/CaseStudies";
import ContactUs from "@/sections/ContactUs";
import Footer from "@/sections/Footer";
import CookiesPopup from "@/components/CookiesPopup";

import "destyle.css/destyle.css";

const CasePage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="CasePage" />
    <Global styles={[reboot, fontMontserrat]} />
    <Header />
    <Case />
    {/* Challenge */}
    <TextThree />
    <TechnologyStack />
    <TextThree />
    <Reviews />
    <CtaImage />
    <CaseStudies />
    <ContactUs />
    <Footer />
    <CookiesPopup />
  </ThemeProvider>
);

export default CasePage;
