import styled from "@emotion/styled";

const CtaFormInput = styled.input`
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 10px 15px;

  &:focus {
    outline: none;
  }

  &.invalid {
    border: 1px solid #f40808;
    box-shadow: 0px 0px 10px rgba(244, 8, 8, 0.1);
  }

  &.valid {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0px 0px 10px rgba(125, 190, 59, 0.1);
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 280px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    width: 300px;
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    height: 44px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    width: 330px;
    height: 47px;
  }
`;

export default CtaFormInput;
