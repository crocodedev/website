import styled from "@emotion/styled";

const ProjectsNavStack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 40px;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 20px;
  }
`;

export default ProjectsNavStack;
