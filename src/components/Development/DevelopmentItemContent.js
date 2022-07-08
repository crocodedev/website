import styled from "@emotion/styled";

const DevelopmentItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    gap: 5px;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "lg")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 40px;
  }
`;

export default DevelopmentItemContent;
