/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import React, { createRef, useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import * as yup from "yup";
import { Formik, Field } from "formik";
import PhoneInput from "react-phone-input-2";

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
import Image from "@/components/Image";
import ContactsUsImage from "@/components/ContactUs/ContactsUsImage";
import ContactsUsBgImage from "@/components/ContactUs/ContactsUsBgImage";
import ContactsUsInputFile from "@/components/ContactUs/ContactsUsInputFile";
import ContactsUsContent from "@/components/ContactUs/ContactsUsContent";
import ContactsUsBgImageWrapper from "@/components/ContactUs/ContactsUsBgImageWrapper";
import ContactsUsPerson from "@/components/ContactUs/ContactsUsPerson";
import ContactsUsPersonWrapper from "@/components/ContactUs/ContactsUsPersonWrapper";
import ContactsUsPersonInfo from "@/components/ContactUs/ContactsUsPersonInfo";
import ContactsUsTextarea from "@/components/ContactUs/ContactsUsTextarea";

import "react-phone-input-2/lib/style.css";

const ContactUs = ({
  title,
  subtitle,
  nameText,
  namePlaceholder,
  messagePlaceholder,
  messageText,
  messageIcon,
  phoneText,
  emailText,
  emailPlaceholder,
  backgroundImage,
  imageTitle,
  imageSubtitle,
  buttonText,
  image,
  agreementText,
  baseUrl,
}) => {
  const theme = useTheme();

  const textRef = createRef();

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
    tel: yup.string().min(8, "min message").max(18, "max message").required("required message"),
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
          <SectionHeading title={title} text={subtitle} />
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
              onSubmit={({ resetForm }) => {
                resetForm({
                  name: "",
                  email: "",
                  file: "",
                  text: "",
                  tel: "",
                });
                setFileUpload("");
                setCheck(false);
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
                      {nameText}
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
                      {emailText}
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
                    <Text mobileMultiplier={0.9} as="label">
                      {phoneText}
                    </Text>
                    <Field name="tel">
                      {({ form: { setFieldValue } }) => (
                        <PhoneInput
                          inputProps={{ name: "tel" }}
                          containerClass={errors.tel ? "invalid" : "valid"}
                          onBlur={handleBlur}
                          country="us"
                          value={tel}
                          enableSearch
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
                      {messageText}
                    </Text>
                    <ContactsUsInputFile className={errors.text ? "invalid" : "valid"}>
                      <Field name="text">
                        {({ form: { setFieldValue } }) => (
                          <ContactsUsTextarea
                            onBlur={handleBlur}
                            name="text"
                            cols={1}
                            rows={1}
                            value={text}
                            className={errors.text ? "invalid" : "valid"}
                            ref={textRef}
                            onChange={(e) => {
                              areaChange(e, setFieldValue);
                            }}
                            placeholder={messagePlaceholder}
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
                              placeholder="file"
                              onBlur={handleBlur}
                              defaultValue={file}
                              onChange={(event) => {
                                fileChange(event, setFieldValue);
                              }}
                            />
                          )}
                        </Field>
                        <Image {...messageIcon} />
                      </Text>
                    </ContactsUsInputFile>
                    {fileUpload ? (
                      <Text color={theme.palette.primary.main}>
                        <Text as="span">your file: </Text>
                        {fileUpload}
                      </Text>
                    ) : (
                      fileUpload
                    )}
                    {touched.text && errors.text && <Text color="red">{errors.text}</Text>}
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
                        id="inputCheck"
                      />
                      <span />
                      {agreementText.text}{" "}
                      <ContactsUsLink baseUrl={baseUrl} {...agreementText.link}>
                        {agreementText.title || agreementText.link.title}
                      </ContactsUsLink>
                    </Text>
                    <Button
                      aria-label="Send form"
                      type="submit"
                      disabled={!(isValid && dirty && check)}
                      handler={handleSubmit}
                      variant="contained"
                    >
                      {buttonText}
                    </Button>
                  </ContactsUsFormBottom>
                </ContactsUsForm>
              )}
            </Formik>
            <ContactsUsPersonWrapper>
              <ContactsUsImage>
                <Image {...image} />
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
                    {imageTitle}
                  </Text>
                  <Text fontSize="captionText" lineHeight="2xsm">
                    {imageSubtitle}
                  </Text>
                </ContactsUsPersonInfo>
              </ContactsUsPerson>
            </ContactsUsPersonWrapper>
          </ContactsUsContent>
        </Container>
        <ContactsUsBgImage>
          <Image {...backgroundImage} />
        </ContactsUsBgImage>
      </ContactsUsWrapper>
    </ContactsUsBgImageWrapper>
  );
};

ContactUs.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  nameText: PropTypes.string.isRequired,
  namePlaceholder: PropTypes.string.isRequired,
  messagePlaceholder: PropTypes.string.isRequired,
  messageText: PropTypes.string.isRequired,
  messageIcon: PropTypes.object.isRequired,
  phoneText: PropTypes.string.isRequired,
  emailText: PropTypes.string.isRequired,
  emailPlaceholder: PropTypes.string.isRequired,
  backgroundImage: PropTypes.object.isRequired,
  imageTitle: PropTypes.string.isRequired,
  imageSubtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  agreementText: PropTypes.exact({
    text: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.object,
  }).isRequired,
};

export default ContactUs;
