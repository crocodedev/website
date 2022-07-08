import styled from "@emotion/styled";

const ProjectsStackItemImageWrapper = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 59%;

  picture {
    position: absolute;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }
`;

export default ProjectsStackItemImageWrapper;
