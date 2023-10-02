import React, { useEffect, useState } from "react";
import logo from "../../images/logo.svg";
import iconProfile from "../../images/icon-profile.svg";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();
  const [isLog, setIsLog] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const locationConst =
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/" ||
    location.pathname === "/profile";
  const locationConstWhite =
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile";
  return (
    <header
      className={`header ${locationConst ? "" : "header_hidden"} ${
        locationConstWhite ? "header_white" : ""
      }`}
    >
      <Link className="header__logo" to="/" />
      {isLog ? (
        <div className="header__autorized">
          <div className="header__films">
            <Link
              className={`header__link header__link_all-films ${
                !locationConstWhite ? "header__link_white" : ""
              }`}
              to="/movies"
            >
              Фильмы
            </Link>
            <Link
              className={`header__link header__link_saved-films ${
                !locationConstWhite ? "header__link_white" : ""
              }`}
              to="/saved-movies"
            >
              Сохранённые фильмы
            </Link>
          </div>
          <div className="header__profile-container">
            <Link
              className={`header__link header__link_profile ${
                !locationConstWhite ? "header__link_white" : ""
              }`}
              to="/profile"
            >
              Аккаунт
            </Link>
            <div
              className={`header__icon-container ${
                !locationConstWhite ? "header__icon-container_green " : ""
              }`}
            >
              <img
                className="header__profile-icon"
                src={iconProfile}
                alt="иконка профиля"
              />
            </div>
          </div>
          <button className="header__burger-menu" onClick={openNav} />
          <div
            className={`header__cover ${
              isNavOpen ? "" : "header__cover_hidden"
            }`}
          >
            <div className="header__overlay">
              <div className="header__nav-links">
                <button className="header__cross-button" onClick={closeNav} />
                <Link
                  className={`header__nav-link ${
                    location.pathname === "/" ? "header__nav-link_checked" : ""
                  }`}
                  to="/"
                >
                  Главная
                </Link>
                <Link
                  className={`header__nav-link ${
                    location.pathname === "/movies"
                      ? "header__nav-link_checked"
                      : ""
                  }`}
                  to="/movies"
                >
                  Фильмы
                </Link>
                <Link
                  className={`header__nav-link ${
                    location.pathname === "/saved-movies"
                      ? "header__nav-link_checked"
                      : ""
                  }`}
                  to="/saved-movies"
                >
                  Сохранённые фильмы
                </Link>
              </div>
              <div className="header__nav-profile-container">
                <Link
                  className={`header__nav-profile ${
                    location.pathname === "/profile"
                      ? "header__nav-profile_checked"
                      : ""
                  }`}
                  to="/profile"
                >
                  Аккаунт
                </Link>
                <img
                  className="header__profile-icon"
                  src={iconProfile}
                  alt="иконка профиля"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="header__links">
          <Link className="header__link header__link_signup" to="/signup">
            Регистрация
          </Link>
          <div className="header__signin">
            <Link className="header__link header__link_signin" to="/signin">
              Войти
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
