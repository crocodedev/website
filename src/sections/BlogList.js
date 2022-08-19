import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import BlogListItem from "@/components/BlogList/BlogListItem";
import BlogListItemContent from "@/components/BlogList/BlogListItemContent";
import BlogListItemContentTop from "@/components/BlogList/BlogListItemContentTop";
import BlogListItemImage from "@/components/BlogList/BlogListItemImage";
import BlogListItemDesc from "@/components/BlogList/BlogListItemDesc";
import BlogListNavigationStack from "@/components/BlogList/BlogListNavigationStack";
import BlogListStack from "@/components/BlogList/BlogListStack";
import Button from "@/components/Button";
import Container from "@/components/Container";
import ImageStatic from "@/components/Image";
import SectionWrapper from "@/components/SectionWrapper";
import Text from "@/components/Text";
import BlogListItemHeading from "@/components/BlogList/BlogListItemHeading";
import BlogListItemButton from "@/components/BlogList/BlogListItemButton";
import Pagination from "@/components/Pagination";

const dataPage = {
  categories: [
    {
      title: "Latest",
      link: "/#",
    },
    {
      title: "Client Guides",
      link: "/#",
    },
    {
      title: "Technologies",
      link: "/#",
    },
    {
      title: "UX/UI Design",
      link: "/#",
    },
    {
      title: "Case Studies",
      link: "/#",
    },
  ],
  articles: [
    {
      id: 1,
      image: "/uploads/blog-list-item.jpg",
      date: "12 Apr. 2022",
      heading: "Break is an important part of work",
      desc: "How much tired eyes sometimes you notice, only after finishing hard work. Business is business, but even a ten-minute break will help both the eyes and even the memory. Rest with closed eyes has been the most obvious and accessible type of relaxation after sleep since ancient times.",
      linkText: "Learn more",
    },
    {
      id: 2,
      image: "/uploads/blog-list-item.jpg",
      date: "12 Apr. 2022",
      heading: "Break is an important part of work",
      desc: "How much tired eyes sometimes you notice, only after finishing hard work. Business is business, but even a ten-minute break will help both the eyes and even the memory. Rest with closed eyes has been the most obvious and accessible type of relaxation after sleep since ancient times.",
      linkText: "Learn more",
    },
    {
      id: 3,
      image: "/uploads/blog-list-item.jpg",
      date: "12 Apr. 2022",
      heading: "Break is an important part of work",
      desc: "How much tired eyes sometimes you notice, only after finishing hard work. Business is business, but even a ten-minute break will help both the eyes and even the memory. Rest with closed eyes has been the most obvious and accessible type of relaxation after sleep since ancient times.",
      linkText: "Learn more",
    },
    {
      id: 4,
      image: "/uploads/blog-list-item.jpg",
      date: "12 Apr. 2022",
      heading: "Break is an important part of work",
      desc: "How much tired eyes sometimes you notice, only after finishing hard work. Business is business, but even a ten-minute break will help both the eyes and even the memory. Rest with closed eyes has been the most obvious and accessible type of relaxation after sleep since ancient times.",
      linkText: "Learn more",
    },
  ],
};

const BlogList = ({ data = dataPage }) => {
  const theme = useTheme();
  return (
    <SectionWrapper>
      <Container>
        <BlogListNavigationStack>
          {data?.categories?.map(({ title, link }) => (
            <Button active={title === "Latest"} variant="outlined" to={link} key={title}>
              {title}
            </Button>
          ))}
        </BlogListNavigationStack>
        <BlogListStack>
          {data?.articles?.map(({ id, image, heading, date, desc, linkText }) => (
            <BlogListItem key={id}>
              <BlogListItemImage>
                <ImageStatic src={image} />
              </BlogListItemImage>
              <BlogListItemContent>
                <BlogListItemContentTop>
                  <Text
                    mobileMultiplier={0.6}
                    color={theme.palette.text.disabled}
                    fontSize="subtitle"
                  >
                    {date}
                  </Text>
                  <BlogListItemHeading
                    color={theme.palette.text.primary}
                    fontSize="title2"
                    mobileMultiplier={0.48}
                    lineHeight="xsm"
                    fontWeight="bold"
                  >
                    {heading}
                  </BlogListItemHeading>
                </BlogListItemContentTop>
                <BlogListItemDesc
                  mobileMultiplier={0.7}
                  fontSize="subtitle"
                  color={theme.palette.text.primary}
                >
                  {desc}
                </BlogListItemDesc>
                <BlogListItemButton>
                  <Button variant="text">{linkText}</Button>
                </BlogListItemButton>
              </BlogListItemContent>
            </BlogListItem>
          ))}
        </BlogListStack>
        <Pagination />
      </Container>
    </SectionWrapper>
  );
};

BlogList.propTypes = {
  data: PropTypes.exact({
    categories: PropTypes.arrayOf(
      PropTypes.exact({
        title: PropTypes.string,
        link: PropTypes.string,
      }),
    ),
    articles: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string,
        image: PropTypes.string,
        date: PropTypes.string,
        heading: PropTypes.string,
        desc: PropTypes.string,
        linkText: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default BlogList;
