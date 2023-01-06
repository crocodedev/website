import styled from "@emotion/styled";

const TechnologyCardItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  white-space: nowrap;
  gap: 10px;
  
  > div {
    outline: 5px solid ${({ theme }) => theme.palette.secondary.main};
  }

  & div {
    border-radius: ${({ theme }) => theme.borderRadius.small};

    ${({ theme }) => theme.breakpoints.up("xl")} {
      width: 110px;
      height: 110px;
    }

    ${({ theme }) => theme.breakpoints.between("md", "xl")} {
      width: 90px;
      height: 90px;
    }

    ${({ theme }) => theme.breakpoints.down("md")} {
      width: 86px;
      height: 86px;
    }

    img {
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
