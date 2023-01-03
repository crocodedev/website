import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import Container from "@/components/Container";
import FooterWrapper from "@/components/Footer/FooterWrapper";
import FooterTopStack from "@/components/Footer/FooterTopStack";
import FooterTop from "@/components/Footer/FooterTop";
import FooterBottom from "@/components/Footer/FooterBottom";
import FooterTopColumn from "@/components/Footer/FooterTopColumn";
import FooterSocials from "@/components/Footer/FooterSocials";
import FooterCompanyInfo from "@/components/Footer/FooterCompanyInfo";
import FooterSocialLink from "@/components/Footer/FooterSocialLink";
import FooterLink from "@/components/Footer/FooterLink";
import Text from "@/components/Text";
import Image from "@/components/Image";

const Footer = ({ copyrightText, logoImage, socialIcons, column, bottomLinks, baseUrl }) => {
  const theme = useTheme();
  return (
    <FooterWrapper>
      <Container>
        <FooterTop>
          <FooterCompanyInfo>
            <a href='/'>
              <Image {...logoImage} />
            </a>
            <FooterSocials>
              {socialIcons?.map(({ iconImage, _key, link }) => (
                <FooterSocialLink key={_key} baseUrl={baseUrl} {...link}>
                  <Image {...iconImage} />
                </FooterSocialLink>
              ))}
            </FooterSocials>
          </FooterCompanyInfo>
          <FooterTopStack>
            {column?.map(({ title, _key, items, link: topLink }) => (
              <FooterTopColumn key={_key}>
                <FooterLink isHeading baseUrl={baseUrl} {...topLink}>
                  {title}
                </FooterLink>
                {items?.map(({ _key: id, link }) => (
                  <FooterLink key={id} {...link} baseUrl={baseUrl}>
                    {link.title}
                  </FooterLink>
                ))}
              </FooterTopColumn>
            ))}
          </FooterTopStack>
        </FooterTop>

        <FooterBottom>
          <Text color={theme.palette.tertiary.contrastText}>{copyrightText}</Text>
          <div>
            {bottomLinks?.map((link) => (
              <FooterLink {...link} baseUrl={baseUrl} key={link._key} isHeading>
                {link.title}
              </FooterLink>
            ))}
          </div>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  copyrightText: PropTypes.string.isRequired,
  logoImage: PropTypes.object.isRequired,
  socialIcons: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string,
      iconImage: PropTypes.object,
      link: PropTypes.object,
    }),
  ).isRequired,
  column: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string,
      _key: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.exact({
          link: PropTypes.object,
        }),
      ),
    }),
  ).isRequired,
  bottomLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Footer;
