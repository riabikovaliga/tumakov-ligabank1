import React, {useState} from "react";
import SwiperCore, {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import ServiceDeposit from "./service/service-deposit/service-deposit";
import ServiceCredit from "./service/service-credit/service-credit";
import ServiceInsurance from "./service/service-insurance/service-insurance";
import ServiceOnline from "./service/service-online/service-online";
import {Keys} from "../../const";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "./services.scss";

const BULLET_TYPES = ["Вклады", "Кредиты", "Страхование", "Онлайн-сервисы"];
const BULLET_CLASSES = ["--deposit", "--credit", "--insurance", "--online"];

SwiperCore.use([Pagination]);

const Services = () => {
  const [swiper, setSwiper] = useState(null);

  const handleKeydown = (evt) => {
    if (evt.shiftKey && evt.key === Keys.TAB) {
      swiper.slidePrev();

      return;
    }

    evt.key === Keys.TAB && swiper.slideNext();
  };

  return (
    <section className="services credit-page__services">
      <h2 className="visually-hidden">Услуги лига-банка</h2>
      <div className="services__pagination" onKeyDown={handleKeydown}></div>
      <Swiper
        pagination={{
          bulletClass: "services__bullet",
          bulletActiveClass: "services__bullet--active",
        }}
        simulateTouch={false}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        onResize={(swiper) => {
          swiper.pagination.init();
          swiper.pagination.render();
          swiper.pagination.update();
        }}
        breakpoints={{
          1024: {
            pagination: {
              clickable: true,
              el: ".services__pagination",
              renderBullet: (index, className) =>
                `<button class="${className}" type="button">
                <span class="services__label services__label${BULLET_CLASSES[index]}">
                  ${BULLET_TYPES[index]}
                </span>
              </button>`,
            },
          },
        }}
      >
        <SwiperSlide>
          <ServiceDeposit />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceCredit />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceInsurance />
        </SwiperSlide>
        <SwiperSlide>
          <ServiceOnline />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Services;
