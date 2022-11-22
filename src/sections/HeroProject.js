/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import Container from "@/components/Container";
import SectionWrapper from "@/components/SectionWrapper";
import HeroProjectTitle from "@/components/HeroProject/HeroProjectTitle";
import HeroProjectContent from "@/components/HeroProject/HeroProjectContent";
import HeroProjectBottom from "@/components/HeroProject/HeroProjectBottom";
import HeroProjectBottomItem from "@/components/HeroProject/HeroProjectBottomItem";
import Text from "@/components/Text";
import HeroProjectImage from "@/components/HeroProject/HeroProjectImage";
import Breadcrumb from "@/components/Breadcrumb";

const HeroProject = ({ breadcrumbs, projectFeatures, projectImage, title, baseUrl, color }) => {
  return (
    <SectionWrapper>
      <Container>
        <Breadcrumb baseUrl={baseUrl} color={color} links={breadcrumbs} />
        <HeroProjectTitle>{title}</HeroProjectTitle>
        <HeroProjectContent>
          <Swiper
            centeredSlides={true}
            slidesPerView={3}
            slideToClickedSlide={true}
            speed={800}
            loop={true}
            initialSlide={1}
          >
            {projectImage.map((img) => (
              <SwiperSlide key={img._key}>
                <HeroProjectImage altText={img.alt} image={img.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </HeroProjectContent>
        <HeroProjectBottom>
          {projectFeatures.map((el) => (
            <HeroProjectBottomItem key={el._key}>
              <Text mobileMultiplier={0.875} fontWeight="semiBold" lineHeight="sm">
                {el.title}
              </Text>
              <Text mobileMultiplier={0.875}>{el.text}</Text>
            </HeroProjectBottomItem>
          ))}
        </HeroProjectBottom>
      </Container>
    </SectionWrapper>
  );
};

HeroProject.propTypes = {
  breadcrumbs: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  baseUrl: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  projectFeatures: PropTypes.array.isRequired,
  projectImage: PropTypes.array.isRequired,
};

export default HeroProject;
