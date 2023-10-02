import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <main>
      <section className="login">
        <form className="login__form">
          <Link to="/" className="login__logo" />
          <h1 className="login__title">Рады видеть!</h1>
          <div className="login__input-container">
            <p className="login__text">E-mail</p>
            <input
              className="login__input login__input_email"
              required
              type="email"
              name="email"
              placeholder="E-mail"
            ></input>
          </div>
          <div className="login__input-container">
            <p className="login__text">Пароль</p>
            <input
              type="password"
              autoComplete="new-password"
              required
              name="password"
              className="login__input login__input_password"
              placeholder="Пароль"
            ></input>
          </div>
          <p className="login__validation">Что-то пошло не так...</p>
          <button className="login__button">Войти</button>
          <p className="login__registred">
            Ещё не зарегистрированы?
            <Link className="login__link" to="/signup">
              Регистрация
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}

export default Login;
