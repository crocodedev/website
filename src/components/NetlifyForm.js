import PropTypes from "prop-types";

const NetlifyForm = ({ children, formName, preSubmit, postSubmit, formValues, ...props }) => {
  const formEncodeString = (str) => encodeURIComponent(str).replace(/%20/g, "+");
  const encodeData = (obj) =>
    Object.entries(obj)
      .map((pair) => `${formEncodeString(pair[0])}=${formEncodeString(pair[1])}`)
      .join("&");

  const handleSubmit = async (e) => {
    const myForm = e.target;
    const formData = new FormData(myForm);

    console.log(e.target);
    console.log(formData);

    try {
      return await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),

        // body: encodeData({
        //   ...formValues,
        //   "form-name": formName,
        // }),
      });
    } catch (error) {
      return null;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if ((preSubmit && (await preSubmit())) || !preSubmit) {
      if (await handleSubmit(e)) {
        if (postSubmit) postSubmit();
      } else {
        throw new Error("Error submitting to Netlify");
      }
    } else {
      throw new Error("Error validation ReCaptcha. You are bot.");
    }
  };

  return (
    <form
      encType="multipart/form-data"
      {...props}
      name={formName}
      method="POST"
      onSubmit={onSubmit}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-filed" />
      {children}
    </form>
  );
};

NetlifyForm.propTypes = {
  formName: PropTypes.string.isRequired,
  formValues: PropTypes.object.isRequired,
  children: PropTypes.node,
  preSubmit: PropTypes.func,
  postSubmit: PropTypes.func,
};

NetlifyForm.defaultProps = {
  children: null,
  preSubmit: () => true,
  postSubmit: () => {},
};

export default NetlifyForm;
