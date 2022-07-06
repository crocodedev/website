import styled from "@emotion/styled";

const DevelopmentItem = styled.article`
  display: flex;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 10px;
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 40px;
  }
`;

export default DevelopmentItem;
