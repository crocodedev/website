import styled from "@emotion/styled";
import { css } from "@emotion/react";

const dynamicStyle = ({ disablePaddings }) => css`
  ${disablePaddings
    ? ""
    : `
    padding-left: 20px;
    padding-right: 20px;
    `}
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    gap: 40px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 60px;
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    margin-right: auto;
    margin-left: auto;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    max-width: ${({ theme }) => theme.breakpoints.values.sm}px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    max-width: ${({ theme }) => theme.breakpoints.values.md}px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    max-width: ${({ theme }) => theme.breakpoints.values.xl}px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    max-width: ${({ theme }) => theme.breakpoints.values["2xl"]}px;
  }

  ${dynamicStyle}
`;

export default Container;
