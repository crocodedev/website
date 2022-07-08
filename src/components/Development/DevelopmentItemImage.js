import styled from "@emotion/styled";

const DevelopmentItemImage = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;

  picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default DevelopmentItemImage;
