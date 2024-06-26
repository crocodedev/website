/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import SectionHeading from "@/components/SectionHeading";
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
    <SectionWrapper onlyBottomPadding>
      <Container>
        <Breadcrumb disablePaddingBottom baseUrl={baseUrl} color="gray" links={breadcrumbs} />
        <SectionHeading titleTag="h1" title={title} />
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
  breadcrumbs: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  baseUrl: PropTypes.string.isRequired,
  color: PropTypes.string,
  projectFeatures: PropTypes.array.isRequired,
  projectImage: PropTypes.array.isRequired,
};

HeroProject.defaultProps = {
  color: "",
};

export default HeroProject;
