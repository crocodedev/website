import PropTypes from "prop-types";
import useMedia from "@/hooks/use-media";

import Image from "@/components/Image";
import SectionHeading from "@/components/SectionHeading";
import Text from "@/components/Text";
import TextOneBgImage from "@/components/TextOne/TextOneBgImage";
import TextOneContainer from "@/components/TextOne/TextOneContainer";
import TextOneContent from "@/components/TextOne/TextOneContent";
import TextOneWrapper from "@/components/TextOne/TextOneWrapper";
import TextOneBgImagePerson from "@/components/TextOne/TextOneBgImagePerson";
import SectionWrapper from "@/components/SectionWrapper";

const TextOne = ({ title, subtitle, text, image, tabletImage, mobileImage, desktopImage }) => {
  // const bgImages = useMedia(
  //   ["(max-width: 767px)", "(max-width: 991px)", "(min-width: 991px)"],
  //   [mobileImage, tabletImage, desktopImage],
  //   mobileImage,
  // );

  return (
    <TextOneWrapper>
      <SectionWrapper>
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
  tabletImage: PropTypes.object.isRequired,
  mobileImage: PropTypes.object.isRequired,
  desktopImage: PropTypes.object.isRequired,
};

export default TextOne;
