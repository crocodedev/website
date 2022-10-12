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

const dataPage = {
  title: "Get in touch with us",
  desc: "Leave your details and we will contact you",
};

const ContactUsModal = ({ data = dataPage, subscribeModal, handler }) => {
  const { title, desc } = data;

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
    <ContactUsModalWrapper subscribeModal={subscribeModal}>
      <ContactUsModalClose onClick={handler} />
      <ContactUsModalContent>
        <ContactUsModalCloseWrapper>
          <ContactUsModalCloseBtn onClick={handler}>
            <span />
          </ContactUsModalCloseBtn>
          <ContactUsModalContentInner>
            <Title>{title}</Title>
            <Text>{desc}</Text>
            <Formik
              initialValues={{
                name: "",
                email: "",
              }}
              validateOnBlur
              onSubmit={({ resetForm }) => {
                resetForm({
                  name: "",
                  email: "",
                  file: "",
                  text: "",
                  tel: "",
                });
              }}
              validationSchema={schema}
            >
              {({
                  values: { name, email },
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isValid,
                  dirty,
                }) => (
                <ContactsUsForm>
                  <ContactsUsItem>
                    <Text mobileMultiplier={0.9} as="label">
                      Your name
                    </Text>
                    <ContactsUsInput
                      className={errors.name ? "invalid" : "valid"}
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={name}
                      variant="text"
                      type="text"
                      placeholder="Enter your name"
                    />
                    {touched.name && errors.name && <Text color="red">{errors.name}</Text>}
                  </ContactsUsItem>
                  <ContactsUsItem>
                    <Text mobileMultiplier={0.9} as="label">
                      Corporate E-mail
                    </Text>
                    <ContactsUsInput
                      name="email"
                      className={errors.email ? "invalid" : "valid"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={email}
                      variant="text"
                      type="email"
                      placeholder="Enter E-mail"
                    />
                    {touched.email && errors.email && <Text color="red">{errors.email}</Text>}
                  </ContactsUsItem>
                  <ContactsUsItem>
                    <Text fontSize="captionText">
                      By leaving your data you agree to the{" "}
                      <ContactUsModalLink>Privacy Policy.</ContactUsModalLink>
                    </Text>
                  </ContactsUsItem>
                  <ContactsUsItem>
                    <Button
                      type="submit"
                      disabled={!(isValid && dirty)}
                      handler={handleSubmit}
                      variant="contained"
                    >
                      Send form
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
  handler: PropTypes.func.isRequired,
  subscribeModal: PropTypes.bool.isRequired,
  data: PropTypes.exact({
    title: PropTypes.string,
    desc: PropTypes.string,
  }).isRequired,
};

export default ContactUsModal;
