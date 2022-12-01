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
import BackUpButton from "@/components/BackUpButton";
import CookiesPopup from "@/components/CookiesPopup";

const Template = ({
  pageContext: { cookieConsent, baseUrl, seo, sections, locales, currentLocale, defaultLocale },
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Seo {...seo} />
      <Helmet defer={false} />
      <Global styles={[reboot, fontMontserrat]} />
      <CookiesPopup {...cookieConsent} />

      {sections.map(({ id, component, ...props }) => {
        const Component = Sections[component];
        if (!Component) return null;
        if (component === "Header") {
          return (
            <>
              <Component
                key={id}
                baseUrl={baseUrl}
                locales={locales}
                currentLocale={currentLocale}
                defaultLocale={defaultLocale}
                {...props}
              />
              <BackUpButton />
            </>
          );
        }
        return <Component key={id} baseUrl={baseUrl} {...props} />;
      })}
    </ThemeProvider>
  );
};

Template.propTypes = {
  pageContext: PropTypes.exact({
    cookies: PropTypes.object,
    baseUrl: PropTypes.string,
    seo: PropTypes.object,
    cookieConsent: PropTypes.object,
    locales: PropTypes.array,
    recaptchaKey: PropTypes.string,
    currentLocale: PropTypes.object,
    defaultLocale: PropTypes.string,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        component: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default Template;
