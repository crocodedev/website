import React from "react";
import useMedia from "@/hooks/use-media";
import Map, { Marker, Popup } from "react-map-gl";
import SectionWrapper from "@/components/SectionWrapper";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import MapStack from "@/components/Map/MapStack";
import MapStackInfo from "@/components/Map/MapStackInfo";
import MapStackInfoItem from "@/components/Map/MapStackInfoItem";
import ImageStatic from "@/components/Image";
import MapStackLink from "@/components/Map/MapStackLink";
import MapMarkerIcon from "@/components/Map/MapMarkerIcon";
import MapWrapper from "@/components/Map/MapWrapper";

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
  const mapCoordinates = useMedia(
    ["(max-width: 768px)", "(max-width: 991px)", "(min-width: 992px)"],

    [
      { mapCords: { longitude: 22.5, latitude: 50, zoom: 4 }, popupOffset: [0, -90] },
      { mapCords: { longitude: 21, latitude: 51, zoom: 6 }, popupOffset: [10, -90] },
      { mapCords: { longitude: 21, latitude: 51, zoom: 6 }, popupOffset: [120, -35] },
    ],

    { longitude: 21, latitude: 51, zoom: 6 },
  );

  const [viewState, setViewState] = React.useState(mapCoordinates);

  React.useEffect(() => {
    setViewState(mapCoordinates);
  }, [mapCoordinates]);

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
          <MapWrapper>
            <Map
              {...viewState.mapCords}
              mapStyle="mapbox://styles/mitsuruyano/cl4wd54w2003m16pr1sflxk9x"
              interactive={false}
              mapboxAccessToken="pk.eyJ1IjoibWl0c3VydXlhbm8iLCJhIjoiY2w0c2Y0NTAyMDJhaDNjbXplNXViMDhlYSJ9.tXv1LSmf3LOf25M4ohCx5A"
            >
              <Marker longitude={22} latitude={50.06} anchor="bottom">
                <MapMarkerIcon>
                  <ImageStatic src="/uploads/map-marker-icon.png" />
                </MapMarkerIcon>
              </Marker>
              <Popup
                longitude={22}
                latitude={50.06}
                anchor="center"
                offset={viewState.popupOffset}
                closeButton={false}
                closeOnClick={false}
              >
                Chkalova St, 56A-1B, 210041 Vitebsk, Belarus
              </Popup>
            </Map>
          </MapWrapper>
        </MapStack>
      </Container>
    </SectionWrapper>
  );
};

export default Contacts;
