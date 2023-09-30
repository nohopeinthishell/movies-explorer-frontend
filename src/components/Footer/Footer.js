import React from "react";
import "./Footer.css";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  const locationConst =
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/" ||
    location.pathname === "/profile";
  return (
    <footer className={`footer ${locationConst ? "" : "footer_hidden"}`}>
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <nav className="footer__info">
        <p className="footer__copyright">© 2023</p>
        <div className="footer__links">
          <a
            className="footer__link"
            href="https://practicum.yandex.ru/"
            target="_blank"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            href="https://github.com/nohopeinthishell"
            target="_blank"
          >
            Github
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
