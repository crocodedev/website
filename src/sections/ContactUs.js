/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import React, { createRef, useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import * as yup from "yup";
import { Formik, Field } from "formik";
import ReactTelInput from "react-telephone-input";

import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactsUsWrapper from "@/components/ContactUs/ContactsUsWrapper";
import ContactsUsForm from "@/components/ContactUs/ContactsUsForm";
import ContactsUsItem from "@/components/ContactUs/ContactsUsItem";
import ContactsUsInput from "@/components/ContactUs/ContactsUsInput";
import Text from "@/components/Text";
import ContactsUsFormBottom from "@/components/ContactUs/ContactsUsFormBottom";
import Button from "@/components/Button";
import ContactsUsLink from "@/components/ContactUs/ContactsUsLink";
import ImageStatic from "@/components/Image";
import ContactsUsImage from "@/components/ContactUs/ContactsUsImage";
import ContactsUsBgImage from "@/components/ContactUs/ContactsUsBgImage";
import ContactsUsInputFile from "@/components/ContactUs/ContactsUsInputFile";
import ContactsUsContent from "@/components/ContactUs/ContactsUsContent";
import ContactsUsBgImageWrapper from "@/components/ContactUs/ContactsUsBgImageWrapper";
import ContactsUsPerson from "@/components/ContactUs/ContactsUsPerson";
import ContactsUsPersonWrapper from "@/components/ContactUs/ContactsUsPersonWrapper";
import ContactsUsPersonInfo from "@/components/ContactUs/ContactsUsPersonInfo";
import ContactsUsTextarea from "@/components/ContactUs/ContactsUsTextarea";

import "react-telephone-input/css/default.css";

const pageData = {
  title: "Tell us about your project",
  bgImage: "/uploads/contact-us-bg-image.jpg",
  person: {
    image: "/uploads/contacts-us-person.png",
    fullName: "Maria Thompson",
    position: "Crocode manager",
  },
};

const ContactUs = ({ data = pageData }) => {
  const {
    title,
    bgImage,
    person: { image, fullName, position },
  } = data;

  const theme = useTheme();

  const textRef = createRef();
  const phoneRef = createRef();

  const [fileUpload, setFileUpload] = useState("");
  const [check, setCheck] = useState(false);

  const fileChange = (e, handler) => {
    const file = e?.target.files[0];
    const reader = new FileReader();
    reader?.readAsText(file);

    reader.onload = () => {
      setFileUpload(file.name);
      handler("file", reader.result);
    };
  };

  const areaChange = (e, handler) => {
    textRef.current.style.height = "30px";
    textRef.current.style.height = `${e.target.scrollHeight}px`;
    handler("text", e.target.value);
  };

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
    tel: yup.string().min(9, "min message").max(18, "max message").required("required message"),
    text: yup
      .string()
      .min(10, "min message")
      .max(300, "max message")
      .typeError("error message")
      .required("required message"),
  });

  return (
    <ContactsUsBgImageWrapper>
      <ContactsUsWrapper>
        <Container>
          <SectionHeading title={title} />
          <ContactsUsContent>
            <Formik
              initialValues={{
                name: "",
                email: "",
                tel: "",
                file: "",
                text: "",
                accept: check,
              }}
              validateOnBlur
              onSubmit={({ name, email, tel, text, file }, { resetForm }) => {
                console.log(
                  `\n name: ${name},
                  \n email: ${email},
                  \n tel: ${tel},
                  \n text: ${text},
                  \n file: ${file}`,
                );
                resetForm({
                  name: "",
                  email: "",
                  file: "",
                  text: "",
                });
                setFileUpload("");
                setCheck(false);
                phoneRef.resetNumber();
              }}
              validationSchema={schema}
            >
              {({
                values: { name, email, tel, file, text, accept },
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
                    <Text mobileMultiplier={0.9} as="label">
                      Phone number
                    </Text>
                    <Field name="tel">
                      {({ form: { setFieldValue } }) => (
                        <ReactTelInput
                          onBlur={handleBlur}
                          defaultCountry="us"
                          flagsImagePath="/uploads/flags.png"
                          value={tel}
                          ref={phoneRef}
                          onChange={(phone) => {
                            setFieldValue("tel", phone);
                          }}
                        />
                      )}
                    </Field>
                    {touched.tel && errors.tel && <Text color="red">{errors.tel}</Text>}
                  </ContactsUsItem>
                  <ContactsUsItem>
                    <Text mobileMultiplier={0.9} as="label">
                      Your comments
                    </Text>
                    <ContactsUsInputFile>
                      <Field name="text">
                        {({ form: { setFieldValue } }) => (
                          <ContactsUsTextarea
                            onBlur={handleBlur}
                            name="text"
                            cols={1}
                            rows={1}
                            value={text}
                            ref={textRef}
                            onChange={(e) => {
                              areaChange(e, setFieldValue);
                            }}
                            placeholder="Brief information about the project"
                          />
                        )}
                      </Field>
                      <Text mobileMultiplier={0.9} as="label">
                        <Field name="file">
                          {({ form: { setFieldValue } }) => (
                            <ContactsUsInput
                              variant="file"
                              type="file"
                              name="file"
                              onBlur={handleBlur}
                              defaultValue={file}
                              onChange={(event) => {
                                fileChange(event, setFieldValue);
                              }}
                            />
                          )}
                        </Field>
                      </Text>
                    </ContactsUsInputFile>
                    {touched.text && errors.text && <Text color="red">{errors.text}</Text>}
                    <Text color={theme.palette.primary.main}>{fileUpload}</Text>
                  </ContactsUsItem>
                  <ContactsUsFormBottom>
                    <Text mobileMultiplier={0.9} as="label">
                      <ContactsUsInput
                        variant="checkbox"
                        type="checkbox"
                        onBlur={handleBlur}
                        value={accept}
                        checked={check}
                        onChange={() => setCheck(!check)}
                      />
                      By sending this form I confirm that I have read and accept the{" "}
                      <ContactsUsLink to="/#">Privacy Policy</ContactsUsLink>.
                    </Text>
                    {touched.accept && errors.accept && <Text>{errors.accept}</Text>}
                    <Button
                      type="submit"
                      disabled={!(isValid && dirty && check)}
                      handler={handleSubmit}
                      variant="contained"
                    >
                      Send form
                    </Button>
                  </ContactsUsFormBottom>
                </ContactsUsForm>
              )}
            </Formik>
            <ContactsUsPersonWrapper>
              <ContactsUsImage>
                <ImageStatic src={image} />
              </ContactsUsImage>
              <ContactsUsPerson>
                <ContactsUsPersonInfo>
                  <Text
                    mobileMultiplier={0.8}
                    lineHeight="xsm"
                    color={theme.palette.primary.main}
                    fontSize="subtitle"
                    fontWeight="bold"
                  >
                    {fullName}
                  </Text>
                  <Text fontSize="captionText" lineHeight="2xsm">
                    {position}
                  </Text>
                </ContactsUsPersonInfo>
              </ContactsUsPerson>
            </ContactsUsPersonWrapper>
          </ContactsUsContent>
        </Container>
        <ContactsUsBgImage>
          <ImageStatic src={bgImage} />
        </ContactsUsBgImage>
      </ContactsUsWrapper>
    </ContactsUsBgImageWrapper>
  );
};

ContactUs.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    bgImage: PropTypes.string,
    person: PropTypes.exact({
      image: PropTypes.string,
      name: PropTypes.string,
      position: PropTypes.string,
    }),
  }).isRequired,
};

export default ContactUs;
