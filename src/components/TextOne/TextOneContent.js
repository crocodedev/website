import styled from "@emotion/styled";

const TextOneContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    gap: 10px;
    padding-bottom: 250px;
  }

  ${({ theme }) => theme.breakpoints.between("sm", "md")} {
    max-width: 340px;
    gap: 20px;
    padding-bottom: 280px;
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    max-width: 440px;
    gap: 20px;
    transform: translateX(25%);
  }

  ${({ theme }) => theme.breakpoints.between("lg", "xl")} {
    gap: 40px;
    max-width: 580px;
    transform: translateX(32%);
  }

  ${({ theme }) => theme.breakpoints.between("xl", "2xl")} {
    padding-top: 72px;
    padding-bottom: 42px;
    max-width: 694px;
    transform: translateX(41%);
    gap: 40px;
  }

  ${({ theme }) => theme.breakpoints.up("2xl")} {
    max-width: 700px;
    padding-top: 72px;
    transform: translateX(45%);
    gap: 40px;
    padding-bottom: 42px;
  }
`;

export default TextOneContent;
