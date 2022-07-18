/* eslint-disable import/no-unresolved */
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import * as yup from "yup";
import { Formik, Field } from "formik";

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
import ReactTelInput from "react-telephone-input";
import ContactsUsInputFile from "@/components/ContactUs/ContactsUsInputFile";
import ContactsUsContent from "@/components/ContactUs/ContactsUsContent";
import ContactsUsBgImageWrapper from "@/components/ContactUs/ContactsUsBgImageWrapper";
import ContactsUsPerson from "@/components/ContactUs/ContactsUsPerson";
import ContactsUsPersonWrapper from "@/components/ContactUs/ContactsUsPersonWrapper";
import ContactsUsPersonInfo from "@/components/ContactUs/ContactsUsPersonInfo";

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

  const schema = yup.object().shape({
    name: yup.string().min(4).max(20).typeError("error message").required("required message"),
    email: yup.string().typeError("error message").required("required message"),
    tel: yup.string().typeError("error message").required("required message"),
    file: yup.string().typeError("error message").required("required message"),
    confirm: yup.boolean().typeError("error message").required("required message"),
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
                confirm: false,
              }}
              validateOnBlur
              // eslint-disable-next-line no-console
              onSubmit={(values) => console.log(values)}
              validationSchema={schema}
            >
              {({
                values: { name, email, tel, file, confirm },
                errors,
                touched,
                handleChange,
                handleBlur,
                isValid,
                handleSubmit,
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
                    {touched.name && errors.name && <Text>{errors.name}</Text>}
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
                    {touched.email && errors.email && <Text>{errors.email}</Text>}
                  </ContactsUsItem>
                  <ContactsUsItem>
                    <Text mobileMultiplier={0.9} as="label">
                      Phone number
                    </Text>
                    <Field name="tel">
                      {({ form: { setFieldValue } }) => (
                        <ReactTelInput
                          defaultCountry="us"
                          flagsImagePath="/uploads/flags.png"
                          value={tel}
                          onChange={(phone) => {
                            setFieldValue("tel", phone);
                          }}
                        />
                      )}
                    </Field>
                    {touched.tel && errors.tel && <Text>{errors.tel}</Text>}
                  </ContactsUsItem>
                  <ContactsUsItem>
                    <Text mobileMultiplier={0.9} as="label">
                      Your comments
                    </Text>
                    <ContactsUsInputFile>
                      <Text mobileMultiplier={0.9} as="label">
                        {file ? file.slice(12) : "Brief information about the project"}
                        <ContactsUsInput
                          name="file"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={file}
                          variant="file"
                          type="file"
                        />
                      </Text>
                    </ContactsUsInputFile>
                    {touched.file && errors.file && <Text>{errors.file}</Text>}
                  </ContactsUsItem>
                  <ContactsUsFormBottom>
                    <Text mobileMultiplier={0.9} as="label">
                      <ContactsUsInput
                        name="confirm"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={confirm}
                        variant="checkbox"
                        type="checkbox"
                      />
                      By sending this form I confirm that I have read and accept the{" "}
                      <ContactsUsLink to="/#">Privacy Policy</ContactsUsLink>.
                    </Text>
                    {touched.confirm && errors.confirm && <Text>{errors.confirm}</Text>}
                    <Button
                      disabled={!isValid && !dirty}
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
