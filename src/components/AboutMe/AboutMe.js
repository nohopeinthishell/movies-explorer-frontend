import React from "react";
import "./AboutMe.css";
import picture from "../../images/picture.png";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name">Сергей</h3>
          <p className="about-me__job">Фронтенд-разработчик, 20 лет</p>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            href="https://github.com/nohopeinthishell"
            target="_blank"
            className="about-me__github"
          >
            Github
          </a>
        </div>
        <img src={picture} className="about-me__picture" alt="моя фотография" />
      </div>
    </section>
  );
}

export default AboutMe;
