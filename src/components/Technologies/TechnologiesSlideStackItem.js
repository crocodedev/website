import styled from "@emotion/styled";

const TechnologiesSlideStackItem = styled.div`
  display: flex;
  align-items: c center;
  flex-direction: column;
  white-space: nowrap;
  gap: 10px;
  picture {
    ${({ theme }) => theme.breakpoints.up("xl")} {
      max-width: 110px;
      max-height: 110px;
    }
    ${({ theme }) => theme.breakpoints.between("md", "xl")} {
      max-width: 90px;
      max-height: 90px;
    }
    ${({ theme }) => theme.breakpoints.down("md")} {
      max-width: 86px;
      max-height: 86px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${({ theme }) => theme.borderRadius.small};
    }
  }
`;

export default TechnologiesSlideStackItem;
