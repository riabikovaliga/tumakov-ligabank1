import React from "react";
import {Link} from "react-router-dom";
import "../service.scss";
import "./service-insurance.scss";

const ServiceInsurance = () => (
  <article className="service service--insurance">
    <div className="service__wrap">
      <h3>
        Лига Страхование — застрахуем
        <br /> все что захотите
      </h3>
      <ul>
        <li>Автомобильное страхование</li>
        <li>Страхование жизни и здоровья</li>
        <li>Страхование недвижимости</li>
      </ul>
      <Link className="service__link" to="">
        Узнать подробнее
      </Link>
    </div>
  </article>
);

export default ServiceInsurance;
