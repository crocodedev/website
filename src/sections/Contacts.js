import { useTheme } from "@emotion/react";
import Map from "react-map-gl";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import MapStack from "@/components/Map/MapStack";
import MapStackInfo from "@/components/Map/MapStackInfo";
import MapStackInfoItem from "@/components/Map/MapStackInfoItem";
import ImageStatic from "@/components/Image";
import MapStackLink from "@/components/Map/MapStackLink";

import "mapbox-gl/dist/mapbox-gl.css";

const data = {
  title: "Connect with our Team",
  items: [
    {
      text: "welcome@crocode.io",
      src: "/uploads/Vector-1.svg",
    },
    {
      text: "+375 29 222 32 22",
      src: "/uploads/Vector.svg",
    },
  ],
};

const Contacts = () => {
  const theme = useTheme();
  return (
    <SectionWrapper>
      <Container>
        <SectionHeading title={data.title} />
        <MapStack>
          <MapStackInfo>
            {data.items.map(({ text, src }) => (
              <MapStackInfoItem key={text}>
                <ImageStatic src={src} />
                <MapStackLink href="/#">{text}</MapStackLink>
              </MapStackInfoItem>
            ))}
          </MapStackInfo>
          <Map
            initialViewState={{
              longitude: 21,
              latitude: 51,
              zoom: 6,
            }}
            style={{ width: 1088, height: 640 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken="pk.eyJ1IjoibWl0c3VydXlhbm8iLCJhIjoiY2w0c2Y0NTAyMDJhaDNjbXplNXViMDhlYSJ9.tXv1LSmf3LOf25M4ohCx5A"
          />
        </MapStack>
      </Container>
    </SectionWrapper>
  );
};

export default Contacts;
