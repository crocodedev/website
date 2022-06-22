import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Title from "./Title";
import Text from "./Text";

const Component = styled.div`
  display: grid;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 20px;
  }
`;

const SectionHeading = ({ title, text }) => (
  <Component>
    {title && <Title>{title}</Title>}
    {text && <Text textAlign="center">{text}</Text>}
  </Component>
);

SectionHeading.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

SectionHeading.defaultProps = {
  title: null,
  text: null,
};

export default SectionHeading;
