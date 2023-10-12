import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import api from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


function Profile({ signOut, setCurrentUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [data, setData] = useState([]);
  const [nameValue, setNameValue] = useState();
  const [emailValue, setEmailValue] = useState();
  const [isChange, setIsChange] = useState(false);
  const [message, setMessage] = useState('')

  const editProfile = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    api
      .updateProfile({ name: nameValue, email: emailValue }, token)
      .then((res) => {
        setCurrentUser(res)
        setIsChange(false);
        setData(res);
        setMessage('Данные профиля изменены')
      })
      .catch((err) => {
        setMessage(err)
      });
  };

  useEffect(() => {
    setData(currentUser);
    setNameValue(currentUser.name);
    setEmailValue(currentUser.email);
  }, [currentUser]);

  const onNameChange = (e) => {
    nameChange(e);
    setNameValue(e.target.value);
  };

  const onEmailChange = (e) => {
    emailChange(e);
    setEmailValue(e.target.value);
  };

  const nameChange = (e) => {
    if (e.target.value === data.name) {
      setIsChange(false);
    } else {
      setIsChange(true);
    }
  };

  const emailChange = (e) => {
    if (e.target.value === data.email) {
      setIsChange(false);
    } else {
      setIsChange(true);
    }
  };

  return (
    <div className="profile">
      <form className="profile__container" onSubmit={editProfile}>
        <h1 className="profile__title">Привет, {data.name}</h1>
        <div className="profile__items">
          <p className="profile__item">Имя</p>
          <input
            value={nameValue || ""}
            placeholder="Введите имя"
            onChange={(e) => onNameChange(e)}
            className="profile__item profile__item_name"
            required
          ></input>
        </div>
        <div className="profile__items">
          <p className="profile__item">E-mail</p>
          <input
            value={emailValue || ""}
            onChange={(e) => onEmailChange(e)}
            className="profile__item profile__item_emai"
            required
          ></input>
        </div>
        <p>{message}</p>
        <button
          className={`profile__edit-btn ${
            isChange ? "" : "profile__edit-btn_off"
          }`}
          disabled={isChange ? false : true}
        >
          Редактировать
        </button>
        <button className="profile__signout" onClick={signOut}>
          Выйти из аккаунта
        </button>
      </form>
    </div>
  );
}

export default Profile;
