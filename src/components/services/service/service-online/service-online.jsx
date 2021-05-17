import React from "react";
import {Link} from "react-router-dom";
import "../service.scss";
import "./service-online.scss";

const ServiceOnline = () => (
  <article className="service service--online">
    <div className="service__wrap">
      <h3>
        Лига Банк — это огромное количество онлайн-сервисов для вашего удобства
      </h3>
      <ul>
        <li>
          Мобильный банк, <br />
          который всегда под рукой
        </li>
        <li>
          Приложение Лига-проездной позволит вам оплачивать билеты по всему миру
        </li>
      </ul>
      <Link className="service__link" to="#">
        Узнать подробнее
      </Link>
    </div>
  </article>
);

export default ServiceOnline;
