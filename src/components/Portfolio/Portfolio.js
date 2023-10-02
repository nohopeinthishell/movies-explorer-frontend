import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link-container">
          <a
            className="portfolio__link"
            href="https://nohopeinthishell.github.io/how-to-learn/"
            target="_blank"
          >
            Статичный сайт
          </a>
          <a
            className="portfolio__arrow"
            href="https://nohopeinthishell.github.io/how-to-learn/"
            target="_blank"
          >
            ↗
          </a>
        </li>
        <li className="portfolio__link-container">
          <a
            className="portfolio__link"
            href="https://nohopeinthishell.github.io/russian-travel/"
            target="_blank"
          >
            Адаптивный сайт
          </a>
          <a
            className="portfolio__arrow"
            href="https://nohopeinthishell.github.io/russian-travel/"
            target="_blank"
          >
            ↗
          </a>
        </li>
        <li className="portfolio__link-container">
          <a
            className="portfolio__link"
            href="https://atlantizz.nomoredomainsicu.ru/"
            target="_blank"
          >
            Одностраничное приложение
          </a>
          <a
            className="portfolio__arrow"
            href="https://atlantizz.nomoredomainsicu.ru/"
            target="_blank"
          >
            ↗
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
