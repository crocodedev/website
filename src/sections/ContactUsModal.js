/* eslint-disable no-console */
import PropTypes from "prop-types";
import * as yup from "yup";
import { Formik, Field } from "formik";
import ContactUsModalContent from "@/components/ContactUsModal/ContactUsModalContent";
import ContactUsModalWrapper from "@/components/ContactUsModal/ContactUsModalWrapper";
import Title from "@/components/Title";

const dataPage = {
  title: "Get in touch with us",
  desc: "Leave your details and we will contact you",
};

const ContactUsModal = ({ data = dataPage }) => {
  const { title } = data;

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
    <ContactUsModalWrapper>
      <ContactUsModalContent>
        <Title>{title}</Title>
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          validateOnBlur
          onSubmit={({ name, email }, { resetForm }) => {
            console.log(
              `\n name: ${name};
              \n email: ${email}`,
            );
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
          }) => null}
        </Formik>
      </ContactUsModalContent>
    </ContactUsModalWrapper>
  );
};

ContactUsModal.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
  }).isRequired,
};

export default ContactUsModal;
