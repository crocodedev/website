import PropTypes from "prop-types";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import TechnologyStackContent from "@/components/TechnologyStack/TechnologyStackContent";
import TechnologyCard from "@/components/TechnologyCard";

const TechnologyStack = ({ title, items }) => {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeading title={title} />
        <TechnologyStackContent>
          {items?.map(({ _key, title: itemTitle, itemimage }) => (
            <TechnologyCard key={_key} image={itemimage} title={itemTitle} />
          ))}
        </TechnologyStackContent>
      </Container>
    </SectionWrapper>
  );
};

TechnologyStack.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      _key: PropTypes.string,
      title: PropTypes.string,
      itemimage: PropTypes.object,
    }),
  ).isRequired,
};

export default TechnologyStack;
