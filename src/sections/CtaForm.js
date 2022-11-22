import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import CtaFormInput from "@/components/CtaForm/CtaFormInput";
import CtaFormWrapper from "@/components/CtaForm/CtaFormWrapper";
import CtaFormTitle from "@/components/CtaForm/CtaFormTitle";

const CtaForm = ({ title, messagePlaceholder, buttonText, bgColor, baseUrl }) => {
  const theme = useTheme();
  return (
    <SectionWrapper as="div" bgColor={bgColor}>
      <Container>
        <CtaFormWrapper>
          <CtaFormTitle
            fontSize="title2"
            lineHeight="xs"
            textAlign="center"
            color={
              bgColor === "dark" ? theme.palette.tertiary.contrastText : theme.palette.text.primary
            }
            fontWeight="bold"
            mobileMultiplier={0.7}
          >
            {title}
          </CtaFormTitle>
          <CtaFormInput placeholder={messagePlaceholder} />
          <Button aria-label="Subscribe" variant="outlined" baseUrl={baseUrl}>
            {buttonText}
          </Button>
        </CtaFormWrapper>
      </Container>
    </SectionWrapper>
  );
};

CtaForm.propTypes = {
  title: PropTypes.string.isRequired,
  messagePlaceholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  baseUrl: PropTypes.string.isRequired,
};

export default CtaForm;
