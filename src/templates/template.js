import PropTypes from "prop-types";
import * as React from "react";
import Seo from "@/components/Seo";
import { Global, ThemeProvider } from "@emotion/react";
import * as Sections from "@/sections";
import theme from "@/theme";
import { Helmet } from "react-helmet";
import reboot from "@/styles/reboot";
import fontMontserrat from "@/styles/fontMontserrat";

import "destyle.css/destyle.css";

const Template = ({ pageContext: { baseUrl, seo, sections } }) => {
  console.log(sections);
  return (
    <ThemeProvider theme={theme}>
      <Seo {...seo} />
      <Helmet defer={false} title="HomePage" />
      <Global styles={[reboot, fontMontserrat]} />
      {sections.map(({ id, component, ...props }) => {
        const Component = Sections[component];
        if (!Component) return null;
        return <Component key={id} baseUrl={baseUrl} {...props} />;
      })}
    </ThemeProvider>
  );
};

Template.propTypes = {
  pageContext: PropTypes.exact({
    baseUrl: PropTypes.string,
    seo: PropTypes.object,
    cookieConsent: PropTypes.object,
    recaptchaKey: PropTypes.string,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        component: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default Template;
