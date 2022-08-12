import styled from "@emotion/styled";

const ChallengeContent = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 40px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    gap: 60px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 47px;
  }
`;

export default ChallengeContent;
