import PropTypes from "prop-types";

import Image from "@/components/Image";
import SectionHeading from "@/components/SectionHeading";
import Text from "@/components/Text";
import TextOneBgImage from "@/components/TextOne/TextOneBgImage";
import TextOneContainer from "@/components/TextOne/TextOneContainer";
import TextOneContent from "@/components/TextOne/TextOneContent";
import TextOneWrapper from "@/components/TextOne/TextOneWrapper";
import TextOneBgImagePerson from "@/components/TextOne/TextOneBgImagePerson";
import SectionWrapper from "@/components/SectionWrapper";

const TextOne = ({ title, subtitle, text, image, desktopImage, bgColor, fadeColor }) => {
  return (
    <TextOneWrapper fadeColor={fadeColor}>
      <SectionWrapper bgColor={bgColor}>
        <TextOneContainer>
          <SectionHeading title={title} text={subtitle} />
          <TextOneContent>
            <Text mobileMultiplier={0.7} fontSize="subtitle" lineHeight="md">
              {text}
            </Text>
          </TextOneContent>
        </TextOneContainer>
      </SectionWrapper>
      <TextOneBgImagePerson>
        <Image {...desktopImage} />
      </TextOneBgImagePerson>
      <TextOneBgImage>
        <Image {...image} />
      </TextOneBgImage>
    </TextOneWrapper>
  );
};

TextOne.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  bgColor: PropTypes.string.isRequired,
  tabletImage: PropTypes.object.isRequired,
  mobileImage: PropTypes.object.isRequired,
  desktopImage: PropTypes.object.isRequired,
  fadeColor: PropTypes.string.isRequired,
};

export default TextOne;
