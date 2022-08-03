import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import Text from "@/components/Text";
import Container from "@/components/Container";
import Image from "@/components/Image";
import CtaImageImgWrapper from "@/components/CtaImage/CtaImageImgWrapper";
import CtaImageTextWrapper from "@/components/CtaImage/CtaImageTextWrapper";
import CtaImageSectionWrapper from "@/components/CtaImage/CtaImageSectionWrapper";
import CtaImageLink from "@/components/CtaImage/CtaImageLink";
import CtaImageInfoWrapper from "@/components/CtaImage/CtaImageInfoWrapper";

const CtaImage = ({ title, subtitle, bgColor, link, image, baseUrl }) => {
  const theme = useTheme();

  return (
    <CtaImageSectionWrapper disablePaddings={true} bgColor={bgColor}>
      <Container>
        <CtaImageImgWrapper>
          <Image {...image} />
        </CtaImageImgWrapper>
        <CtaImageInfoWrapper>
          <CtaImageTextWrapper>
            <Text
              fontSize="title2"
              mobileMultiplier={0.764}
              color={theme.palette.primary.main}
              fontWeight="bold"
            >
              {title}
            </Text>
            <Text
              color={
                bgColor === "dark"
                  ? theme.palette.tertiary.contrastText
                  : theme.palette.text.primary
              }
              fontSize="subtitle"
              mobileMultiplier={0.7}
            >
              {subtitle}
            </Text>
          </CtaImageTextWrapper>
          <CtaImageLink variant="text" baseUrl={baseUrl}>
            {link.title}
          </CtaImageLink>
        </CtaImageInfoWrapper>
      </Container>
    </CtaImageSectionWrapper>
  );
};

CtaImage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  baseUrl: PropTypes.string.isRequired,
};

export default CtaImage;
