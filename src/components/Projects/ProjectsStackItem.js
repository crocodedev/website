import styled from "@emotion/styled";

const ProjectsStackItem = styled.div`
  display: grid;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 35px;
  }
`;

export default ProjectsStackItem;
