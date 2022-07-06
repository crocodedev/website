import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import ImageStatic from "@/components/Image";
import CtaImageWrapper from "@/components/CtaImage/CtaImageWrapper";
import CtaImageImgWrapper from "@/components/CtaImage/CtaImageImgWrapper";
import CtaImageTitle from "@/components/CtaImage/CtaImageTitle";

const dataPage = {
  bgColor: "dark",
  src: "/uploads/cta-image.png",
  title: "Let's talk!",
};

const CtaImage = ({ data = dataPage }) => {
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

CtaImage.propTypes = {
  data: PropTypes.exact({
    bgColor: PropTypes.string,
    src: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default CtaImage;
