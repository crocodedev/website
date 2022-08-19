import PropTypes from "prop-types";
import * as yup from "yup";
import { Formik } from "formik";
import ContactUsModalContent from "@/components/ContactUsModal/ContactUsModalContent";
import Title from "@/components/Title";
import ContactsUsForm from "@/components/ContactUs/ContactsUsForm";
import ContactsUsItem from "@/components/ContactUs/ContactsUsItem";
import Text from "@/components/Text";
import ContactsUsInput from "@/components/ContactUs/ContactsUsInput";
import Button from "@/components/Button";
import ContactUsModalLink from "@/components/ContactUsModal/ContactUsModalLink";
import ContactUsModalCloseWrapper from "@/components/ContactUsModal/ContactUsModalCloseWrapper";
import ContactUsModalClose from "@/components/ContactUsModal/ContactUsModalClose";
import ImageStatic from "@/components/Image";
import ContactUsModalWrapper from "@/components/ContactUsModal/ContactUsModalWrapper";
import React from "react";

const dataPage = {
  title: "Get in touch with us",
  desc: "Leave your details and we will contact you",
};

const ContactUsModal = ({ data = dataPage }) => {
  const { title, desc } = data;
  const [closeModal, setCloseModal] = React.useState(null);

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
    <ContactUsModalWrapper variant={closeModal}>
      <ContactUsModalContent>
        <ContactUsModalCloseWrapper variant={closeModal}>
          <ContactUsModalClose>
            <Button handler={() => setCloseModal("none")}>
              <ImageStatic src="/uploads/contact-us-modal-close.svg" />
            </Button>
          </ContactUsModalClose>
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
        </ContactUsModalCloseWrapper>
      </ContactUsModalContent>
    </ContactUsModalWrapper>
  );
};

ContactUsModal.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    desc: PropTypes.string,
  }).isRequired,
};

export default ContactUsModal;
