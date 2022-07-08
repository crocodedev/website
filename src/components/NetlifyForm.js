import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const NetlifyForm = ({ children, formName, preSubmit, postSubmit, formValues, ...props }) => {
  const [inNetlifyBuild, setInNetlifyBuild] = useState(true);
  const [honey, setHoney] = useState("");

  useEffect(() => {
    setInNetlifyBuild(false);
  }, []);

  const formEncodeString = (str) => encodeURIComponent(str).replace(/%20/g, "+");
  const encodeData = (obj) =>
    Object.entries(obj)
      .map((pair) => `${formEncodeString(pair[0])}=${formEncodeString(pair[1])}`)
      .join("&");

  const handleSubmit = async () => {
    try {
      return await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeData({
          ...formValues,
          "form-name": formName,
          infoo: honey,
        }),
      });
    } catch (error) {
      return null;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if ((preSubmit && (await preSubmit())) || !preSubmit) {
      if (await handleSubmit()) {
        if (postSubmit) postSubmit();
      } else {
        throw new Error("Error submitting to Netlify");
      }
    } else {
      throw new Error("Error validation ReCaptcha. You are bot.");
    }
  };

  if (inNetlifyBuild)
    return (
      <form
        {...props}
        name={formName}
        onSubmit={onSubmit}
        data-netlify="true"
        netlify-honeypot="infoo"
      >
        {children}
      </form>
    );
  return (
    <form {...props} onSubmit={onSubmit}>
      {children}
      <p style={{ opacity: "0", position: "absolute", top: "0", left: "0" }}>
        <input
          style={{ width: "0", height: "0", zIndex: "-1" }}
          name="description"
          aria-label="description"
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
        />
      </p>
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
