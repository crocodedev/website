import styled from "@emotion/styled";

const ProjectsNavRowWrapper = styled.div`
  display: flex;
  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 100%;
    overflow-x: auto;
    padding: 0;
    gap: 10px;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 20px;
  }
`;

export default ProjectsNavRowWrapper;
