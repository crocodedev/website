import styled from "@emotion/styled";

const ChallengeText = styled.div`
  ${({ theme }) => theme.breakpoints.down("sm")} {
    max-width: 280px;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    max-width: 450px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    max-width: 600px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    max-width: 894px;
  }
`;

export default ChallengeText;
