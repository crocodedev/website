import PropTypes from "prop-types";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SectionWrapper from "@/components/SectionWrapper";
import FAQStack from "@/components/FAQ/FAQStack";
import FAQColumn from "@/components/FAQ/FAQColumn";
import FAQItem from "@/components/FAQ/FAQItem";

const FAQ = ({ subtitle, title, items, bgColor }) => {
  return (
    <SectionWrapper bgColor={bgColor}>
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />
        <FAQStack>
          <FAQColumn>
            {items.slice(0, items.length / 2)?.map(({ title: itemTitle, text, _key }) => (
              <FAQItem key={_key} title={itemTitle} text={text} />
            ))}
          </FAQColumn>
          <FAQColumn>
            {items.slice(items.length / 2)?.map(({ title: itemTitle, text, _key }) => (
              <FAQItem key={_key} title={itemTitle} text={text} />
            ))}
          </FAQColumn>
        </FAQStack>
      </Container>
    </SectionWrapper>
  );
};

FAQ.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      _key: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FAQ;
