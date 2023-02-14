import styled from "@emotion/styled";
import { css } from "@emotion/react";
import PropTypes from "prop-types";

const dynamicStyle = ({ active, theme }) => css`
  ${active
    ? `
    background-color: ${theme.palette.secondary.main};
    box-shadow: ${theme.shadows.card};
  `
    : `
    ""
  `}
`;

const StyledTechnologiesStackItem = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  white-space: nowrap;
  scroll-snap-align: start;
  height: min-content;

  ${({ theme }) => theme.breakpoints.up("xl")} {
    font-size: ${({ theme }) => theme.typography.fontSize.subtitle}px;
    padding: 40px;
  }

  ${({ theme }) => theme.breakpoints.down("xl")} {
    font-size: ${({ theme }) => theme.typography.fontSize.text}px;
    padding: 12px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 160px;
  }

  ${dynamicStyle}
`;

const TechnologiesStackItem = ({ active, handler, text }) => (
  <StyledTechnologiesStackItem aria-label="Technology item" onClick={handler} active={active}>
    {text}
  </StyledTechnologiesStackItem>
);

TechnologiesStackItem.propTypes = {
  active: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default TechnologiesStackItem;
