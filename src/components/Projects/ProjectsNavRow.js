import styled from "@emotion/styled";

const ProjectsNavRow = styled.div`
  display: flex;
  align-items: center;
  
  p {
    white-space: nowrap;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
  }
  
  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 20px;
  }
`;

export default ProjectsNavRow;
