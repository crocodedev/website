import styled from "@emotion/styled";

const TechnologiesSlideStackItem = styled.div`
  display: flex;
  align-items: c center;
  flex-direction: column;
  gap: 10px;
  picture {
    max-width: 110px;
    max-height: 110px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${({ theme }) => theme.borderRadius.small};
    }
  }
`;

export default TechnologiesSlideStackItem;
