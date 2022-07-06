import styled from "@emotion/styled";
import { css } from "@emotion/react";
import PropTypes from "prop-types";

const dynamicStyle = ({ active, theme }) => css`
  ${active
    ? `
    background-color: ${theme.palette.secondary.main};
  `
    : `
    ""
  `}
`;

const StyledTechnologiesStackItem = styled.button`
  width: 300px;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  font-size: ${({ theme }) => theme.typography.fontSize.subtitle}px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  ${dynamicStyle}
`;

const TechnologiesStackItem = ({ active, handler, text }) => (
  <StyledTechnologiesStackItem onClick={handler} active={active}>
    {text}
  </StyledTechnologiesStackItem>
);

TechnologiesStackItem.propTypes = {
  active: PropTypes.func.isRequired,
  handler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default TechnologiesStackItem;
