import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import CtaFormInput from "@/components/CtaForm/CtaFormInput";
import CtaFormWrapper from "@/components/CtaForm/CtaFormWrapper";
import CtaFormTitle from "@/components/CtaForm/CtaFormTitle";

const dataPage = {
  bgColor: "dark",
  title: "Subscribe to our blog",
  buttonText: "Subscribe",
  placeholder: "Enter E-mail",
};

const CtaForm = ({ data = dataPage }) => {
  const theme = useTheme();
  return (
    <SectionWrapper bgColor={data.bgColor}>
      <Container>
        <CtaFormWrapper>
          <CtaFormTitle
            fontSize="title2"
            lineHeight="xs"
            textAlign="center"
            color={
              data.bgColor === "dark"
                ? theme.palette.tertiary.contrastText
                : theme.palette.text.primary
            }
            fontWeight="bold"
            mobileMultiplier={0.7}
          >
            {data.title}
          </CtaFormTitle>
          <CtaFormInput placeholder={data.placeholder} />
          <Button variant="outlined">{data.buttonText}</Button>
        </CtaFormWrapper>
      </Container>
    </SectionWrapper>
  );
};

CtaForm.propTypes = {
  data: PropTypes.exact({
    bgColor: PropTypes.string,
    title: PropTypes.string,
    buttonText: PropTypes.string,
    placeholder: PropTypes.string,
  }).isRequired,
};

export default CtaForm;
