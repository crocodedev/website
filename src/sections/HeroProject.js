/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper";
import { useState } from "react";
import PropTypes from "prop-types";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import HeroProjectTitle from "@/components/HeroProject/HeroProjectTitle";
import HeroProjectContent from "@/components/HeroProject/HeroProjectContent";
import HeroProjectBottom from "@/components/HeroProject/HeroProjectBottom";
import HeroProjectBottomItem from "@/components/HeroProject/HeroProjectBottomItem";
import Text from "@/components/Text";
import ImageStatic from "@/components/Image";

import HeroProjectImage from "@/components/HeroProject/HeroProjectImage";

import "swiper/css";

const pageData = {
  title: "ATOMIC",
  items: [
    {
      id: 1,
      image: "/uploads/atomic-test-image.jpg",
      info: [
        {
          heading: "Country",
          desc: "test",
        },
        {
          heading: "Duration",
          desc: "test",
        },
        {
          heading: "Service",
          desc: "test",
        },
        {
          heading: "Industry",
          desc: "test",
        },
        {
          heading: "Team",
          desc: "test",
        },
      ],
    },
    {
      id: 2,
      image: "/uploads/atomic-test-image.jpg",
      info: [
        {
          heading: "Country",
          desc: "USA",
        },
        {
          heading: "Duration",
          desc: "December 2020",
        },
        {
          heading: "Service",
          desc: "Gatsby, Contentful CMS, Netlify",
        },
        {
          heading: "Industry",
          desc: "Transport & Logistic",
        },
        {
          heading: "Team",
          desc: "4 members",
        },
      ],
    },
    {
      id: 3,
      image: "/uploads/atomic-test-image.jpg",
      info: [
        {
          heading: "Country",
          desc: "test2",
        },
        {
          heading: "Duration",
          desc: "test2",
        },
        {
          heading: "Service",
          desc: "test2",
        },
        {
          heading: "Industry",
          desc: "test2",
        },
        {
          heading: "Team",
          desc: "test2",
        },
      ],
    },
  ],
};

const HeroProject = (props) => {
  console.log(props);
  const { title, items } = pageData;

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <SectionWrapper>
      <Container>
        <HeroProjectTitle>{title}</HeroProjectTitle>
        <HeroProjectContent>
          <Swiper
            modules={[Controller]}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
            centeredSlides={true}
            slidesPerView={3}
            slideToClickedSlide={true}
            speed={1500}
            initialSlide={1}
          >
            {items?.map(({ id, image }) => (
              <SwiperSlide key={id}>
                <HeroProjectImage>
                  <ImageStatic src={image} />
                </HeroProjectImage>
              </SwiperSlide>
            ))}
          </Swiper>
        </HeroProjectContent>
        <HeroProjectBottom>
          <Swiper
            modules={[Controller]}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
            centeredSlides={true}
            slidesPerView="auto"
            speed={1500}
            initialSlide={1}
          >
            {items?.map(({ id, info }) => (
              <SwiperSlide key={id}>
                {info?.map(({ heading, desc }) => (
                  <HeroProjectBottomItem key={heading}>
                    <Text mobileMultiplier={0.875} fontWeight="semiBold" lineHeight="sm">
                      {heading}
                    </Text>
                    <Text mobileMultiplier={0.875}>{desc}</Text>
                  </HeroProjectBottomItem>
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
        </HeroProjectBottom>
      </Container>
    </SectionWrapper>
  );
};

HeroProject.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        info: PropTypes.arrayOf(
          PropTypes.shape({
            heading: PropTypes.string,
            desc: PropTypes.string,
          }),
        ),
      }),
    ),
  }).isRequired,
};

export default HeroProject;
