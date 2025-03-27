import styled from "@emotion/styled";

const ProjectsNavRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  p {
    white-space: nowrap;
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 20px;
  }
`;

export default ProjectsNavRow;
