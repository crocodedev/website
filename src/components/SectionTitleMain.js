import PropTypes from "prop-types";

import styled from "@emotion/styled";
import TitleMain from "./TitleMain";

const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 20px;
  }
`;

const SectionTitleMain = ({ title, titleTag }) => (
  <Component>{title && <TitleMain tag={titleTag}>{title}</TitleMain>}</Component>
);

SectionTitleMain.propTypes = {
  title: PropTypes.string,
  titleTag: PropTypes.string,
};

SectionTitleMain.defaultProps = {
  title: "",
  titleTag: "h1",
};

export default SectionTitleMain;
