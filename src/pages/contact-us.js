import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import Header from "@/sections/Header";
import ContactUs from "@/sections/ContactUs";
import Contacts from "@/sections/Contacts";
import Footer from "@/sections/Footer";
import CookiesPopup from "@/components/CookiesPopup";

import "destyle.css/destyle.css";

const ContactUsPage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="ContactUsPage" />
    <Global styles={[reboot, fontMontserrat]} />
    <Header />
    <ContactUs />
    <Contacts />
    <Footer />
    <CookiesPopup />
  </ThemeProvider>
);

export default ContactUsPage;
