import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__container">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <div className="profile__items">
          <p className="profile__item">Имя</p>
          <p className="profile__item profile__item_name">Виталий</p>
        </div>
        <div className="profile__items">
          <p className="profile__item">E-mail</p>
          <p className="profile__item profile__item_emai">pochta@yandex.ru</p>
        </div>
        <button className="profile__edit-btn">Редактировать</button>
        <Link to="/" className="profile__signout">
          Выйти из аккаунта
        </Link>
      </div>
    </div>
  );
}

export default Profile;
