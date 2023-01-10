import styled from "@emotion/styled";

const ProjectsStack = styled.div`
  width: 100%;
  display: grid;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.breakpoints.down("xl")} {
    grid-row-gap: 40px;
    grid-column-gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    grid-row-gap: 60px;
    grid-column-gap: 40px;
  }
`;

export default ProjectsStack;
