import React from "react";
import {Link} from "react-router-dom";
import "../service.scss";
import "./service-credit.scss";

const ServiceCredit = () => (
  <article className="service service--credit">
    <div className="service__wrap">
      <h3>
        Лига Банк выдает кредиты
        <br /> под любые цели
      </h3>
      <ul>
        <li>Ипотечный кредит</li>
        <li>Автокредит</li>
        <li>Потребительский кредит</li>
      </ul>
      <p>
        Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись
        нашим <Link to="#">кредитным калькулятором</Link>
      </p>
    </div>
  </article>
);

export default ServiceCredit;
