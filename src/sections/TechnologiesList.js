import PropTypes from "prop-types";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import TechnologiesListItem from "@/components/TechnologiesList/TechnologiesListItem";
import TechnologiesListTitle from "@/components/TechnologiesList/TechnologiesListTitle";
import TechnologiesListGrid from "@/components/TechnologiesList/TechnologiesListGrid";

const TechnologiesList = ({ title, listTitle, items }) => {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeading title={title} />
        <TechnologiesList>
          <TechnologiesListTitle>{listTitle}</TechnologiesListTitle>
          <TechnologiesListGrid>
            {items?.map(({ _key, title: itemTitle, itemimage }) => (
              <TechnologiesListItem key={_key} image={itemimage} title={itemTitle} />
            ))}
          </TechnologiesListGrid>
        </TechnologiesList>
      </Container>
    </SectionWrapper>
  );
};

TechnologiesList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string,
      title: PropTypes.string,
      itemimage: PropTypes.object,
    }),
  ).isRequired,
};

export default TechnologiesList;
