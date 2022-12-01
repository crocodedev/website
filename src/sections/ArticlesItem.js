import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";

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
import ArticleBottom from "@/components/Article/ArticleBottom";
import ArticleBottomList from "@/components/Article/ArticleBottomList";
import ArticleBottomListItem from "@/components/Article/ArticleBottomListItem";
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
  sharedText,
  i18n_lang: i18nLang,
}) => {
  const theme = useTheme();

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
                          {contentImage?.altText && (
                            <Text mobileMultiplier={0.75} color={theme.palette.text.disabled}>
                              {contentImage.altText}
                            </Text>
                          )}
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
                          {contentImage?.altText && (
                            <Text mobileMultiplier={0.75} color={theme.palette.text.disabled}>
                              {contentImage.altText}
                            </Text>
                          )}
                        </ArticleImage>
                      );
                    default:
                      return null;
                  }
                })}
            <ArticleBottom>
              <Text fontWeight="bold" mobileMultiplier={0.875}>
                {sharedText}
              </Text>
              <ArticleBottomList>
                <ArticleBottomListItem>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${
                      typeof window !== "undefined" && location.href
                    }`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="50" height="50" rx="10" fill="#F8F8F8" />
                      <path
                        d="M26.9795 38V24.9985H30.5295L31 20.5181H26.9795L26.9855 18.2756C26.9855 17.107 27.0953 16.4809 28.7555 16.4809H30.9749V12H27.4243C23.1595 12 21.6584 14.1735 21.6584 17.8286V20.5186H19V24.999H21.6584V38H26.9795Z"
                        fill="#A6A6A6"
                      />
                    </svg>
                  </a>
                </ArticleBottomListItem>
                <ArticleBottomListItem>
                  <a
                    href={`https://twitter.com/share?url=${
                      typeof window !== "undefined" && location.href
                    }`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="50" height="50" rx="10" fill="#F8F8F8" />
                      <path
                        d="M24.6534 20.3203L24.7054 21.1854L23.8383 21.0794C20.6822 20.6734 17.9249 19.2964 15.5839 16.9837L14.4393 15.8361L14.1445 16.6835C13.5202 18.5725 13.9191 20.5675 15.2197 21.9092C15.9133 22.6507 15.7573 22.7566 14.5607 22.3152C14.1445 22.174 13.7804 22.0681 13.7457 22.121C13.6243 22.2446 14.0405 23.8512 14.37 24.4867C14.8208 25.3694 15.7399 26.2345 16.7457 26.7464L17.5955 27.1525L16.5897 27.1701C15.6185 27.1701 15.5839 27.1878 15.6879 27.5585C16.0347 28.7061 17.4047 29.9242 18.9307 30.4538L20.0059 30.8246L19.0695 31.3895C17.6822 32.2016 16.0521 32.6606 14.422 32.6959C13.6416 32.7136 13 32.7842 13 32.8371C13 33.0137 15.1156 34.0023 16.3469 34.3907C20.0406 35.5382 24.4279 35.0439 27.7228 33.0843C30.0639 31.6896 32.4049 28.9179 33.4974 26.2345C34.087 24.8045 34.6767 22.1917 34.6767 20.9382C34.6767 20.1261 34.7287 20.0202 35.6998 19.0492C36.2721 18.4843 36.8096 17.8664 36.9137 17.6898C37.0871 17.3544 37.0698 17.3544 36.1853 17.6545C34.7113 18.1842 34.5032 18.1135 35.2316 17.3191C35.7692 16.7542 36.4108 15.7302 36.4108 15.4301C36.4108 15.3771 36.1507 15.4654 35.8559 15.6243C35.5437 15.8008 34.8501 16.0656 34.3298 16.2245L33.3934 16.5247L32.5437 15.9421C32.0755 15.6243 31.4165 15.2712 31.0697 15.1653C30.1853 14.9181 28.8326 14.9534 28.0349 15.2359C25.8673 16.0303 24.4973 18.0782 24.6534 20.3203Z"
                        fill="#A6A6A6"
                      />
                    </svg>
                  </a>
                </ArticleBottomListItem>
                <ArticleBottomListItem>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${
                      typeof window !== "undefined" && location.href
                    }&title=${title}&summary=${desc}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="50" height="50" rx="10" fill="#F8F8F8" />
                      <path d="M18.4519 20.8062H13.3086V36.9994H18.4519V20.8062Z" fill="#A6A6A6" />
                      <path
                        d="M18.7862 15.7971C18.7528 14.2093 17.6693 13 15.9098 13C14.1503 13 13 14.2093 13 15.7971C13 17.3519 14.1163 18.5961 15.843 18.5961H15.8759C17.6693 18.5961 18.7862 17.3519 18.7862 15.7971Z"
                        fill="#A6A6A6"
                      />
                      <path
                        d="M36.9987 27.7148C36.9987 22.7409 34.4613 20.426 31.0768 20.426C28.346 20.426 27.1234 21.9978 26.4408 23.1003V20.8067H21.2969C21.3647 22.3262 21.2969 37 21.2969 37H26.4408V27.9563C26.4408 27.4724 26.4742 26.9896 26.6102 26.6431C26.9819 25.6762 27.8283 24.6752 29.2492 24.6752C31.1111 24.6752 31.8554 26.1601 31.8554 28.3361V36.9996H36.9985L36.9987 27.7148Z"
                        fill="#A6A6A6"
                      />
                    </svg>
                  </a>
                </ArticleBottomListItem>
              </ArticleBottomList>
            </ArticleBottom>
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
  sharedText: PropTypes.string.isRequired,
};

export default ArticlesItem;
