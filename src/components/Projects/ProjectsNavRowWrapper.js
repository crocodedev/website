import styled from "@emotion/styled";

const ProjectsNavRowWrapper = styled.div`
  display: flex;
  overflow: hidden;
  white-space: nowrap;

  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 100%;
    padding: 0;
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;

    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

export default ProjectsNavRowWrapper;
