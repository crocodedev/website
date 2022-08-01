import styled from "@emotion/styled";

const ContactsUsBgImage = styled.div`
  position: absolute;
  z-index: -2;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    height: 100%;
    float: right;
    object-fit: cover;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    bottom: 0;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    top: 0;
  }
`;

export default ContactsUsBgImage;
