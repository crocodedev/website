import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Text from "@/components/Text";
import CtaTextCaption from "@/components/CtaText/CtaTextCaption";
import CtaTextWrapper from "@/components/CtaText/CtaTextWrapper";

const CtaText = ({ subtitle, title, link, bgColor, baseUrl }) => {
  const theme = useTheme();
  return (
    <SectionWrapper bgColor={bgColor}>
      <Container>
        <CtaTextWrapper>
          <Text
            fontSize="title2"
            color={
              bgColor === "dark" ? theme.palette.tertiary.contrastText : theme.palette.text.primary
            }
            fontWeight="bold"
            mobileMultiplier={0.7}
          >
            {title}
          </Text>
          <CtaTextCaption
            color={
              bgColor === "dark" ? theme.palette.tertiary.contrastText : theme.palette.text.primary
            }
            textAlign="center"
          >
            {subtitle}
          </CtaTextCaption>
          <Button aria-label="Start project" variant="contained" baseUrl={baseUrl}>
            {link.title}
          </Button>
        </CtaTextWrapper>
      </Container>
    </SectionWrapper>
  );
};

CtaText.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired,
  bgColor: PropTypes.string.isRequired,
  baseUrl: PropTypes.string.isRequired,
};

export default CtaText;
