import React from "react";
import {Link} from "react-router-dom";
import "../service.scss";
import "./service-deposit.scss";

const ServiceDeposit = () => (
  <article className="service service--deposit">
    <div className="service__wrap">
      <h3>Вклады Лига Банка – это выгодная инвестиция в свое будущее</h3>
      <ul>
        <li>Проценты по вкладам до 7%</li>
        <li>Разнообразные условия</li>
        <li>
          Возможность ежемесячной капитализации или вывод процентов на
          банковскую карту
        </li>
      </ul>
      <Link className="service__link" to="#">
        Узнать подробнее
      </Link>
    </div>
  </article>
);

export default ServiceDeposit;
