import React from "react";
import webWorld from "../../images/web-world.svg";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <div className="promo__button">
          <a className="promo__link" href="#project">
            Узнать больше
          </a>
        </div>
      </div>
      <img src={webWorld} alt="Всемирная Паутина" className="promo__image" />
    </section>
  );
}

export default Promo;
