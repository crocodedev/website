import PropTypes from "prop-types";
/* eslint-disable react/prop-types */
import ImageStatic from "@/components/Image";
import SectionHeading from "@/components/SectionHeading";
import Text from "@/components/Text";
import TextOneBgImage from "@/components/TextOne/TextOneBgImage";
import TextOneContainer from "@/components/TextOne/TextOneContainer";
import TextOneContent from "@/components/TextOne/TextOneContent";
import TextOneWrapper from "@/components/TextOne/TextOneWrapper";
import useMedia from "@/hooks/use-media";

const pageData = {
  title: "ABOUT CROCODE",
  imageHeros: [
    { src: "/uploads/text-one-bg-mobile.jpg" },
    { src: "/uploads/text-one-bg-tablet.jpg" },
    { src: "/uploads/text-one-bg-desktop.jpg" },
  ],
};

const TextOne = ({ data = pageData }) => {
  const { title, imageHeros, text1, text2 } = data;
  const bgImages = useMedia(
    ["(max-width: 767px)", "(max-width: 991px)", "(min-width: 991px)"],

    imageHeros,

    { src: "/uploads/text-one-bg-mobile.jpg" },
  );

  const { src } = bgImages;

  return (
    <TextOneWrapper as="div">
      <TextOneContainer>
        <SectionHeading title={title} />
        <TextOneContent>
          <Text mobileMultiplier={0.7} fontSize="subtitle" lineHeight="md">
            {text1}
          </Text>
          <Text mobileMultiplier={0.7} fontSize="subtitle" lineHeight="md">
            {text2}
          </Text>
        </TextOneContent>
      </TextOneContainer>
      <TextOneBgImage>
        <ImageStatic src={src} />
      </TextOneBgImage>
    </TextOneWrapper>
  );
};

TextOne.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    imageHero: PropTypes.arrayOf(
      PropTypes.exact({
        desktop: PropTypes.string,
        tablet: PropTypes.string,
        mobile: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default TextOne;
