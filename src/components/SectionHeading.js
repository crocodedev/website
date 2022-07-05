import styled from "@emotion/styled";
import Title from "./Title";
import Text from "./Text";

const Component = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    gap: 20px;
  }
`;

const SectionHeadingText = styled(Text)`
  ${({ theme }) => theme.breakpoints.up("lg")} {
    max-width: 844px;
  }
`;

// TODO: prop-types
const SectionHeading = ({ title, text }) => (
  <Component>
    {title && <Title>{title}</Title>}
    {text && (
      <SectionHeadingText
        fontSize="subtitle"
        lineHeight="lg"
        textAlign="center"
        mobileMultiplier={0.7}
      >
        {text}
      </SectionHeadingText>
    )}
  </Component>
);

export default SectionHeading;
