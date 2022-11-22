import PropTypes from "prop-types";
import Button from "@/components/Button";
import DevelopmentItemImage from "@/components/Development/DevelopmentItemImage";
import Image from "@/components/Image";
import Text from "@/components/Text";
import DevelopmentItem from "@/components/Development/DevelopmentItem";
import DevelopmentItemContent from "@/components/Development/DevelopmentItemContent";
import DevelopmentStack from "@/components/Development/DevelopmentStack";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import DevelopmentContainer from "@/components/Development/DevelopmentWrapper";

const Development = ({ subtitle, title, items, baseUrl }) => {
  return (
    <SectionWrapper>
      <DevelopmentContainer>
        <SectionHeading title={title} text={subtitle} />
        <DevelopmentStack>
          {items?.map(({ _key, title: itemTitle, text, link, image }) => (
            <DevelopmentItem key={_key}>
              <DevelopmentItemImage>
                <Image {...image} />
              </DevelopmentItemImage>
              <DevelopmentItemContent>
                <Text mobileMultiplier={0.6} fontSize="title3" fontWeight="bold" lineHeight="sm">
                  {itemTitle}
                </Text>
                <Text mobileMultiplier={0.7} fontSize="subtitle">
                  {text}
                </Text>
                {link && (
                  <Button aria-label="Show more" baseUrl={baseUrl} link={link} variant="text">
                    {link.title}
                  </Button>
                )}
              </DevelopmentItemContent>
            </DevelopmentItem>
          ))}
        </DevelopmentStack>
      </DevelopmentContainer>
    </SectionWrapper>
  );
};

Development.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
      link: PropTypes.object,
      image: PropTypes.object,
    }),
  ).isRequired,
};

export default Development;
