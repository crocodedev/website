import styled from "@emotion/styled";

const BenefitsDescription = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 935px;
  gap: 38px;

  &::before {
    content: "";
    z-index: -1;
    display: block;
    position: absolute;
    width: 672px;
    height: 672px;
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.palette.primary.main},
      0px 0px 0px 65px ${({ theme }) => theme.palette.background.default},
      0px 0px 0px 67px rgba(125, 190, 59, 0.2),
      0px 0px 0px 135px ${({ theme }) => theme.palette.background.default},
      0px 0px 0px 137px rgba(125, 190, 59, 0.1);
  }
`;

export default BenefitsDescription;
