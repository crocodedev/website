import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";

import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import PolicyItem from "@/components/Policy/PolicyItem";
import Container from "@/components/Container";
import PolicyContent from "@/components/Policy/PolicyContent";

const pageData = {
  title: "Privacy Policy",
  textWithLink: {
    textBeforeLink: "At Adexin, accessible from ",
    link: "https://adexin.com",
    textAfterLink:
      ", one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Adexin and how we use it.",
  },
  usOffice: {
    title: "US Office:",
    texts: ["+1 267 892 9500", "600 W Germantown Pike, Suite 400, Plymouth Meeting, PA 19462, USA"],
    link: "info@adexin.com",
  },
  consent: {
    title: "Consent",
    text: "By using our website, you hereby consent to our Privacy Policy and agree to its terms.",
  },
  aboutUs: {
    title: "About us",
    text: "Adexin is a custom software development and IT consulting company founded in 2011. We are strongly committed to delivering quality software and customer experience. To achieve this during our collaboration, sharing personal data becomes impossible to avoid. We understand that personal data and its sharing are sensitive matters; therefore, we have outlined our privacy policy to ensure our clients are aware and informed about every requirement. Securing your privacy and private information is a top priority for us.",
  },
  list1: {
    title: "What personal data we collect",
    text: "The data we collect may include the following:",
    list: [
      "Contact information: Name, e-mail address, postal address, telephone number, account name, online identifier, or other similar identifiers.",
      "Customer records information: Name, signature, social security number, address, telephone number, passport number.",
      "Financial information: Bank account number, credit or debit card number, other financial information.",
      "Commercial information: Delivery information and records of personal property, products or services purchased, or other purchasing or consuming histories or tendencies and transactions made with us.",
      "Geolocation data: City, state, zip code, etc.",
      "Other information: Any additional information you choose to provide us directly. Customer information such as questions and other messages you send us directly through online forms, chats, e-mail, phone.",
    ],
  },
  texts2: [
    "Please, do not share any personal data not requested from you directly.",
    "Personal data we receive automatically / information we collect from 3rd parties.",
  ],
  list2: {
    text: "When you visit our website, we automatically receive the following information about you:",
    list: [
      "Device information: Hardware model, version of the operating system.",
      "Website use information: IP address, geographical location, browser type, and version.",
      "Cookies: For more information about the cookies being used on our website, please visit our cookie policy page.",
    ],
  },
  list3: {
    title: "How we may use your Personal data",
    text: "We use the information we collect in various ways, including to:",
    list: [
      "Provide, operate, and maintain our website.",
      "Improve, personalize, and expand our website.",
      "Understand and analyze how you use our website.",
      "Develop new products, services, features, and functionality.",
      "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.",
      "Send you emails.",
      "Find and prevent fraud.",
      "To comply with necessary laws and regulations.",
      "To respond to law enforcement requests as required by applicable law, court order, or governmental regulations.",
    ],
  },
  logFiles: {
    title: "Log Files",
    text: "Adexin follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.",
  },
  cookies: {
    title: "Cookies and Web Beacons",
    texts: [
      "Like any other website, Adexin uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.",
      "For more general information on cookies, please read the Cookies article on Generate Privacy Policy website.",
    ],
  },
  list4: {
    title: "CCPA Privacy Rights (Do Not Sell My Personal Information)",
    text: "Under the CCPA, among other rights, California consumers have the right to:",
    list: [
      "Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.",
      "Request that a business delete any personal data about the consumer that a business has collected.",
      "Request that a business that sells a consumer's personal data, not sell the consumer's personal data.",
    ],
  },
  text1:
    "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.",
  list5: {
    title: "GDPR Data Protection Rights",
    text: "We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:",
    list: [
      "The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.",
      "The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.",
      "The right to erasure – You have the right to request that we erase your personal data, under certain conditions.",
      "The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.",
      "The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.",
      "The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.",
      "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.",
    ],
  },
};

const PrivacyPolicy = ({ data = pageData }) => {
  const {
    title,
    textWithLink,
    usOffice,
    consent,
    aboutUs,
    list1,
    texts2,
    list2,
    list3,
    logFiles,
    cookies,
    list4,
    text1,
    list5,
  } = data;
  const theme = useTheme();

  return (
    <SectionWrapper color={theme.palette.background.paper}>
      <Container>
        <SectionHeading title={title} />
        <PolicyContent>
          <PolicyItem textWithLink={textWithLink} />
          <PolicyItem {...usOffice} />
          <PolicyItem {...consent} />
          <PolicyItem {...aboutUs} />
          <PolicyItem {...list1} />
          <PolicyItem {...texts2} />
          <PolicyItem {...list2} />
          <PolicyItem {...list3} />
          <PolicyItem {...logFiles} />
          <PolicyItem {...cookies} />
          <PolicyItem {...list4} />
          <PolicyItem {...text1} />
          <PolicyItem {...list5} />
        </PolicyContent>
      </Container>
    </SectionWrapper>
  );
};

PrivacyPolicy.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    texts1: PropTypes.arrayOf(PropTypes.string),
    usOffice: PropTypes.exact({
      title: PropTypes.string,
      texts: PropTypes.arrayOf(PropTypes.string),
      link: PropTypes.string,
    }),
    consent: PropTypes.exact({
      title: PropTypes.string,
      text: PropTypes.string,
    }),
    aboutUs: PropTypes.exact({
      title: PropTypes.string,
      text: PropTypes.string,
    }),
    list1: PropTypes.exact({
      title: PropTypes.string,
      text: PropTypes.string,
      list: PropTypes.arrayOf(PropTypes.string),
    }),
    texts2: PropTypes.arrayOf(PropTypes.string),
    list2: PropTypes.exact({
      text: PropTypes.string,
      list: PropTypes.arrayOf(PropTypes.string),
    }),
    list3: PropTypes.exact({
      title: PropTypes.string,
      text: PropTypes.string,
      list: PropTypes.arrayOf(PropTypes.string),
    }),
    logFiles: PropTypes.exact({
      title: PropTypes.string,
      text: PropTypes.string,
    }),
    cookies: PropTypes.exact({
      title: PropTypes.string,
      texts: PropTypes.arrayOf(PropTypes.string),
    }),
    list4: PropTypes.exact({
      title: PropTypes.string,
      text: PropTypes.string,
      list: PropTypes.arrayOf(PropTypes.string),
    }),
    text1: PropTypes.string,
    list5: PropTypes.exact({
      title: PropTypes.string,
      text: PropTypes.string,
      list: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};

export default PrivacyPolicy;
