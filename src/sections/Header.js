import React from "react";
import { useTheme } from "@emotion/react";
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
import Link from "gatsby";
import HeaderMenuWrapper from "@/components/Header/HeaderMenuWrapper";
import HeaderContentWrapper from "@/components/Header/HeaderContentWrapper";
import useScrollingUp from "@/hooks/use-scrollingUp";
import ContactUsModal from "@/sections/ContactUsModal";

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
  const [active, setActive] = React.useState("");

  const isScrollingUp = useScrollingUp();

  React.useEffect(() => {
    if(active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active]);
  const [closeModal, setCloseModal] = React.useState(false);
  const changeModalContactUs = () => {
    setCloseModal(!closeModal);
  };

  return (
    <HeaderWrapper variant={`${isScrollingUp ? 'sticky' : ""}`}>
      <HeaderContainer>
        <HeaderLogo>
          <Image loading="lazy" {...logoImage} />
        </HeaderLogo>
        <HeaderContentWrapper variant={active} onClick={() => setActive("")} />
        <HeaderContent variant={active}>
          {linkWithIcon && (
            <HeaderContentItemShopify {...linkWithIcon.link} baseUrl={baseUrl}>
              <Image {...linkWithIcon.icon} />
              <Text color={theme.palette.text.primary} lineHeight="sm" fontWeight="medium">
                {linkWithIcon.link.title}
              </Text>
            </HeaderContentItemShopify>
          )}
          {headerLinks?.map((link) => (
            <HeaderContentItem active={typeof window !== "undefined" && `${link.linkInternal.reference.slug.current}` === window.location.pathname} baseUrl={baseUrl} {...link} key={link._key}>
              {link?.title}
            </HeaderContentItem>
          ))}
          {headerButton && (
            <HeaderContentBtnWrapper>
              <Button handler={changeModalContactUs} variant="contained">
                {headerButton.title}
              </Button>
              <ContactUsModal touchUsModal={touchUsModal} handler={changeModalContactUs}
                              subscribeModal={closeModal} />
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
          <HeaderMenuButton onClick={() => (active ? setActive("") : setActive("active"))}>
            <HeaderMenuIcon variant={active} />
          </HeaderMenuButton>
        </HeaderMenuWrapper>
      </HeaderContainer>
    </HeaderWrapper>
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
