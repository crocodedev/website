import * as React from "react";
import PropTypes from "prop-types";
import { ClassNames } from "@emotion/react";
import ReactCookieConsent from "react-cookie-consent";
import Text from "./Text";
import CookiesPopupText from "./CookiesPopup/CookiesPopupText";
import CookiesPopupLink from "./CookiesPopup/CookiesPopupLink";

const pageData = {
  title: "Our website uses cookies",
  desc: "This site uses cookies for analytics, personalization and advertising. By continuing to browse it, you agree to our use of cookies. To find out more or change your cookie settings, ",
  btnText: "Accept",
};

const CookiesPopup = ({ data = pageData }) => {
  const [showContent, setShowContent] = React.useState(false);

  const { title, desc, btnText } = data;

  React.useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 3500);
  }, []);

  if (typeof window === "undefined" || showContent)
    return (
      <ClassNames>
        {({ theme, css }) => {
          const containerClasses = css`
            position: fixed;
            z-index: 999;
            left: 50%;
            transform: translate(-50%, 0);
            bottom: 0;
            display: flex;
            justify-content: space-between;
            margin-right: 0;
            margin-left: 0;
            background-color: ${theme.palette.secondary.main};
            border-radius: ${theme.borderRadius.small};

            ${theme.breakpoints.down("md")} {
              width: 100%;
              padding: 20px;
              gap: 20px;
              flex-direction: column;
            }

            ${theme.breakpoints.between("md", "lg")} {
              width: 100%;
              padding: 20px;
            }

            ${theme.breakpoints.between("lg", "xl")} {
              width: 750px;
              padding: 20px;
            }

            ${theme.breakpoints.up("xl")} {
              width: 900px;
              padding: 40px;
            }
          `;

          const buttonWrapperClasses = css`
            align-self: center;
          `;

          const buttonClasses = css`
            font-size: ${theme.typography.fontSize.captionText}px;
            border-radius: ${theme.borderRadius.button};
            line-height: 20px;
            text-align: center;
            cursor: pointer;
            transition: 0.3s;
            color: ${theme.palette.primary.contrastText};
            background-color: ${theme.palette.primary.main};
            font-weight: ${theme.typography.fontWeight.bold};
            padding: 12px 25px;
            display: block;

            &:hover {
              color: ${theme.palette.primary.contrastText};
              background-color: ${theme.palette.secondary.dark};
            }
          `;
          return (
            <ReactCookieConsent
              location="none"
              disableStyles={true}
              disableButtonStyles={true}
              buttonText={btnText}
              containerClasses={containerClasses}
              buttonClasses={buttonClasses}
              buttonWrapperClasses={buttonWrapperClasses}
            >
              <CookiesPopupText>
                <Text fontWeight="bold" color={theme.palette.primary.main}>
                  {title}
                </Text>
                <Text>
                  {desc}
                  <CookiesPopupLink>click here.</CookiesPopupLink>
                </Text>
              </CookiesPopupText>
            </ReactCookieConsent>
          );
        }}
      </ClassNames>
    );
  return null;
};

CookiesPopup.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    desc: PropTypes.string,
    btnText: PropTypes.string,
  }).isRequired,
};

export default CookiesPopup;
