import styled from "@emotion/styled";

const ContactUsModalContent = styled.div`
  text-align: center;
  position: fixed;
  left: 50%;
  top: 50vh;
  transform: translate(-50%, -50%);

  ${({ theme }) => theme.breakpoints.down("sm")} {
    min-width: 100%;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    min-width: 400px;
  }

  & h1 {
    font-size: 30px;
  }

  & form {
    text-align: start;
    padding-bottom: 0;
    align-self: center;

    ${({ theme }) => theme.breakpoints.down("md")} {
      padding-top: 20px;
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
      padding-top: 30px;
    }

    & button {
      align-self: center;

      &:disabled {
        pointer-events: none;
        background-color: ${({ theme }) => theme.palette.secondary.dark};
      }
    }
  }
`;

export default ContactUsModalContent;
