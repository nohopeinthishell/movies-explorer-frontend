import React, { useEffect, useState } from "react";
import logo from "../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import api from "../../utils/MainApi";
import { useFormWithValidation } from "../../hooks/useForm";

const REGEX = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~H?&/=]*)$/;

function Register({ setIsLog }) {
  const { values, handleChange, errors, resetForm } = useFormWithValidation();
  const navigate = useNavigate();
  const registerOnSubmit = (e) => {
    e.preventDefault();
    api
      .register(values)
      .then((res) => {
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
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="main">
      <section className="register">
        <form className="register__form" onSubmit={registerOnSubmit}>
          <Link to="/" className="register__logo" />
          <h1 className="register__title">Добро пожаловать!</h1>
          <div className="register__input-container">
            <p className="register__text">Имя</p>
            <input
              noValidate
              value={values.name || ""}
              type="text"
              name="name"
              required
              className={`register__input register__input_name ${
                errors.name === "" ? "" : "register__input_incorrect"
              }`}
              minLength={2}
              maxLength={30}
              placeholder="Имя"
              onChange={handleChange}
            ></input>
          </div>
          <p className="register__validation">{errors.name}</p>
          <div className="register__input-container">
            <p className="register__text">E-mail</p>
            <input
              noValidate
              value={values.email || ""}
              className={`register__input register__input_email ${
                errors.email === "" ? "" : "register__input_incorrect"
              }`}
              required
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              minLength={2}
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            ></input>
          </div>
          <p className="register__validation">{errors.email}</p>
          <div className="register__input-container">
            <p className="register__text">Пароль</p>
            <input
              noValidate
              value={values.password || ""}
              type="password"
              autoComplete="new-password"
              required
              name="password"
              className={`register__input register__input_password ${
                errors.password === "" ? "" : "register__input_incorrect"
              }`}
              placeholder="Пароль"
              onChange={handleChange}
              minLength={2}
              maxLength={30}
            ></input>
          </div>
          <p className="register__validation">{errors.password}</p>
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
