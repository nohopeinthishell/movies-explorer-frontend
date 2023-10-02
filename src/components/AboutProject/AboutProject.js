import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="project" id="project">
      <h2 className="project__title">О проекте</h2>
      <div className="project__section-container">
        <div className="project__section">
          <h3 className="project__section-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project__section-subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="project__section">
          <h3 className="project__section-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project__section-subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="project__time">
        <div className="project__time-back">
          <p className="project__time-text">1 неделя</p>
        </div>
        <div className="project__time-front">
          <p className="project__time-text">4 недели</p>
        </div>
      </div>
      <div className="project__names">
        <p className="project__back">Back-end</p>
        <p className="project__front">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
