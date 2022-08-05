import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import Container from "@/components/Container";
import FooterWrapper from "@/components/Footer/FooterWrapper";
import FooterTopStack from "@/components/Footer/FooterTopStack";
import FooterBottomStack from "@/components/Footer/FooterBottomStack";
import FooterTop from "@/components/Footer/FooterTop";
import FooterBottom from "@/components/Footer/FooterBottom";
import FooterTopColumn from "@/components/Footer/FooterTopColumn";
import FooterLogo from "@/components/Footer/FooterLogo";
import FooterSocials from "@/components/Footer/FooterSocials";
import FooterCompanyInfo from "@/components/Footer/FooterCompanyInfo";
import FooterSocialLink from "@/components/Footer/FooterSocialLink";
import FooterLink from "@/components/Footer/FooterLink";
import Text from "@/components/Text";
import ImageStatic from "@/components/Image";

const dataPage = {
  logo: "uploads/footer-logo.svg",

  socials: [
    { logo: "uploads/footer-facebook.svg", src: "https://www.facebook.com" },
    { logo: "uploads/footer-linkedin.svg", src: "https://www.linkedin.com" },
  ],

  links: [
    {
      title: "Services",
      src: "/#",

      links: [
        {
          title: "Dedicated Teams",
          src: "/#",
        },
        {
          title: "MVP Development",
          src: "/#",
        },
        {
          title: "Custom Software",
          src: "/#",
        },
        {
          title: "Consulting",
          src: "/#",
        },
        {
          title: "Location Based Services",
          src: "/#",
        },
      ],
    },

    {
      title: "Technologies",
      src: "/#",
      links: [
        {
          title: "Location-based",
          src: "/#",
        },
        {
          title: "Front-end",
          src: "/#",
        },
        {
          title: "Back-end",
          src: "/#",
        },
        {
          title: "Mobile",
          src: "/#",
        },
        {
          title: "Cloud",
          src: "/#",
        },
      ],
    },
    {
      title: "About us",
      src: "/#",
      links: [
        {
          title: "Blog",
          src: "/#",
        },
        {
          title: "Contacts",
          src: "/#",
        },
      ],
    },
  ],
};

const Footer = ({ data = dataPage }) => {
  const theme = useTheme();
  return (
    <FooterWrapper>
      <Container>
        <FooterTop>
          <FooterCompanyInfo>
            <FooterLogo>
              <ImageStatic loading="lazy" src={data.logo} />
            </FooterLogo>
            <FooterSocials>
              {data.socials.map(({ logo, src }) => (
                <FooterSocialLink key={src} to={src}>
                  <ImageStatic src={logo} />
                </FooterSocialLink>
              ))}
            </FooterSocials>
          </FooterCompanyInfo>
          <FooterTopStack>
            {data.links.map(({ title, src, links }) => (
              <FooterTopColumn key={title}>
                <FooterLink isHeading to={src}>
                  {title}
                </FooterLink>
                {links.map(({ title: innerTitle, src: innerSrc }) => (
                  <FooterLink key={innerTitle} to={innerSrc}>
                    {innerTitle}
                  </FooterLink>
                ))}
              </FooterTopColumn>
            ))}
          </FooterTopStack>
        </FooterTop>
        <FooterBottom>
          <Text color={theme.palette.tertiary.contrastText}>
            2020 CODE DOT, LLC. All Rights Reserved
          </Text>
          <FooterBottomStack>
            <FooterLink isHeading>Privacy policy</FooterLink>
          </FooterBottomStack>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  data: PropTypes.exact({
    logo: PropTypes.string,
    socials: PropTypes.arrayOf(
      PropTypes.exact({
        logo: PropTypes.string,
        src: PropTypes.string,
      }),
    ),
    links: PropTypes.arrayOf(
      PropTypes.exact({
        title: PropTypes.string,
        src: PropTypes.string,
        links: PropTypes.arrayOf(
          PropTypes.exact({
            title: PropTypes.string,
            src: PropTypes.string,
          }),
        ),
      }),
    ),
  }).isRequired,
};

export default Footer;
