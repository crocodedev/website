import styled from "@emotion/styled";
import Text from "../Text";

const ProjectsStackItemHeadingLabel = styled(Text)`
  display: flex;
  align-items: center;

  /* background-color */
  background-color: ${({ theme }) => theme.palette.secondary.light};
  border-radius: 100px;
  text-align: center;
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 6px 10px;
    font-size: 12px;
    line-height: 12px;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: 12px 25px;
    font-size: 14px;
    line-height: 20px;
  }
`;

export default ProjectsStackItemHeadingLabel;
