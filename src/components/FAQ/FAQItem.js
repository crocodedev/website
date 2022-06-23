import { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Text from "@/components/Text";
import FAQItemHeading from "./FAQItemHeading";
import FAQItemContent from "./FAQItemContent";
import FAQMarker from "./FAQMarker";

const Component = styled.div`
  padding: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  max-height: min-content;
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

const FAQItem = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState();
  const handlerIsOpen = () => setIsOpen(!isOpen);
  return (
    <Component onClick={handlerIsOpen}>
      <FAQItemHeading>
        <Text fontWeight="medium">{title}</Text>
        <FAQMarker isOpen={isOpen} />
      </FAQItemHeading>
      <FAQItemContent isOpen={isOpen}>
        <Text>{text}</Text>
      </FAQItemContent>
    </Component>
  );
};

FAQItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FAQItem;
