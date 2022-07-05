import styled from "@emotion/styled";

const CtaFormInput = styled.input`
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 10px 15px;

  &:focus {
    outline: none;
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
