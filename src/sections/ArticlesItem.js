import PropTypes from "prop-types";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ArticleContent from "@/components/Article/ArticleContent";
import Text from "@/components/Text";
import ArticleContentWrapper from "@/components/Article/ArticleContentWrapper";
import ArticleWrapper from "@/components/Article/ArticleWrapper";
import ArticleImage from "@/components/Article/ArticleImage";
import Image from "@/components/Image";
import ArticleContentItem from "@/components/Article/ArticleContentItem";
import BackUpButton from "@/components/BackUpButton";
import dateToIntlFormat from "@/helpers/IntlDate";
import CtaForm from "./CtaForm";

const ArticlesItem = ({
  content,
  articleSeparator,
  breadcrumbs,
  author,
  baseUrl,
  desc,
  title,
  date,
  i18n_lang: i18nLang,
}) => {
  return (
    <ArticleWrapper disablePaddings>
      <Container>
        <Breadcrumb disablePaddingBottom links={breadcrumbs} baseUrl={baseUrl} color="gray" />
        <SectionHeading
          isArticle
          title={title}
          text={`${author}, ${dateToIntlFormat(date, i18nLang)}`}
        />

        <ArticleContentWrapper>
          <ArticleContent>
            <Text mobileMultiplier={0.875} fontWeight="bold">
              {desc}
            </Text>
            {content &&
              content
                .slice(0, Math.floor(content.length / 2))
                .map(({ component, text, contentImage }) => {
                  switch (component) {
                    case "Text":
                      return (
                        <ArticleContentItem>
                          {text.map((el) => (
                            <Text mobileMultiplier={0.875} key={el}>
                              {el}
                            </Text>
                          ))}
                        </ArticleContentItem>
                      );
                    case "Image":
                      return (
                        <ArticleImage>
                          <Image {...contentImage} />
                          <Text mobileMultiplier={0.75} color="#A6A6A6">
                            {contentImage.altText}
                          </Text>
                        </ArticleImage>
                      );
                    default:
                      return null;
                  }
                })}
            <CtaForm {...articleSeparator} />
            {content &&
              content
                .slice(Math.floor(content.length / 2))
                .map(({ component, text, contentImage }) => {
                  switch (component) {
                    case "Text":
                      return (
                        <ArticleContentItem>
                          {text.map((el) => (
                            <Text mobileMultiplier={0.875} key={el}>
                              {el}
                            </Text>
                          ))}
                        </ArticleContentItem>
                      );
                    case "Image":
                      return (
                        <ArticleImage>
                          <Image {...contentImage} />
                          <Text mobileMultiplier={0.75} color="#A6A6A6">
                            {contentImage.altText}
                          </Text>
                        </ArticleImage>
                      );
                    default:
                      return null;
                  }
                })}
            {/* <ArticleBottom>
              <Text mobileMultiplier={0.875}>{bottomText}</Text>
              <ArticleBottomList>
                {social?.map(({ src, link }) => (
                  <ArticleBottomListItem key={link}>
                    <Link to={link}>
                      <ImageStatic src={src} />
                    </Link>
                  </ArticleBottomListItem>
                ))}
              </ArticleBottomList>
            </ArticleBottom>  */}
          </ArticleContent>
        </ArticleContentWrapper>
      </Container>
      <BackUpButton />
    </ArticleWrapper>
  );
};

ArticlesItem.propTypes = {
  content: PropTypes.array.isRequired,
  articleSeparator: PropTypes.object.isRequired,
  breadcrumbs: PropTypes.array.isRequired,
  author: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  baseUrl: PropTypes.string.isRequired,
  i18n_lang: PropTypes.string.isRequired,
};

export default ArticlesItem;
