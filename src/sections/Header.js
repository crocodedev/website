import React, { useCallback } from "react";
import { useTheme, Global, css } from "@emotion/react";
import PropTypes from "prop-types";
import HeaderContainer from "@/components/Header/HeaderContainer";
import HeaderLogo from "@/components/Header/HeaderLogo";
import HeaderWrapper from "@/components/Header/HeaderWrapper";
import Image from "@/components/Image";
import HeaderContent from "@/components/Header/HeaderContent";
import HeaderContentItem from "@/components/Header/HeaderContentItem";
import Text from "@/components/Text";
import Button from "@/components/Button";
import HeaderLang from "@/components/Header/HeaderLang";
import HeaderLangMenu from "@/components/Header/HeaderLangMenu";
import HeaderLangWrapper from "@/components/Header/HeaderLangWrapper";
import HeaderLangMenuItem from "@/components/Header/HeaderLangMenuItem";
import HeaderMenuIcon from "@/components/Header/HeaderMenuIcon";
import HeaderMenuButton from "@/components/Header/HeaderMenuButton";
import HeaderContentBtnWrapper from "@/components/Header/HeaderContentBtnWrapper";
import HeaderContentItemShopify from "@/components/Header/HeaderContentItemShopify";
import { Link } from "gatsby";
import HeaderMenuWrapper from "@/components/Header/HeaderMenuWrapper";
import HeaderContentWrapper from "@/components/Header/HeaderContentWrapper";
import useScrollingUp from "@/hooks/use-scrollingUp";
import ContactUsModal from "@/sections/ContactUsModal";
import useMedia from "@/hooks/use-media";

const Header = ({
  locales,
  logoImage,
  linkWithIcon,
  headerLinks,
  headerButton,
  baseUrl,
  currentLocale,
  defaultLocale,
  touchUsModal,
}) => {
  const theme = useTheme();
  const [active, setActive] = React.useState(false);
  const offset = useMedia(["(max-width: 768px)"], [70], 90);
  const isScrollingUp = useScrollingUp(offset);

  React.useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active]);
  const [closeModal, setCloseModal] = React.useState(false);
  const changeModalContactUs = () => {
    setCloseModal(!closeModal);
  };

  const handleSetActive = useCallback(() => {
    setActive(!active);
  }, [active]);

  return (
    <>
      {closeModal && (
        <Global
          styles={css`
            body {
              overflow: hidden !important;
            }
          `}
        />
      )}
      <HeaderWrapper variant={`${isScrollingUp ? "sticky" : ""}`}>
        <HeaderContainer>
          <HeaderLogo href="/">
            <Image loading="lazy" {...logoImage} />
          </HeaderLogo>
          <HeaderContentWrapper variant={active} onClick={handleSetActive} />
          <HeaderContent variant={active}>
            {linkWithIcon && (
              <HeaderContentItemShopify {...linkWithIcon.link} baseUrl={baseUrl}>
                <Image {...linkWithIcon.icon} />
                <Text color={theme.palette.text.primary} lineHeight="sm" fontWeight="medium">
                  {linkWithIcon.link.title}
                </Text>
              </HeaderContentItemShopify>
            )}
            {headerLinks?.map((link) => {
              console.log(link);
              return (
                <HeaderContentItem
                  active={
                    typeof window !== "undefined" &&
                    link?.linkInternal?.reference?.slug?.current?.split("/")[1] ===
                      window.location.pathname.split("/")[1]
                  }
                  baseUrl={baseUrl}
                  {...link}
                  key={link._key}
                >
                  {link?.title}
                </HeaderContentItem>
              );
            })}
            {headerButton && (
              <HeaderContentBtnWrapper>
                <Button aria-label="Contact us" handler={changeModalContactUs} variant="contained">
                  {headerButton.title}
                </Button>
              </HeaderContentBtnWrapper>
            )}
            {locales && (
              <HeaderLangWrapper>
                <HeaderLang>
                  <Image
                    loading="lazy"
                    {...locales?.find((locale) => locale.index === currentLocale).icon}
                  />
                </HeaderLang>
                <HeaderLangMenu>
                  {locales?.map(({ icon, _key, title, index }) => {
                    return index !== currentLocale ? (
                      <HeaderLangMenuItem
                        as={Link}
                        to={`${index !== defaultLocale ? `/${index}` : ""}/${
                          typeof window !== "undefined" &&
                          window.location.pathname
                            .replace(`/${currentLocale}`, "")
                            .split("/")
                            .filter((el) => el)
                            .join("/")
                        }`}
                        key={_key}
                      >
                        <Image loading="lazy" {...icon} />
                        <Text>{title}</Text>
                      </HeaderLangMenuItem>
                    ) : null;
                  })}
                </HeaderLangMenu>
              </HeaderLangWrapper>
            )}
          </HeaderContent>
          <HeaderMenuWrapper>
            <HeaderMenuButton aria-label="Menu" onClick={handleSetActive}>
              <HeaderMenuIcon variant={active} />
            </HeaderMenuButton>
          </HeaderMenuWrapper>
        </HeaderContainer>
      </HeaderWrapper>
      <ContactUsModal
        touchUsModal={touchUsModal}
        handler={changeModalContactUs}
        isOpen={closeModal}
      />
    </>
  );
};

Header.propTypes = {
  touchUsModal: PropTypes.object.isRequired,
  locales: PropTypes.array.isRequired,
  logoImage: PropTypes.object.isRequired,
  baseUrl: PropTypes.string.isRequired,
  headerButton: PropTypes.object.isRequired,
  currentLocale: PropTypes.object.isRequired,
  defaultLocale: PropTypes.object.isRequired,
  linkWithIcon: PropTypes.exact({
    icon: PropTypes.object,
    link: PropTypes.exact({
      title: PropTypes.string,
    }),
  }).isRequired,
  headerLinks: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string,
      link: PropTypes.object,
    }),
  ).isRequired,
};

export default Header;
