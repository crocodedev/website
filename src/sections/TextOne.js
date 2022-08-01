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

  text1:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",

  text2:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
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

export default TextOne;
