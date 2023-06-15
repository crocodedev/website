import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

const TitleMain = ({ tag, children }) => {
  const TitleStyled = styled(tag)`
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: #7dbe3b;
    text-align: center;
    display: grid;
    gap: 10px;
    line-height: ${({ theme }) => theme.typography.lineHeight.xsm};

    ${({ theme }) => theme.breakpoints.down("md")} {
      font-size: 64px;
    }

    ${({ theme }) => theme.breakpoints.between("md", "lg")} {
      font-size: 120px;
    }

    ${({ theme }) => theme.breakpoints.up("lg")} {
      font-size: 180px;
    }
  `;

  return <TitleStyled>{children}</TitleStyled>;
};

TitleMain.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node,
};

TitleMain.defaultProps = {
  tag: "h1",
  children: {},
};

export default TitleMain;
