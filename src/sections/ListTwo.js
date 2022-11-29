import PropTypes from "prop-types";
import Container from "@/components/Container";
import Image from "@/components/Image";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import Text from "@/components/Text";
import ListTwoItem from "@/components/ListTwo/ListTwoItem";
import ListTwoStack from "@/components/ListTwo/ListTwoStack";
import ListTwoItemHeadingImage from "@/components/ListTwo/ListTwoItemHeadingImage";
import ListTwoItemHeading from "@/components/ListTwo/ListTwoItemHeading";
import ListTwoItemContent from "@/components/ListTwo/ListTwoItemContent";

const ListTwo = ({ title, text, items, baseUrl, bgColor }) => (
  <SectionWrapper bgColor={bgColor}>
    <Container>
      <SectionHeading title={title} text={text} />

      <ListTwoStack>
        {items?.map(({ _key, title: itemTitle, text: itemText, imageWithAltText, link }) => (
          <ListTwoItem key={_key}>
            <ListTwoItemHeading>
              <ListTwoItemHeadingImage>
                <Image {...imageWithAltText} />
              </ListTwoItemHeadingImage>

              <Text fontSize="subtitle" lineHeight="sm" fontWeight="bold">
                {itemTitle}
              </Text>
            </ListTwoItemHeading>
            <ListTwoItemContent>
              {itemText && <Text>{itemText}</Text>}
              {link && (
                <Button aria-label="Learn detailed" link={link} baseUrl={baseUrl} variant="text">
                  {link.title}
                </Button>
              )}
            </ListTwoItemContent>
          </ListTwoItem>
        ))}
      </ListTwoStack>
    </Container>
  </SectionWrapper>
);

ListTwo.propTypes = {
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

export default ListTwo;
