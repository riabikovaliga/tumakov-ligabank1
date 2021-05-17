import React from "react";
import {Link} from "react-router-dom";
import "../slide.scss";
import "./slide-credit.scss";

const SlideCredit = () => (
  <article className="slide slide--credit">
    <div className="slide__wrap">
      <h3 className="slide__title slide__title--credit">
        Лига Банк
        <span className="slide__sub-title slide__sub-title--credit">
          Кредиты на любой случай
        </span>
      </h3>
      <Link className="slide__link slide__link--credit" to="#">
        Рассчитать кредит
      </Link>
    </div>
  </article>
);

export default SlideCredit;
