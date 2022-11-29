import PropTypes from "prop-types";
import Text from "@/components/Text";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ListThreeStack from "@/components/ListThree/ListThreeStack";
import ListThreeStackItem from "@/components/ListThree/ListThreeStackItem";
import ImageStatic from "@/components/Image";

const ListThree = ({ title, text, items, bgColor }) => (
  <SectionWrapper bgColor={bgColor} sectionGap={true}>
    <Container>
      <SectionHeading title={title} text={text} />
    </Container>
    <Container disablePaddings={true}>
      <ListThreeStack>
        {items?.map(({ _key, title: itemTitle, text: itemText, imageWithAltText }) => (
          <ListThreeStackItem key={_key} title={itemTitle}>
            <div>
              <ImageStatic {...imageWithAltText} />
            </div>
            <Text fontSize="subtitle" textAlign="center" mobileMultiplier={0.7}>
              {itemText}
            </Text>
          </ListThreeStackItem>
        ))}
      </ListThreeStack>
    </Container>
  </SectionWrapper>
);

ListThree.propTypes = {
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
    }),
  ).isRequired,
};

export default ListThree;
