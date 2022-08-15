import styled from "@emotion/styled";

const ContactsUsImage = styled.div`
  display: flex;
  overflow: hidden;
  height: 100%;
  max-width: 100%;
  align-items: flex-end;

  & div img {
    height: 100%;
    object-fit: cover;

    ${({ theme }) => theme.breakpoints.down("md")} {
      width: 100%;
    }

    ${({ theme }) => theme.breakpoints.between("md", "lg")} {
      width: 400px;
    }

    ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
      width: 440px;
      height: 600px;
    }

    ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
      width: 530px;
    }

    ${({ theme }) => theme.breakpoints.up("2xl")} {
      width: 500px;
    }
  }
`;

export default ContactsUsImage;
