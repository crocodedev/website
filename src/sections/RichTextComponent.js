import PropTypes from "prop-types";
import PortableText from "@sanity/block-content-to-react";
import Text from "@/components/Text";
import styled from "@emotion/styled";

const RichTextContent = styled.div`
  a {
    color: #7dbe3b;
    font-weight: 500;
  }

  ol,
  ul {
    display: block;
    list-style-type: decimal;
    margin-block-start: 2.5em;
    margin-block-end: 2.5em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;

    li {
      margin-bottom: 20px;
      font-weight: 400;
      color: #222;
      text-align: unset;
      font-weight: 400;
      line-height: 170%;


      ${({ theme }) => theme.breakpoints.down("lg")} {
        font-size: 14px;
      }

      ${({ theme }) => theme.breakpoints.up("lg")} {
        font-size: 20px;
      }
    }
  }

  h1,h2,h3,h4,h5,h6 {
    margin-bottom: 20px;
  }
`;

const serializers = {
  types: {
    block: ({ node, children }) => {
      switch (node.style) {
        case "h1":
          return (
            <Text as="h1" fontSize="title0" mobileMultiplier={0.5} fontWeight="bold">
              {children}
            </Text>
          );
        case "h2":
          return (
            <Text as="h2" fontSize="title1" mobileMultiplier={0.5} fontWeight="bold">
              {children}
            </Text>
          );
        case "h3":
          return (
            <Text as="h3" fontSize="title2" mobileMultiplier={0.5} fontWeight="bold">
              {children}
            </Text>
          );
        case "h4":
          return (
            <Text as="h4" fontSize="title3" mobileMultiplier={0.5} fontWeight="bold">
              {children}
            </Text>
          );
        case "h5":
          return (
            <Text as="h5" fontSize="subtitle" mobileMultiplier={0.7}>
              {children}
            </Text>
          );
        case "h6":
          return (
            <Text as="h6" fontSize="subtitle" mobileMultiplier={0.7}>
              {children}
            </Text>
          );
        case "normal":
          return (
            <Text fontSize="subtitle" mobileMultiplier={0.7}>
              {children}
            </Text>
          );
        default:
          return <p> {children} </p>;
      }
    },
  },
};

const RichTextComponent = ({ data }) => {
  return (
    <RichTextContent>
      <PortableText className="test" blocks={data} serializers={serializers} />
    </RichTextContent>
  );
};

RichTextComponent.propTypes = {
  data: PropTypes.array,
};

RichTextComponent.defaultProps = {
  data: [],
};

export default RichTextComponent;
