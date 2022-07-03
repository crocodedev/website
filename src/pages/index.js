import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { Helmet } from "react-helmet";

import theme from "@/theme";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

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
import CreateProject from "@/sections/CreateProject";
import Footer from "@/sections/Footer";
import CtaForm from "@/sections/CtaForm";
// import Benefits from "@/sections/Benefits";

import "destyle.css/destyle.css";

const HomePage = () => (
  <ThemeProvider theme={theme}>
    <Helmet defer={false} title="HomePage" />
    <Global styles={[reboot, fontMontserrat]} />
    <CtaForm />
    <ListSix />
    <ListSeven />
    <Contacts />
    <RelatedArticles />
    <CreateProject />
    <ListOne />
    <ListTwo />
    <ListThree />
    <ListFour />
    <ListFive />
    <OurTeam />
    <FAQ />
    <OurClients />
    <RelatedArticles />
    <Reviews />
    {/* <Benefits /> */}
    <Footer />
  </ThemeProvider>
);

export default HomePage;
