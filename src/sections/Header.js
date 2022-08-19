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
import Link from "@/components/Link";
import HeaderMenuWrapper from "@/components/Header/HeaderMenuWrapper";

const pageData = {
  logo: "/uploads/header-logo.svg",
  shopifyIcon: {
    icon: "/uploads/shopify-icon.svg",
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
};

const Header = ({ data = pageData }) => {
  const theme = useTheme();
  const [active, setActive] = React.useState("");

  const { logo, shopifyIcon, items, btnText, langFlag } = data;

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo>
          <img src={logo} alt="logo" />
          <Image loading="lazy" src={logo} />
        </HeaderLogo>
        <HeaderContent variant={active}>
          <HeaderContentItemShopify to={shopifyIcon.link}>
            <img src={shopifyIcon.icon} alt="shopify" />
            <Image src={shopifyIcon.icon} />
            <Text color={theme.palette.text.primary} lineHeight="sm" fontWeight="medium">
              {shopifyIcon.name}
            </Text>
          </HeaderContentItemShopify>
          {items?.map(({ name, link }) => (
            <HeaderContentItem key={name}>
              <Link to={link}>{name}</Link>
            </HeaderContentItem>
          ))}
          <HeaderContentBtnWrapper>
            <Button variant="contained">{btnText}</Button>
          </HeaderContentBtnWrapper>
          <HeaderLangWrapper>
            <HeaderLang>
              <Image loading="lazy" src={langFlag} />
              <HeaderLangMenu>
                <HeaderLangMenuItem>
                  <Image loading="lazy" src={langFlag} />
                  <Text>usa</Text>
                </HeaderLangMenuItem>
                <HeaderLangMenuItem>
                  <Image loading="lazy" src={langFlag} />
                  <Text>usa</Text>
                </HeaderLangMenuItem>
              </HeaderLangMenu>
            </HeaderLang>
          </HeaderLangWrapper>
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
