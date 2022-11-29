import PropTypes from "prop-types";
import Container from "@/components/Container";
import Image from "@/components/Image";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import Text from "@/components/Text";
import ListFourImage from "@/components/ListFour/ListFourImage";
import ListFourItem from "@/components/ListFour/ListFourItem";
import ListFourStack from "@/components/ListFour/ListFourStack";

const ListFour = ({ title, text, items, bgColor }) => (
  <SectionWrapper bgColor={bgColor}>
    <Container>
      <SectionHeading title={title} text={text} />
      <ListFourStack>
        {items?.map(({ _key, title: itemTitle, text: itemText, imageWithAltText }) => (
          <ListFourItem key={_key}>
            <ListFourImage>
              <Image {...imageWithAltText} />
            </ListFourImage>
            <Text fontWeight="semiBold" textAlign="center" fontSize="subtitle" lineHeight="sm">
              {itemTitle}
            </Text>
            <Text lineHeight="md" textAlign="center">
              {" "}
              {itemText}
            </Text>
          </ListFourItem>
        ))}
      </ListFourStack>
    </Container>
  </SectionWrapper>
);

ListFour.propTypes = {
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

export default ListFour;
