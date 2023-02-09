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

  div {
    flex-shrink: 0;

    & img {
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
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 20px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    padding: 40px 20px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    padding: 88px 40px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    padding: 127px 40px;
  }
`;

export default MapStackInfoItem;
