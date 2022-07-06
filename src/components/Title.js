import styled from "@emotion/styled";

const Title = styled.h1`
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
  text-transform: uppercase;
  display: grid;
  gap: 10px;
  line-height: ${({ theme }) => theme.typography.lineHeight.xsm};

  &:after {
    content: "";
    display: block;
    background-color: ${({ theme }) => theme.palette.primary.main};
    margin: 0 auto;

    ${({ theme }) => theme.breakpoints.down("md")} {
      width: 100px;
      height: 4px;
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
      width: 176px;
      height: 8px;
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.fontSize.title3}px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    font-size: ${({ theme }) => theme.typography.fontSize.title2}px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: ${({ theme }) => theme.typography.fontSize.title1}px;
  }
`;

export default Title;
