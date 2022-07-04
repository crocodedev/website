import styled from "@emotion/styled";

const ProjectsNavRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 0;
  }
  p {
    white-space: nowrap;
  }
`;

export default ProjectsNavRow;
