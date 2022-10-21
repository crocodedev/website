import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";

import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import BlockTextItem from "@/components/BlockText/BlockTextItem";
import Container from "@/components/Container";
import BlockTextContent from "@/components/BlockText/BlockTextContent";

const BlockText = ({ content, title, subtitle }) => {
  const theme = useTheme();
  return (
    <SectionWrapper color={theme.palette.background.paper}>
      <Container>
        <BlockTextContent>
          <SectionHeading title={title} text={subtitle} />
          {content.map((el) => (
            <BlockTextItem key={el._key} {...el} />
          ))}
        </BlockTextContent>
      </Container>
    </SectionWrapper>
  );
};

BlockText.propTypes = {
  content: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default BlockText;
