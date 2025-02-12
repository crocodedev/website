import styled from "@emotion/styled";

const DevelopmentItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;


  ${({ theme }) => theme.breakpoints.down("sm")} {
    gap: 5px;
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "lg")} {
    gap: 10px;
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    gap: 20px;
      max-width: 65%;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 40px;
      max-width: 65%;
  }
`;

export default DevelopmentItemContent;
