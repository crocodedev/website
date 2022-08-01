import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import SliderSteps from "@/sections/SliderSteps";
import BlogList from "@/sections/BlogList";
import TextOne from "@/sections/TextOne";
import ListOne from "@/sections/ListOne";
import ListTwo from "@/sections/ListTwo";
import ListThree from "@/sections/ListThree";
import ListFour from "@/sections/ListFour";
import ListFive from "@/sections/ListFive";
import ListSix from "@/sections/ListSix";
import ListSeven from "@/sections/ListSeven";
import Projects from "@/sections/Projects";
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

import "destyle.css/destyle.css";
import Hero from "@/sections/Hero";
import HeroMain from "@/sections/HeroMain";
import Header from "@/sections/Header";

const HomePage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="HomePage" />
    <Global styles={[reboot, fontMontserrat]} />
    <Header />
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
    <Footer />
  </ThemeProvider>
);

export default HomePage;
