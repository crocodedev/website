import PropTypes from "prop-types";
import * as React from "react";
import Seo from "@/components/Seo";
import { Global, ThemeProvider } from "@emotion/react";
import * as Sections from "@/sections";

const Template = ({ pageContent: { baseUrl, seo, sections, cookieConsent, recaptchaKey } }) => {
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
  pageContent: PropTypes.exact({
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
