import PropTypes from "prop-types";
import Text from "@/components/Text";
import Button from "@/components/Button";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ListSevenStack from "@/components/ListSeven/ListSevenStack";
import ListSevenStackItem from "@/components/ListSeven/ListSevenStackItem";
import ListSevenStackItemText from "@/components/ListSeven/ListSevenStackItemText";

const ListSeven = ({ title, items, baseUrl, bgColor }) => (
  <SectionWrapper bgColor={bgColor}>
    <Container>
      <SectionHeading title={title} />
      <ListSevenStack>
        {items?.map(({ _key, title: itemTitle, text: itemText, link }) => (
          <ListSevenStackItem key={_key}>
            <Text fontSize="title3" fontWeight="bold" mobileMultiplier={0.6669}>
              {itemTitle}
            </Text>
            <ListSevenStackItemText fontSize="subtitle" mobileMultiplier={0.7}>
              {itemText}
            </ListSevenStackItemText>
            <Button aria-label="Learn detailed" variant="text" link={link} baseUrl={baseUrl}>
              {link.title}
            </Button>
          </ListSevenStackItem>
        ))}
      </ListSevenStack>
    </Container>
  </SectionWrapper>
);

ListSeven.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string,
      text: PropTypes.string,
      title: PropTypes.string,
      link: PropTypes.object,
    }),
  ).isRequired,
};

export default ListSeven;
