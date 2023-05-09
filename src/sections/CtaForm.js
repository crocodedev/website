import React from "react";
import PropTypes from "prop-types";
import * as yup from "yup";
import { Formik } from "formik";
import { useTheme } from "@emotion/react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import CtaFormInput from "@/components/CtaForm/CtaFormInput";
import CtaFormWrapper from "@/components/CtaForm/CtaFormWrapper";
import CtaFormTitle from "@/components/CtaForm/CtaFormTitle";

const CtaForm = ({ title, messagePlaceholder, buttonText, bgColor, baseUrl }) => {
  const theme = useTheme();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .min(10, "min message")
      .max(40, "max message")
      .typeError("error message")
      .required("required message"),
  });

  return (
    <SectionWrapper as="div" bgColor={bgColor}>
      <Container>
        <Formik
          initialValues={{
            email: "",
          }}
          validateOnBlur
          onSubmit={({ resetForm }) => {
            resetForm();
          }}
          validationSchema={schema}
        >
          {({ values: { email }, errors, handleChange, handleBlur, handleSubmit }) => (
            <CtaFormWrapper>
              <CtaFormTitle
                fontSize="title2"
                lineHeight="xs"
                textAlign="center"
                color={
                  bgColor === "dark"
                    ? theme.palette.tertiary.contrastText
                    : theme.palette.text.primary
                }
                fontWeight="bold"
                mobileMultiplier={0.7}
              >
                {title}
              </CtaFormTitle>
              <CtaFormInput
                className={errors.email ? "invalid" : "valid"}
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                value={email}
                placeholder={messagePlaceholder}
              />
              <Button
                handler={handleSubmit}
                aria-label="Subscribe"
                variant="outlined"
                type="submit"
                baseUrl={baseUrl}
              >
                {buttonText}
              </Button>
            </CtaFormWrapper>
          )}
        </Formik>
      </Container>
    </SectionWrapper>
  );
};

CtaForm.propTypes = {
  title: PropTypes.string.isRequired,
  messagePlaceholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  baseUrl: PropTypes.string,
};

CtaForm.defaultProps = {
  baseUrl: "",
};

export default CtaForm;
