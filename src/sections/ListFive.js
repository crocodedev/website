import PropTypes from "prop-types";
import Container from "@/components/Container";
import Image from "@/components/Image";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import Text from "@/components/Text";
import Button from "@/components/Button";
import ListFiveStack from "@/components/ListFive/ListFiveStack";
import ListFiveItemImage from "@/components/ListFive/ListFiveItemImage";
import ListFiveItem from "@/components/ListFive/ListFiveItem";
import ListFiveItemContent from "@/components/ListFive/ListFiveItemContent";

const ListFive = ({ title, text, items, bgColor }) => (
  <SectionWrapper bgColor={bgColor}>
    <Container>
      <SectionHeading title={title} text={text} />
      <ListFiveStack>
        {items?.map(({ _key, title: itemTitle, text: itemText, imageWithAltText, link }) => (
          <ListFiveItem key={_key}>
            <ListFiveItemImage>
              <Image {...imageWithAltText} />
            </ListFiveItemImage>
            <ListFiveItemContent>
              <Text fontWeight="semiBold" fontSize="subtitle" lineHeight="sm">
                {itemTitle}
              </Text>
              <Text>{itemText}</Text>
              <Button aria-label="Learn detailed" variant="text" link={link} baseUrl="baseUrl">
                {link.title}
              </Button>
            </ListFiveItemContent>
          </ListFiveItem>
        ))}
      </ListFiveStack>
    </Container>
  </SectionWrapper>
);

ListFive.propTypes = {
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

export default ListFive;
