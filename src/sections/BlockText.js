import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";

import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import PolicyItem from "@/components/Policy/PolicyItem";
import Container from "@/components/Container";
import PolicyContent from "@/components/Policy/PolicyContent";


const BlockText = ({ baseUrl, content, title, subtitle }) => {
  const theme = useTheme();
  return (
    <SectionWrapper color={theme.palette.background.paper}>
      <Container>
        <PolicyContent>
          <SectionHeading title={title} text={subtitle} />
          {content.map((el) => (
            <PolicyItem key={el._key} {...el} />
          ))}
        </PolicyContent>
      </Container>
    </SectionWrapper>
  );
};

BlockText.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default BlockText;
