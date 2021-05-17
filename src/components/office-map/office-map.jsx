import React, {useState, useEffect} from "react";
import {
  YMaps,
  Map,
  Placemark,
  GeolocationControl,
  ZoomControl,
} from "react-yandex-maps";
import placemark from "../../assets/img/placemark.svg";
import {COORDINATES} from "../../mocks/coordinates";
import "./office-map.scss";

const TABLET_WIDTH = 768;

const MapSettings = {
  center: [58.560972, 78.566919],
  zoom: 5,
};

const PlacemarkSettings = {
  mobile: {
    size: [31, 35],
    offset: [-4, 4],
  },
  tablet: {
    seze: [35, 40],
    offset: [-6, -1],
  },
};

const OfficeMap = () => {
  const [placemarkSettings, setPlacemarkSettings] = useState(
    PlacemarkSettings.mobile
  );

  const resizeHandler = () => {
    window.innerWidth < TABLET_WIDTH
      ? setPlacemarkSettings(PlacemarkSettings.mobile)
      : setPlacemarkSettings(PlacemarkSettings.tablet);
  };

  useEffect(() => {
    window.innerWidth < TABLET_WIDTH
      ? setPlacemarkSettings(PlacemarkSettings.mobile)
      : setPlacemarkSettings(PlacemarkSettings.tablet);

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <section className="office-map credit-page__map">
      <h2 className="office-map__title">Отделения Лига Банка</h2>
      <YMaps>
        <Map
          className="office-map__map"
          defaultState={{center: MapSettings.center, zoom: MapSettings.zoom}}
        >
          {COORDINATES.map((item) => (
            <Placemark
              key={item}
              geometry={item}
              options={{
                iconLayout: "default#image",
                iconImageHref: placemark,
                iconImageSize: placemarkSettings.size,
                iconOffset: placemarkSettings.offset,
              }}
            />
          ))}
          <ZoomControl
            options={{size: "small", position: {right: 10, bottom: 165}}}
          />
          <GeolocationControl options={{position: {right: 10, bottom: 120}}} />
        </Map>
      </YMaps>
    </section>
  );
};

export default OfficeMap;
