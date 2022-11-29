import PropTypes from "prop-types";
import Button from "@/components/Button";
import Text from "@/components/Text";
import Image from "@/components/Image";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ListOneStack from "@/components/ListOne/ListOneStack";
import ListOneStackItem from "@/components/ListOne/ListOneStackItem";
import ListOneStackItemTitle from "@/components/ListOne/ListOneStackItemTitle";
import ListOneStackItemText from "@/components/ListOne/ListOneStackItemText";

const ListOne = ({ title, items, baseUrl, bgColor }) => (
  <SectionWrapper bgColor={bgColor}>
    <Container>
      <SectionHeading title={title} />
      <ListOneStack>
        {items?.map(({ _key, title: itemTitle, text, imageWithAltText, link }) => (
          <ListOneStackItem key={_key}>
            <ListOneStackItemTitle>
              <Image {...imageWithAltText} />
              <Text fontSize="subtitle" fontWeight="bold" mobileMultiplier={0.9}>
                {itemTitle}
              </Text>
            </ListOneStackItemTitle>
            <ListOneStackItemText fontSize="text" mobileMultiplier={0.879}>
              {text}
            </ListOneStackItemText>
            <Button aria-label="Order a project" variant="outlined" link={link} baseUrl={baseUrl}>
              {link.title}
            </Button>
          </ListOneStackItem>
        ))}
      </ListOneStack>
    </Container>
  </SectionWrapper>
);

ListOne.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string,
      text: PropTypes.string,
      title: PropTypes.string,
      imageWithAltText: PropTypes.object,
      link: PropTypes.object,
    }),
  ).isRequired,
};

export default ListOne;
