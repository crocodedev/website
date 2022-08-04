import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import Header from "@/sections/Header";
import Article from "@/sections/Article";
import Hero from "@/sections/Hero";
import HeroMain from "@/sections/HeroMain";
import SliderSteps from "@/sections/SliderSteps";
import BlogList from "@/sections/BlogList";
import ListOne from "@/sections/ListOne";
import ListTwo from "@/sections/ListTwo";
import ListThree from "@/sections/ListThree";
import ListFour from "@/sections/ListFour";
import ListFive from "@/sections/ListFive";
import ListSix from "@/sections/ListSix";
import ListSeven from "@/sections/ListSeven";
import OurTeam from "@/sections/OurTeam";
import FAQ from "@/sections/FAQ";
import OurClients from "@/sections/OurClients";
import Contacts from "@/sections/Contacts";
import RelatedArticles from "@/sections/RelatedArticles";
import Reviews from "@/sections/Reviews";
import Footer from "@/sections/Footer";
import Benefits from "@/sections/Benefits";
import CtaText from "@/sections/CtaText";
import CtaForm from "@/sections/CtaForm";
import CtaImage from "@/sections/CtaImage";
import Technologies from "@/sections/Technologies";
import Development from "@/sections/Development";
import TextTwo from "@/sections/TextTwo";
import TextThree from "@/sections/TextThree";
import CookiesPopup from "@/components/CookiesPopup";
import CaseStudies from "@/sections/CaseStudies";
import Projects from "@/sections/Projects";
import ContactUs from "@/sections/ContactUs";
import TechnologyStack from "@/sections/TechnologyStack";
import Case from "@/sections/Case";

import "destyle.css/destyle.css";
import TextOne from "@/sections/TextOne";

const HomePage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="HomePage" />
    <Global styles={[reboot, fontMontserrat]} />
    <Header />
    <ContactUs />
    <Article />
    <Case />
    <TechnologyStack />
    <CaseStudies />
    <Projects />
    <SliderSteps />
    <HeroMain />
    <Technologies />
    <Hero />
    <Projects />
    <SliderSteps />
    <Development />
    <BlogList />
    <TextOne />
    <TextTwo />
    <TextThree />
    <ListOne />
    <ListTwo />
    <ListThree />
    <ListFour />
    <ListFive />
    <ListSix />
    <ListSeven />
    <Contacts />
    <CtaImage />
    <CtaForm />
    <CtaText />
    <RelatedArticles />
    <OurTeam />
    <FAQ />
    <OurClients />
    <Reviews />
    <Benefits />
    {/* <ContactUs /> */}
    <Footer />
    <CookiesPopup />
  </ThemeProvider>
);

export default HomePage;
