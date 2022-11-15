import styled from "@emotion/styled";

const MapStackInfoItem = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 20px;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  position: relative;

  img {
    ${({ theme }) => theme.breakpoints.down("md")} {
      width: 24px;
      height: 24px;
    }

    ${({ theme }) => theme.breakpoints.between("md", "lg")} {
      width: 27px;
      height: 27px;
    }

    ${({ theme }) => theme.breakpoints.up("lg")} {
      width: 45px;
      height: 45px;
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 20px 43px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    padding: 40px 58px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    padding: 88px 63px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    padding: 127px 63px;
  }
`;

export default MapStackInfoItem;
