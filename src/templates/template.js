import Seo from "@/components/Seo";
import { Global, ThemeProvider } from "@emotion/react";
import * as React from "react";

const Template = ({ pageContent: { baseUrl, seo, sections, cookieConsent, recaptchaKey } }) => {
  return (
    <ThemeProvider theme={theme}>
      <Seo {...seo} />
      <Helmet defer={false} title="HomePage" />
      <Global styles={[reboot, fontMontserrat]} />
    </ThemeProvider>
  );
};
