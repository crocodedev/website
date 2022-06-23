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

const data = {
  logo: "uploads/logo.svg",
  socials: [
    { logo: "uploads/facebook.svg", src: "www.facebook.com" },
    { logo: "uploads/linkedin.svg", src: "www.linkedin.com" },
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

const Footer = () => {
  const theme = useTheme();
  return (
    <FooterWrapper>
      <Container>
        <FooterTop>
          <FooterCompanyInfo>
            <FooterLogo />
            <FooterSocials>
              <FooterSocialLink />
              <FooterSocialLink />
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

export default Footer;
