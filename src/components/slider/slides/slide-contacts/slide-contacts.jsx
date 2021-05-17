import React from "react";
import {Link} from "react-router-dom";
import "../slide.scss";
import "./slide-contacts.scss";

const SlideContacts = () => (
  <article className="slide slide--contacts">
    <div className="slide__wrap slide__wrap--contacts">
      <h3 className="slide__title slide__title--contacts">
        Лига Банк
        <span className="slide__sub-title slide__sub-title--contacts">
          Всегда рядом
        </span>
      </h3>
      <Link className="slide__link slide__link--contacts" to="#">
        Найти отделение
      </Link>
    </div>
  </article>
);

export default SlideContacts;
