import styled from "@emotion/styled";

const Title = styled.h1`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
  text-transform: uppercase;
  display: grid;

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
    font-size: 40px;
    gap: 5px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: 60px;
    gap: 10px;
  }
`;

export default Title;
