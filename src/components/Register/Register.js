import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <main className="main">
      <section className="register">
        <form className="register__form">
          <Link to="/" className="register__logo" />
          <h1 className="register__title">Добро пожаловать!</h1>
          <div className="register__input-container">
            <p className="register__text">Имя</p>
            <input
              type="text"
              name="name"
              required
              className="register__input register__input_name"
              minLength={2}
              maxLength={30}
              placeholder="Имя"
            ></input>
          </div>
          <div className="register__input-container">
            <p className="register__text">E-mail</p>
            <input
              className="register__input register__input_email"
              required
              type="email"
              name="email"
              placeholder="E-mail"
            ></input>
          </div>
          <div className="register__input-container">
            <p className="register__text">Пароль</p>
            <input
              type="password"
              autoComplete="new-password"
              required
              name="password"
              className="register__input register__input_password"
              placeholder="Пароль"
            ></input>
          </div>
          <p className="register__validation">Что-то пошло не так...</p>
          <button className="register__button">Зарегистрироваться</button>
          <p className="register__registred">
            Уже зарегистрированы?
            <Link className="register__link" to="/signin">
              Войти
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}

export default Register;
