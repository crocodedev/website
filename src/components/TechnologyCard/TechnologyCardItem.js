import styled from "@emotion/styled";

const TechnologyCardItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  white-space: nowrap;
  gap: 10px;

  > div {
    border: 5px solid ${({ theme }) => theme.palette.secondary.main};
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }

  & div {
    ${({ theme }) => theme.breakpoints.up("xl")} {
      width: 120px;
      height: 120px;
    }

    ${({ theme }) => theme.breakpoints.between("md", "xl")} {
      width: 110px;
      height: 110px;
    }

    ${({ theme }) => theme.breakpoints.between("sm", "md")} {
      width: 106px;
      height: 106px;
    }

    ${({ theme }) => theme.breakpoints.down("sm")} {
      width: 86px;
      height: 86px;
    }

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;

      ${({ theme }) => theme.breakpoints.up("xl")} {
        padding: 25px;
      }

      ${({ theme }) => theme.breakpoints.between("md", "xl")} {
        padding: 22px;
      }

      ${({ theme }) => theme.breakpoints.down("md")} {
        padding: 20px;
      }
    }
  }

  p {
    white-space: break-spaces;
    text-align: center;
  }
`;

export default TechnologyCardItem;
