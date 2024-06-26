import PropTypes from "prop-types";
import * as yup from "yup";
import { Formik } from "formik";
import ContactUsModalContent from "@/components/ContactUsModal/ContactUsModalContent";
import ContactUsModalCloseBtn from "@/components/ContactUsModal/ContactUsModalCloseBtn";
import Title from "@/components/Title";
import ContactsUsForm from "@/components/ContactUs/ContactsUsForm";
import ContactsUsItem from "@/components/ContactUs/ContactsUsItem";
import Text from "@/components/Text";
import ContactUsModalLink from "@/components/ContactUsModal/ContactUsModalLink";
import ContactUsModalCloseWrapper from "@/components/ContactUsModal/ContactUsModalCloseWrapper";
import ContactUsModalClose from "@/components/ContactUsModal/ContactUsModalClose";
import ContactUsModalWrapper from "@/components/ContactUsModal/ContactUsModalWrapper";
import React from "react";
import ContactsUsInput from "@/components/ContactUs/ContactsUsInput";
import Button from "@/components/Button";
import ContactUsModalContentInner from "@/components/ContactUsModal/ContactUsModalContentInner";
import NetlifyForm from "@/components/NetlifyForm";

const ContactUsModal = ({ isOpen, handler, touchUsModal }) => {
  const {
    buttonText,
    emailPlaceholder,
    title,
    subtitle,
    namePlaceholder,
    yourEmail,
    yourName,
    agreementText,
  } = touchUsModal;

  const {
    text,
    link
  } = agreementText;


  const schema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .typeError("error message")
      .min(4, "min message")
      .max(50, "max message")
      .required("required message"),
    email: yup
      .string()
      .email()
      .min(10, "min message")
      .max(40, "max message")
      .typeError("error message")
      .required("required message"),
  });

  return (
    <ContactUsModalWrapper isOpen={isOpen}>
      <ContactUsModalClose onClick={handler} />
      <ContactUsModalContent>
        <ContactUsModalCloseWrapper>
          <ContactUsModalCloseBtn onClick={handler}>
            <span />
          </ContactUsModalCloseBtn>
          <ContactUsModalContentInner>
            {title && <Title>{title}</Title>}
            <Text>{subtitle}</Text>
            <Formik
              initialValues={{
                name: "",
                email: "",
              }}
              validationSchema={schema}
            >
              {({
                values: { name, email },
                handleChange,
                handleBlur,
                errors,
                touched,
                isValid,
                dirty,
                resetForm,
              }) => (
                <ContactsUsForm
                  as={NetlifyForm}
                  formValues={{ name, email }}
                  postSubmit={() => resetForm()}
                  formName="Contact us"
                >
                  <ContactsUsItem>
                    <Text mobileMultiplier={0.9} as="label">
                      {yourName}
                    </Text>
                    <ContactsUsInput
                      className={errors.name ? "invalid" : "valid"}
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={name}
                      variant="text"
                      type="text"
                      placeholder={namePlaceholder}
                    />
                    {touched.name && errors.name && <Text color="red">{errors.name}</Text>}
                  </ContactsUsItem>
                  <ContactsUsItem>
                    <Text mobileMultiplier={0.9} as="label">
                      {yourEmail}
                    </Text>
                    <ContactsUsInput
                      name="email"
                      className={errors.email ? "invalid" : "valid"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={email}
                      variant="text"
                      type="email"
                      placeholder={emailPlaceholder}
                    />
                    {touched.email && errors.email && <Text color="red">{errors.email}</Text>}
                  </ContactsUsItem>
                  <ContactsUsItem>
                    <Text fontSize="captionText">
                      {text}
                      <ContactUsModalLink {...link}>{link?.linkInternal?.label}</ContactUsModalLink>
                    </Text>
                  </ContactsUsItem>
                  <ContactsUsItem>
                    <Button type="submit" disabled={!(isValid && dirty)} variant="contained">
                      {buttonText}
                    </Button>
                  </ContactsUsItem>
                </ContactsUsForm>
              )}
            </Formik>
          </ContactUsModalContentInner>
        </ContactUsModalCloseWrapper>
      </ContactUsModalContent>
    </ContactUsModalWrapper>
  );
};

ContactUsModal.propTypes = {
  touchUsModal: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ContactUsModal;
