import styled from "@emotion/styled";

const ProjectsStackItemContent = styled.div`
  display: grid;

  ${({ theme }) => theme.breakpoints.down("xl")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    gap: 20px;
  }
`;

export default ProjectsStackItemContent;
