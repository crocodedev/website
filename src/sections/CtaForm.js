import { useTheme } from "@emotion/react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import CtaFormInput from "@/components/CtaForm/CtaFormInput";
import CtaFormWrapper from "@/components/CtaForm/CtaFormWrapper";
import CtaFormTitle from "@/components/CtaForm/CtaFormTitle";

const data = {
  bgColor: "dark",
  title: "Subscribe to our blog",
  buttonText: "Subscribe",
  placeholder: "Enter E-mail",
};

const CtaForm = () => {
  const theme = useTheme();
  return (
    <SectionWrapper bgColor={data.bgColor}>
      <Container>
        <CtaFormWrapper>
          <CtaFormTitle
            fontSize="title2"
            lineHeight="xsm"
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

export default CtaForm;
