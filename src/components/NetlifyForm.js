import PropTypes from "prop-types";

const NetlifyForm = ({ children, formName, preSubmit, postSubmit, formValues, ...props }) => {
  const handleSubmit = async (e) => {
    const myForm = e.target;
    const formData = new FormData(myForm);

    try {
      return await fetch("/", {
        body: formData,
        method: "POST",
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
