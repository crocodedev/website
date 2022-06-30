import styled from "@emotion/styled";
import Text from "../Text";

const CreateProjectText = styled(Text)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 260px;
  }
`;

export default CreateProjectText;
