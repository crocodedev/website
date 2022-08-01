import React from "react";
import { useTheme } from "@emotion/react";
import PropTypes from "prop-types";
import HeaderContainer from "@/components/Header/HeaderContainer";
import HeaderLogo from "@/components/Header/HeaderLogo";
import HeaderWrapper from "@/components/Header/HeaderWrapper";
import ImageStatic from "@/components/Image";
import HeaderContent from "@/components/Header/HeaderContent";
import HeaderContentItem from "@/components/Header/HeaderContentItem";
import Text from "@/components/Text";
import Button from "@/components/Button";
import HeaderLang from "@/components/Header/HeaderLang";
import HeaderLangMenu from "@/components/Header/HeaderLangMenu";
import HeaderLangWrapper from "@/components/Header/HeaderLangWrapper";
import HeaderLangMenuItem from "@/components/Header/HeaderLangMenuItem";
import HeaderMenuWrapper from "@/components/Header/HeaderMenuWrapper";
import HeaderMenu from "@/components/Header/HeaderMenu";
import HeaderContentClose from "@/components/Header/HeaderContentClose";
import HeaderContentBtnWrapper from "@/components/Header/HeaderContentBtnWrapper";
import HeaderContentItemShopify from "@/components/Header/HeaderContentItemShopify";
import HeaderContentCloseWrapper from "@/components/Header/HeaderContentCloseWrapper";

const pageData = {
  logo: "/uploads/header-logo-desktop.svg",
  shopifyIcon: {
    icon: "/uploads/header-shopify-icon.svg",
    name: "Shopify dev",
    link: "",
  },
  items: [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Services",
      link: "",
    },
    {
      name: "Portfolio",
      link: "",
    },
    {
      name: "Technologies",
      link: "",
    },
    {
      name: "About us",
      link: "",
    },
    {
      name: "Blog",
      link: "",
    },
  ],
  btnText: "Contact us",
  langFlag: "/uploads/header-flag-usa.svg",
  burgerIcon: "/uploads/header-menu-burger.svg",
};

const Header = ({ data = pageData }) => {
  const theme = useTheme();

  const { logo, shopifyIcon, items, btnText, langFlag, burgerIcon } = data;

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo>
          <ImageStatic src={logo} />
        </HeaderLogo>
        <input type="checkbox" id="mobile-content" />
        <HeaderContent>
          <HeaderContentCloseWrapper>
            <HeaderContentClose htmlFor="mobile-content">
              <ImageStatic src="/uploads/header-close.svg" />
            </HeaderContentClose>
          </HeaderContentCloseWrapper>
          <HeaderContentItemShopify to={shopifyIcon.link}>
            <ImageStatic src={shopifyIcon.icon} />
            <Text color={theme.palette.text.primary} lineHeight="sm" fontWeight="medium">
              {shopifyIcon.name}
            </Text>
          </HeaderContentItemShopify>
          {items.map(({ name, link }) => (
            <HeaderContentItem to={link} key={name}>
              <Text>{name}</Text>
            </HeaderContentItem>
          ))}
          <HeaderContentBtnWrapper>
            <Button variant="contained">{btnText}</Button>
          </HeaderContentBtnWrapper>
          <HeaderLangWrapper>
            <HeaderLang>
              <ImageStatic src={langFlag} />
              <HeaderLangMenu>
                <HeaderLangMenuItem>
                  <ImageStatic src={langFlag} />
                  <Text>usa</Text>
                </HeaderLangMenuItem>
                <HeaderLangMenuItem>
                  <ImageStatic src={langFlag} />
                  <Text>usa</Text>
                </HeaderLangMenuItem>
              </HeaderLangMenu>
            </HeaderLang>
          </HeaderLangWrapper>
        </HeaderContent>
        <HeaderMenuWrapper>
          <HeaderMenu htmlFor="mobile-content">
            <ImageStatic src={burgerIcon} />
          </HeaderMenu>
        </HeaderMenuWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  data: PropTypes.exact({
    logo: PropTypes.string,
    shopifyIcon: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.exact({
        name: PropTypes.string,
        link: PropTypes.string,
      }),
    ),
    btnText: PropTypes.string,
    langFlag: PropTypes.string,
  }).isRequired,
};

export default Header;
