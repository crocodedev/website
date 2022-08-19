import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";

import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import PolicyItem from "@/components/Policy/PolicyItem";
import Container from "@/components/Container";
import PolicyContent from "@/components/Policy/PolicyContent";

const pageData = {
  title: "Cookie Policy",
  textWithLink: {
    textBeforeLink:
      "Adexin uses cookies and similar technologies to help collect data and enhance website security in the form of fraud and abuse detection, accessible from ",
    link: "https://adexin.com",
    textAfterLink: ".",
  },
  text1: {
    title: "What are cookies and how we use them",
    text: "Cookies are small files that a website automatically downloads to your computer’s hard drive through your web browser, enabling the website to recognize your browser and retain certain information. For more general information on cookies see the Wikipedia article on HTTP Cookies. For example, cookies can help us understand your preferences based on previous or current site activity, enabling us to provide you with a better experience. We also use cookies to help us gather data about site traffic and site interaction for future improvements.",
  },
  text2: {
    title: "How to manage or disable cookies",
    text: "You are allowed to modify and disable cookies at any time. If you wish to withdraw consent and not receive cookies, please use your web browser to reject them. You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Please bear in mind that disabling cookies may cause some website features to function incorrectly.",
  },
  list1: {
    title: "Categories of cookies",
    text: "We use several types of cookies to fulfill our purposes:",
    list: [
      "Necessary cookies: These cookies are fundamentally essential for our website to work and allow you to use the tools provided. Without these cookies, you will not be able to receive our services.",
      "Performance-enhancing cookies: These cookies collect data and analytics about the website, the frequency of visits, and general website traffic. We use the data to upgrade and improve our website.",
      "Third-party cookies: This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.For more information on Google Analytics cookies, see the official Google Analytics page.",
    ],
  },
  text3: {
    title: "Any questions?",
    text: "If you have any questions regarding our cookies policy, please call or contact us via email.",
  },
};

const CookiesPolicy = ({ data = pageData }) => {
  const { title, textWithLink, text1, text2, list1, text3 } = data;
  const theme = useTheme();

  return (
    <SectionWrapper color={theme.palette.background.paper}>
      <Container>
        <SectionHeading title={title} />
        <PolicyContent>
          <PolicyItem textWithLink={textWithLink} />
          <PolicyItem {...text1} />
          <PolicyItem {...text2} />
          <PolicyItem {...list1} />
          <PolicyItem {...text3} />
        </PolicyContent>
      </Container>
    </SectionWrapper>
  );
};

CookiesPolicy.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    textWithLink: PropTypes.exact({
      textBeforeLink: PropTypes.string,
      link: PropTypes.string,
      textAfterLink: PropTypes.string,
    }),
    text1: PropTypes.exact({
      title: PropTypes.string,
      text: PropTypes.string,
    }),
    text2: PropTypes.exact({
      title: PropTypes.string,
      text: PropTypes.string,
    }),
    list1: PropTypes.exact({
      title: PropTypes.string,
      text: PropTypes.string,
      list: PropTypes.arrayOf(PropTypes.string),
    }),
    text3: PropTypes.exact({
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  }).isRequired,
};

export default CookiesPolicy;
