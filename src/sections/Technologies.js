import React from "react";
import PropTypes from "prop-types";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import TechnologiesWrapper from "@/components/Technologies/TechnologiesWrapper";
import TechnologiesStack from "@/components/Technologies/TechnologiesStack";
import TechnologiesStackItem from "@/components/Technologies/TechnologiesStackItem";
import TechnologiesSlide from "@/components/Technologies/TechnologiesSlide";
import TechnologiesSlideStack from "@/components/Technologies/TechnologiesSlideStack";
import TechnologiesSlideText from "@/components/Technologies/TechnologiesSlideText";
import TechnologyCard from "@/components/TechnologyCard";

const Technologies = ({ title, subtitle, categories }) => {
  const [currSlide, setCurrSlide] = React.useState(categories[0]._key);
  const handlerSetCurrSlide = (slide) => setCurrSlide(slide);
  return (
    <SectionWrapper>
      <Container>
        <SectionHeading title={title} text={subtitle} />
        <TechnologiesWrapper>
          <TechnologiesStack>
            {categories?.map(({ title: categoryTitle, _key }) => (
              <TechnologiesStackItem
                active={_key === currSlide}
                key={_key}
                text={categoryTitle}
                handler={() => handlerSetCurrSlide(_key)}
              />
            ))}
          </TechnologiesStack>
          {categories?.map(({ text, _key, technologiesList }) => (
            <TechnologiesSlide key={_key} active={_key === currSlide}>
              <TechnologiesSlideStack>
                {technologiesList?.map(({ title: itemTitle, _key: itemKey, technologyImage, link}) => (
                  <TechnologyCard key={itemKey} title={itemTitle} image={technologyImage} link={link} to={link?.linkInternal?.reference?.slug?.current} />
                ))}
              </TechnologiesSlideStack>
              <TechnologiesSlideText
                lineHeight="lg"
                fontSize="text"
                fontWeight="regular"
                mobileMultiplier={0.875}
              >
                {text}
              </TechnologiesSlideText>
            </TechnologiesSlide>
          ))}
        </TechnologiesWrapper>
      </Container>
    </SectionWrapper>
  );
};

Technologies.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string,
      text: PropTypes.string,
      slug: PropTypes.string,
      _key: PropTypes.string,
      technologiesList: PropTypes.arrayOf(
        PropTypes.exact({
          title: PropTypes.string,
          link: PropTypes.any,
          _key: PropTypes.string,
          technologyImage: PropTypes.object,
        }),
      ),
    }),
  ).isRequired,
};

Technologies.defaultProps = {
  subtitle: "",
};

export default Technologies;
