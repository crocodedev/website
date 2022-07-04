import { useTheme } from "@emotion/react";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import ImageStatic from "@/components/Image";
import CtaImageWrapper from "@/components/CtaImage/CtaImageWrapper";
import CtaImageImgWrapper from "@/components/CtaImage/CtaImageImgWrapper";
import CtaImageTitle from "@/components/CtaImage/CtaImageTitle";

const data = {
  bgColor: "dark",
  src: "/uploads/cta-image.png",
  title: "Let's talk!",
};

const CtaImage = () => {
  const theme = useTheme();
  return (
    <SectionWrapper disablePaddings={true} brColor={data.bgColor}>
      <Container>
        <CtaImageWrapper>
          <CtaImageImgWrapper>
            <ImageStatic src={data.src} />
          </CtaImageImgWrapper>
          <CtaImageTitle>{data.title}</CtaImageTitle>
        </CtaImageWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default CtaImage;
