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
import React from "react";
import TechnologyCard from "@/components/TechnologyCard";

const pageData = {
  title: "Software Development Technologies",
  categories: [
    {
      id: 1,
      name: "LBS",
    },
    {
      id: 2,
      name: "Front-end",
    },
    {
      id: 3,
      name: "Back-end",
    },
    {
      id: 4,
      name: "Mobile",
    },
    {
      id: 5,
      name: "Cloud",
    },
  ],
  items: [
    {
      category: "LBS",
      cards: [
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/technologies.png",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/technologies.png",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/technologies.png",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/technologies.png",
          title: "Google Maps",
        },
      ],
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      category: "Front-end",
      cards: [
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/technologies.png",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/technologies.png",
          title: "Google Maps",
        },
      ],
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      category: "Back-end",
      cards: [
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/technologies.png",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/technologies.png",
          title: "Google Maps",
        },
      ],
      text: "Amet  amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      category: "Mobile",
      cards: [
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/technologies.png",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/technologies.png",
          title: "Google Maps",
        },
      ],
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      category: "Cloud",
      cards: [
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/our-team-person-1.jpg",
          title: "Google Maps",
        },
        {
          src: "/uploads/technologies.png",
          title: "Google Maps",
        },
      ],
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ],
};

const Technologies = ({ data = pageData }) => {
  const { title, categories, items } = data;
  const [currSlide, setCurrSlide] = React.useState("LBS");
  const handlerSetCurrSlide = (slide) => setCurrSlide(slide);
  return (
    <SectionWrapper>
      <Container>
        <SectionHeading title={title} />
        <TechnologiesWrapper>
          <TechnologiesStack>
            {categories.map(({ id, name }) => (
              <TechnologiesStackItem
                active={name === currSlide}
                key={id}
                text={name}
                handler={() => handlerSetCurrSlide(name)}
              />
            ))}
          </TechnologiesStack>
          {items.map(({ cards, text, category }) => (
            <TechnologiesSlide key={cards} active={category === currSlide}>
              <TechnologiesSlideStack>
                {cards.map(({ id, ...props }) => (
                  <TechnologyCard key={id} {...props} />
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
  data: PropTypes.exact({
    categories: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ),
    items: PropTypes.arrayOf(
      PropTypes.exact({
        cards: PropTypes.arrayOf(
          PropTypes.exact({
            src: PropTypes.string,
            title: PropTypes.string,
          }),
        ),
        text: PropTypes.string,
      }),
    ),
    title: PropTypes.string,
  }).isRequired,
};

export default Technologies;
