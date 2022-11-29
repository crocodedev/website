import PropTypes from "prop-types";
import Text from "@/components/Text";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ListSixStack from "@/components/ListSix/ListSixStack";
import ListSixStackItem from "@/components/ListSix/ListSixStackItem";
import ListSixStackItemText from "@/components/ListSix/ListSixStackItemText";

const ListSix = ({ title, items, bgColor }) => (
  <SectionWrapper bgColor={bgColor}>
    <Container>
      <SectionHeading title={title} />
      <ListSixStack>
        {items?.map(({ _key, title: itemTitle, text: itemText }) => (
          <ListSixStackItem key={_key}>
            <Text fontSize="title3" fontWeight="bold" mobileMultiplier={0.6}>
              {itemTitle}
            </Text>
            <ListSixStackItemText fontSize="subtitle" mobileMultiplier={0.7}>
              {itemText}
            </ListSixStackItemText>
          </ListSixStackItem>
        ))}
      </ListSixStack>
    </Container>
  </SectionWrapper>
);

ListSix.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string,
      text: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default ListSix;
