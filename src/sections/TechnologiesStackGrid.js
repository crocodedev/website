import PropTypes from "prop-types";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import TechnologiesStackGridItem from "@/components/TechnologiesStackGrid/TechnologiesStackGridItem";
import TechnologiesStackGridTitle from "@/components/TechnologiesStackGrid/TechnologiesStackGridTitle";
import TechnologiesStackGridRow from "@/components/TechnologiesStackGrid/TechnologiesStackGridRow";

const TechnologiesStackGrid = ({ title, listTitle, items }) => {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeading title={title} />
        <TechnologiesStackGrid>
          <TechnologiesStackGridTitle>{listTitle}</TechnologiesStackGridTitle>
          <TechnologiesStackGridRow>
            {items?.map(({ _key, title: itemTitle, itemimage }) => (
              <TechnologiesStackGridItem key={_key} image={itemimage} title={itemTitle} />
            ))}
          </TechnologiesStackGridRow>
        </TechnologiesStackGrid>
      </Container>
    </SectionWrapper>
  );
};

TechnologiesStackGrid.propTypes = {
  title: PropTypes.string.isRequired,
  listTitle: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string,
      title: PropTypes.string,
      itemimage: PropTypes.object,
    }),
  ).isRequired,
};

export default TechnologiesStackGrid;
