import styled from "@emotion/styled";

const BenefitsDescription = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    z-index: -1;
    display: block;
    position: absolute;
    border-radius: ${({ theme }) => theme.borderRadius.circle};

    ${({ theme }) => theme.breakpoints.down("md")} {
      width: 320px;
      height: 320px;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.primary.main},
        0 0 0 30px ${({ theme }) => theme.palette.background.default},
        0 0 0 32px rgba(125, 190, 59, 0.2),
        0 0 0 65px ${({ theme }) => theme.palette.background.default},
        0 0 0 67px rgba(125, 190, 59, 0.1);
    }

    ${({ theme }) => theme.breakpoints.between("md", "xl")} {
      width: 404px;
      height: 404px;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.primary.main},
        0 0 0 39px ${({ theme }) => theme.palette.background.default},
        0 0 0 41px rgba(125, 190, 59, 0.2),
        0 0 0 82px ${({ theme }) => theme.palette.background.default},
        0 0 0 84px rgba(125, 190, 59, 0.1);
    }

    ${({ theme }) => theme.breakpoints.up("xl")} {
      width: 672px;
      height: 672px;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.primary.main},
        0 0 0 65px ${({ theme }) => theme.palette.background.default},
        0 0 0 67px rgba(125, 190, 59, 0.2),
        0 0 0 135px ${({ theme }) => theme.palette.background.default},
        0 0 0 137px rgba(125, 190, 59, 0.1);
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    height: 446px;
    gap: 5px;
    margin-bottom: 20px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    height: 562px;
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    height: 935px;
    gap: 40px;
  }
`;

export default BenefitsDescription;
