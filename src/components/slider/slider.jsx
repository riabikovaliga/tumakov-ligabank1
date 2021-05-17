import React from "react";
import SwiperCore, {Pagination, Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import SlideCredit from "./slides/slide-credit/slide-credit";
import SlideSlogan from "./slides/slide-slogan/slide-slogan";
import SlideContacts from "./slides/slide-contacts/slide-contacts";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "./slider.scss";

SwiperCore.use([Pagination, Autoplay]);

const Slider = () => (
  <section className="slider">
    <h2 className="visually-hidden">Информация о лига-банке</h2>
    <Swiper
      pagination={{
        bulletClass: "slider__bullet",
        bulletActiveClass: "slider__bullet--active",
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      simulateTouch={false}
    >
      <SwiperSlide>
        <SlideCredit />
      </SwiperSlide>
      <SwiperSlide>
        <SlideSlogan />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContacts />
      </SwiperSlide>
    </Swiper>
  </section>
);

export default Slider;
