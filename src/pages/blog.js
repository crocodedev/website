import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import Header from "@/sections/Header";
import BlogList from "@/sections/BlogList";
import CtaForm from "@/sections/CtaForm";
import ContactUs from "@/sections/ContactUs";
import Footer from "@/sections/Footer";
import CookiesPopup from "@/components/CookiesPopup";

import "destyle.css/destyle.css";

const BlogPage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="BlogPage" />
    <Global styles={[reboot, fontMontserrat]} />
    <Header />
    <BlogList />
    <CtaForm />
    <ContactUs />
    <Footer />
    <CookiesPopup />
  </ThemeProvider>
);

export default BlogPage;
