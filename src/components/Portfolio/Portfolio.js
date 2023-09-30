import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__links">
        <div className="portfolio__link-container">
          <a
            className="portfolio__link"
            href="https://nohopeinthishell.github.io/how-to-learn/"
            target="_blank"
          >
            Статичный сайт
          </a>
          <p className="portfolio__arrow">↗</p>
        </div>
        <div className="portfolio__link-container">
          <a
            className="portfolio__link"
            href="https://nohopeinthishell.github.io/russian-travel/"
            target="_blank"
          >
            Адаптивный сайт
          </a>
          <p className="portfolio__arrow">↗</p>
        </div>
        <div className="portfolio__link-container">
          <a
            className="portfolio__link"
            href="https://atlantizz.nomoredomainsicu.ru/"
            target="_blank"
          >
            Одностраничное приложение
          </a>
          <p className="portfolio__arrow">↗</p>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
