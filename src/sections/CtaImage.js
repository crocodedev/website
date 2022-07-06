import { useTheme } from "@emotion/react";
import Text from "@/components/Text";
import Container from "@/components/Container";
import ImageStatic from "@/components/Image";
import CtaImageImgWrapper from "@/components/CtaImage/CtaImageImgWrapper";
import CtaImageTextWrapper from "@/components/CtaImage/CtaImageTextWrapper";
import CtaImageSectionWrapper from "@/components/CtaImage/CtaImageSectionWrapper";
import CtaImageLink from "@/components/CtaImage/CtaImageLink";
import CtaImageInfoWrapper from "@/components/CtaImage/CtaImageInfoWrapper";

const data = {
  bgColor: "dark",
  src: "/uploads/cta-image.png",
  title: "Let's talk!",
  subtitle: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  buttonText: "Schedule a Call",
};

const CtaImage = () => {
  return (
    <CtaImageSectionWrapper disablePaddings={true} bgColor={data.bgColor}>
      <Container>
        <CtaImageImgWrapper>
          <ImageStatic src={data.src} />
        </CtaImageImgWrapper>
        <CtaImageInfoWrapper>
          <CtaImageTextWrapper>
            <Text
              fontSize="title2"
              mobileMultiplier={0.764}
              color={theme.palette.primary.main}
              fontWeight="bold"
            >
              {data.title}
            </Text>
            <Text
              color={
                data.bgColor === "dark"
                  ? theme.palette.tertiary.contrastText
                  : theme.palette.text.primary
              }
              fontSize="subtitle"
              mobileMultiplier={0.7}
            >
              {data.subtitle}
            </Text>
          </CtaImageTextWrapper>
          <CtaImageLink variant="text">{data.buttonText}</CtaImageLink>
        </CtaImageInfoWrapper>
      </Container>
    </CtaImageSectionWrapper>
  );
};

export default CtaImage;
