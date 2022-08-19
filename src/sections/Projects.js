import PropTypes from "prop-types";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import ProjectsNavStack from "@/components/Projects/ProjectsNavStack";
import ProjectsNavRow from "@/components/Projects/ProjectsNavRow";
import ProjectsNavRowWrapper from "@/components/Projects/ProjectsNavRowWrapper";
import Text from "@/components/Text";
import ProjectsStack from "@/components/Projects/ProjectsStack";
import Button from "@/components/Button";
import Pagination from "@/components/Pagination";
import React from "react";
import Card from "@/components/Card";

const dataPage = {
  categories: [
    {
      title: "Tech stack:",
      items: [
        {
          title: "JavaScript",
          link: "/#",
        },
        {
          title: "Shopify",
          link: "/#",
        },
        {
          title: "HTML",
          link: "/#",
        },
        {
          title: "Gatsby",
          link: "/#",
        },
        {
          title: "Netlify",
          link: "/#",
        },
      ],
    },
    {
      title: "Country:",
      items: [
        {
          title: "Belarus",
          link: "/#",
        },
        {
          title: "USA",
          link: "/#",
        },
        {
          title: "Finland",
          link: "/#",
        },
        {
          title: "Switzerland",
          link: "/#",
        },
        {
          title: "Norway",
          link: "/#",
        },
      ],
    },
  ],
  articles: [
    {
      id: 1,
      image: "/uploads/projects-item-image.jpg",
      heading: "BRU.",
      label: "Food and Beverage Services",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 2,
      image: "/uploads/projects-item-image.jpg",
      heading: "BRU.",
      label: "Food and Beverage Services",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 3,
      image: "/uploads/projects-item-image.jpg",
      heading: "BRU.",
      label: "Food and Beverage Services",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 4,
      image: "/uploads/projects-item-image.jpg",
      heading: "BRU.",
      label: "Food and Beverage Services",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 5,
      image: "/uploads/projects-item-image.jpg",
      heading: "BRU.",
      label: "Food and Beverage Services",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 6,
      image: "/uploads/projects-item-image.jpg",
      heading: "BRU.",
      label: "Food and Beverage Services",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 7,
      image: "/uploads/projects-item-image.jpg",
      heading: "BRU.",
      label: "Food and Beverage Services",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 8,
      image: "/uploads/projects-item-image.jpg",
      heading: "BRU.",
      label: "Food and Beverage Services",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 9,
      image: "/uploads/projects-item-image.jpg",
      heading: "BRU.",
      label: "Food and Beverage Services",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 10,
      image: "/uploads/projects-item-image.jpg",
      heading: "BRU.",
      label: "Food and Beverage Services",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 11,
      image: "/uploads/projects-item-image.jpg",
      heading: "BRU.",
      label: "Food and Beverage Services",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: 12,
      image: "/uploads/projects-item-image.jpg",
      heading: "BRU.",
      label: "Food and Beverage Services",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
  ],
  pages: [
    {
      id: 1,
      title: "blog",
    },
    {
      id: 2,
      title: "contacts",
    },

    {
      id: 3,
      title: "blog",
    },
    {
      id: 4,
      title: "blog",
    },
    {
      id: 5,
      title: "blog",
    },
    {
      id: 6,
      title: "blog",
    },
    {
      id: 7,
      title: "blog",
    },
    {
      id: 8,
      title: "blog",
    },
    {
      id: 8,
      title: "blog",
    },
    {
      id: 8,
      title: "blog",
    },

    {
      id: 8,
      title: "blog",
    },
  ],
};

const Projects = ({ data = dataPage }) => {
  const [currPage, setCurrPage] = React.useState(1);
  const handlerSetCurrPage = (page) => setCurrPage(page);

  return (
    <SectionWrapper>
      <Container>
        <ProjectsNavStack>
          {data?.categories?.map(({ title, items }) => (
            <ProjectsNavRow key={title}>
              <Text fontSize="captionText">{title}</Text>
              <ProjectsNavRowWrapper>
                {items?.map(({ title: itemTitle, link }) => (
                  <Button
                    active={itemTitle === "Latest"}
                    variant="outlined"
                    to={link}
                    key={itemTitle}
                  >
                    {itemTitle}
                  </Button>
                ))}
              </ProjectsNavRowWrapper>
            </ProjectsNavRow>
          ))}
        </ProjectsNavStack>
        <ProjectsStack>
          {data?.articles?.map(({ id, ...props }) => (
            <Card key={id} {...props} />
          ))}
        </ProjectsStack>
        <Pagination
          pageCount={data.pages.length}
          currentPage={currPage}
          handler={handlerSetCurrPage}
        />
      </Container>
    </SectionWrapper>
  );
};

Projects.propTypes = {
  data: PropTypes.exact({
    categories: PropTypes.arrayOf(
      PropTypes.exact({
        title: PropTypes.string,
        items: PropTypes.arrayOf(
          PropTypes.exact({
            title: PropTypes.string,
            link: PropTypes.string,
          }),
        ),
      }),
    ),
    articles: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number,
        src: PropTypes.string,
        title: PropTypes.string,
        label: PropTypes.string,
        text: PropTypes.string,
      }),
    ),
    pages: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number,
        title: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default Projects;
