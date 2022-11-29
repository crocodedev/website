import PropTypes from "prop-types";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import TextThreeWrapper from "@/components/TextThree/TextThreeWrapper";
import TextThreeContent from "@/components/TextThree/TextThreeContent";
import Text from "@/components/Text";
import TextThreeImage from "@/components/TextThree/TextThreeImage";
import Image from "@/components/Image";
import TextThreeList from "@/components/TextThree/TextThreeList";
import TextThreeListItem from "@/components/TextThree/TextThreeListItem";

const TextThree = ({ title, subtitle, text, image, bgColor }) => {
  return (
    <SectionWrapper bgColor={bgColor}>
      <Container>
        <SectionHeading title={title} />
        <TextThreeWrapper>
          <TextThreeContent>
            <Text mobileMultiplier={0.7} fontSize="subtitle">
              {subtitle}
            </Text>
            <TextThreeList>
              <TextThreeListItem>
                <Text mobileMultiplier={0.7} fontSize="subtitle">
                  {text}
                </Text>
              </TextThreeListItem>
              <TextThreeListItem>
                <Text mobileMultiplier={0.7} fontSize="subtitle">
                  {text}
                </Text>
              </TextThreeListItem>
            </TextThreeList>
          </TextThreeContent>
          <TextThreeImage>
            <Image {...image} />
          </TextThreeImage>
        </TextThreeWrapper>
      </Container>
    </SectionWrapper>
  );
};

TextThree.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};

export default TextThree;
