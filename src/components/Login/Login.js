import React from "react";
import logo from "../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useFormWithValidation } from "../../hooks/useForm";
import api from "../../utils/MainApi";

function Login({ setIsLog }) {
  const { values, handleChange, errors, resetForm } = useFormWithValidation();
  const navigate = useNavigate();

  const loginOnSubmit = (e) => {
    e.preventDefault();
    api
      .authorize(values)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setIsLog(true);
          resetForm();
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <section className="login">
        <form className="login__form" onSubmit={loginOnSubmit}>
          <Link to="/" className="login__logo" />
          <h1 className="login__title">Рады видеть!</h1>
          <div className="login__input-container">
            <p className="login__text">E-mail</p>
            <input
              noValidate
              value={values.email || ""}
              className="login__input login__input_email"
              required
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              minLength={2}
            ></input>
          </div>
          <p className="login__validation">{errors.email}</p>
          <div className="login__input-container">
            <p className="login__text">Пароль</p>
            <input
              value={values.password || ""}
              type="password"
              autoComplete="new-password"
              required
              name="password"
              className="login__input login__input_password"
              placeholder="Пароль"
              onChange={handleChange}
              minLength={2}
              maxLength={30}
            ></input>
          </div>
          <p className="login__validation">{errors.password}</p>
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
