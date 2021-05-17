import React from "react";
import {Link} from "react-router-dom";
import Logo from "../logo/logo";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="footer__left-side">
          <Logo />
          <p className="footer__copyright">
            150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка
            России №1050 Ⓒ Лига Банк, 2019
          </p>
          <ul className="footer__navigation">
            <li className="footer__navigation-item">
              <Link className="footer__navigation-link" to="#">
                Услуги
              </Link>
            </li>
            <li className="footer__navigation-item">
              <Link className="footer__navigation-link" to="#">
                Рассчитать кредит
              </Link>
            </li>
            <li className="footer__navigation-item">
              <Link className="footer__navigation-link" to="#">
                Контакты
              </Link>
            </li>
            <li className="footer__navigation-item">
              <Link className="footer__navigation-link" to="#">
                Задать вопрос
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__right-side">
          <ul className="footer__contacts">
            <li className="footer__contacts-item footer__contacts-item--mobile">
              <a
                className="footer__contacts-link footer__contacts-link--mobile"
                href="tel:*0904"
              >
                *0904
              </a>
              <p className="footer__contacts-description">
                Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
              </p>
            </li>
            <li className="footer__contacts-item">
              <a
                className="footer__contacts-link footer__contacts-link--free"
                href="tel:88001112233"
              >
                8 800 111 22 33
              </a>
              <p className="footer__contacts-description">
                Бесплатный для всех городов России
              </p>
            </li>
          </ul>
          <ul className="footer__social">
            <li className="footer__social-item">
              <Link
                className="footer__social-link footer__social-link--facebook"
                to="#"
                aria-label="Фейсбук"
              ></Link>
            </li>
            <li className="footer__social-item">
              <Link
                className="footer__social-link footer__social-link--instagram"
                to="#"
                aria-label="Инстаграм"
              ></Link>
            </li>
            <li className="footer__social-item">
              <Link
                className="footer__social-link footer__social-link--twitter"
                to="#"
                aria-label="Твиттер"
              ></Link>
            </li>
            <li className="footer__social-item">
              <Link
                className="footer__social-link footer__social-link--youtube"
                to="#"
                aria-label="Ютуб"
              ></Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
