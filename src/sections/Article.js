import PropTypes from "prop-types";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ArticleContent from "@/components/Article/ArticleContent";
import Text from "@/components/Text";
import ArticleContentWrapper from "@/components/Article/ArticleContentWrapper";
import ArticleWrapper from "@/components/Article/ArticleWrapper";
import ArticleImage from "@/components/Article/ArticleImage";
import ImageStatic from "@/components/Image";
import ArticleContentItem from "@/components/Article/ArticleContentItem";
import ArticleBottom from "@/components/Article/ArticleBottom";
import ArticleBottomList from "@/components/Article/ArticleBottomList";
import ArticleBottomListItem from "@/components/Article/ArticleBottomListItem";
import Link from "@/components/Link";
import BackUpButton from "@/components/BackUpButton";
import CtaForm from "./CtaForm";

const dataPage = {
  title: "Break is an important part of work",
  date: "Jane Cooper, 12 Apr. 2022",
  text1:
    "The pursuit of effective use of space, user well-being and functional design has contributed to the development of the contemporary interior design profession. The profession of interior design is separate and distinct from the role of interior decorator, a term commonly used in the US; the term is less common in the UK, where the profession of interior design is still unregulated and therefore, strictly speaking, not yet officially a profession.",
  text2:
    "The pursuit of effective use of space, user well-being and functional design has contributed to the development of the contemporary interior design profession. The profession of interior design is separate and distinct from the role of interior decorator, a term commonly used in the US; the term is less common in the UK, where the profession of interior design is still unregulated and therefore, strictly speaking, not yet officially a profession. The profession of interior design is separate and distinct from the role of interior decorator, a term commonly used in the US; the term is less common in the UK, where the profession of interior design is still unregulated and therefore, strictly speaking, not yet officially a profession.",
  text3:
    "The pursuit of effective use of space, user well-being and functional design has contributed to the development of the contemporary interior design profession. The profession of interior design is separate and distinct from the role of interior decorator, a term commonly used in the US; the term is less common in the UK, where the profession of interior design is still unregulated and therefore, strictly speaking, not yet officially a profession.",
  text4:
    "The profession of interior design is separate and distinct from the role of interior decorator, a term commonly used in the US; the term is less common in the UK, where the profession of interior design is still unregulated and therefore, strictly speaking, not yet officially a profession.",
  text5:
    "The pursuit of effective use of space, user well-being and functional design has contributed to the development of the contemporary interior design profession. The profession of interior design is separate and distinct from the role of interior decorator, a term commonly used in the US; the term is less common in the UK, where the profession of interior design is still unregulated and therefore, strictly speaking, not yet officially a profession. The profession of interior design is separate and distinct from the role of interior decorator, a term commonly used in the US; the term is less common in the UK, where the profession of interior design is still unregulated and therefore, strictly speaking, not yet officially a profession.",
  text6:
    "The profession of interior design is separate and distinct from the role of interior decorator, a term commonly used in the US; the term is less common in the UK, where the profession of interior design is still unregulated and therefore, strictly speaking, not yet officially a profession.",
  text7:
    "The pursuit of effective use of space, user well-being and functional design has contributed to the development of the contemporary interior design profession. The profession of interior design is separate and distinct from the role of interior decorator, a term commonly used in the US; the term is less common in the UK, where the profession of interior design is still unregulated and therefore, strictly speaking, not yet officially a profession.",
  text8:
    "The profession of interior design is separate and distinct from the role of interior decorator, a term commonly used in the US; the term is less common in the UK, where the profession of interior design is still unregulated and therefore, strictly speaking, not yet officially a profession.",
  image1: "/uploads/article-image1.jpg",
  image2: "/uploads/article-image2.jpg",
  bottomText: "Share",
  social: [
    {
      src: "/uploads/article-social1.svg",
      link: "/#",
    },
    {
      src: "/uploads/article-social2.svg",
      link: "/#",
    },
    {
      src: "/uploads/article-social3.svg",
      link: "/#",
    },
  ],
  links: ["Home", "Blog", "Article"],
};

const Article = ({ data = dataPage }) => {
  const {
    title,
    date,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    image1,
    image2,
    bottomText,
    social,
    links,
  } = data;

  return (
    <ArticleWrapper disablePaddings>
      <Container>
        <Breadcrumb disablePaddingBottom links={links} color="gray" />
        <SectionHeading title={title} />
        <ArticleContentWrapper>
          <Text color="#222222" fontWeight="200">
            {date}
          </Text>
          <ArticleContent>
            <Text mobileMultiplier={0.875} fontWeight="bold">
              {text1}
            </Text>
            <Text mobileMultiplier={0.875}>{text2}</Text>
            <ArticleImage>
              <ImageStatic src={image1} />
              <Text mobileMultiplier={0.75} color="#A6A6A6">
                Photo description
              </Text>
            </ArticleImage>
            <ArticleContentItem>
              <Text mobileMultiplier={0.875}>{text3}</Text>
              <Text mobileMultiplier={0.875}>{text4}</Text>
            </ArticleContentItem>
            <CtaForm />
            <ArticleContentItem>
              <Text mobileMultiplier={0.875}>{text5}</Text>
              <Text mobileMultiplier={0.875}>{text6}</Text>
            </ArticleContentItem>
            <ArticleImage>
              <ImageStatic src={image2} />
              <Text mobileMultiplier={0.75} color="#A6A6A6">
                Photo description
              </Text>
            </ArticleImage>
            <ArticleContentItem>
              <Text mobileMultiplier={0.875}>{text7}</Text>
              <Text mobileMultiplier={0.875}>{text8}</Text>
            </ArticleContentItem>
            <ArticleBottom>
              <Text mobileMultiplier={0.875}>{bottomText}</Text>
              <ArticleBottomList>
                {social.map(({ src, link }) => (
                  <ArticleBottomListItem key={link}>
                    <Link to={link}>
                      <ImageStatic src={src} />
                    </Link>
                  </ArticleBottomListItem>
                ))}
              </ArticleBottomList>
            </ArticleBottom>
          </ArticleContent>
        </ArticleContentWrapper>
      </Container>
      <BackUpButton />
    </ArticleWrapper>
  );
};

Article.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    date: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
    text4: PropTypes.string,
    text5: PropTypes.string,
    text6: PropTypes.string,
    text7: PropTypes.string,
    text8: PropTypes.string,
    image1: PropTypes.string,
    image2: PropTypes.string,
    bottomText: PropTypes.string,
    social: PropTypes.arrayOf(PropTypes.string),
    links: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Article;
