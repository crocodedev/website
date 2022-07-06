import styled from "@emotion/styled";

const CtaImageInfoWrapper = styled.div`
  display: flex;

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-left: 100px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "xl")} {
    margin-left: 355px;
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    margin-left: 510px;
  }

  ${({ theme }) => theme.breakpoints.down("2xl")} {
    flex-direction: column;
    gap: 12px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    flex-direction: row;
    gap: 201px;
    margin-left: 510px;
  }
`;

export default CtaImageInfoWrapper;
