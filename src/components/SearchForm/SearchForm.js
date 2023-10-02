import React, { useState } from "react";
import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";

function SearchForm() {
  const [thumbler, setThumbler] = useState(false);

  return (
    <form className="search-form">
      <div className="search-form__container">
        <img
          className="search-form__img"
          src={searchIcon}
          alt="иконка поиска"
        />
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
          required
        />
        <button className="search-form__btn" />
      </div>
      <div className="search-form__thumbler-container">
        <button
          onClick={(e) => {
            e.preventDefault();
            setThumbler(!thumbler);
          }}
          className={`search-form__thumbler ${
            thumbler ? "search-form__thumbler_off" : ""
          }`}
        />
        <span className="search-form__thumbler-text">Короткометражки</span>
      </div>
    </form>
  );
}

export default SearchForm;
