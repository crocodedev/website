import styled from "@emotion/styled";

const TechnologyStackContent = styled.div`
  display: flex;

  ${({ theme }) => theme.breakpoints.down("md")} {
    overflow-x: auto;
    width: 100%;
    gap: 20px;
    padding: 5px;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  ${({ theme }) => theme.breakpoints.between("md", "lg")} {
    flex-wrap: wrap;
    gap: 30px;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    flex-wrap: wrap;
    gap: 60px;
  }
`;

export default TechnologyStackContent;
