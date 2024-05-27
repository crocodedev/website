import styled from "@emotion/styled";

const DevelopmentItemImage = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;


  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "lg")} {
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
      max-width: 35%;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
      max-width: 35%;
  }

  picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default DevelopmentItemImage;
