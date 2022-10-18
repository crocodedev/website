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
import HeroProjectImage from "@/components/HeroProject/HeroProjectImage";
import Image from "@/components/Image";

const HeroProject = ({
                       breadcrumbs,
                       projectFeatures,
                       projectImage,
                       title,
                     }) => {

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
            {projectFeatures?.map(({ projectFeatureInner: { featureImage } }) => (
              <SwiperSlide key={featureImage.alt}>
                <HeroProjectImage>
                  <Image altText={featureImage.alt} image={featureImage.image} />
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
            {projectFeatures?.map(({ projectFeatureInner: { projectFeature } }) => (
              <SwiperSlide key="test">
                {projectFeature?.map(el => (
                  <HeroProjectBottomItem key={el.title}>
                    <Text mobileMultiplier={0.875} fontWeight="semiBold" lineHeight="sm">
                      {el.title}
                    </Text>
                    <Text mobileMultiplier={0.875}>{el.subtitle}</Text>
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
  breadcrumbs: PropTypes.object.isRequired,
  projectFeatures: PropTypes.array.isRequired,
  projectImage: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default HeroProject;
