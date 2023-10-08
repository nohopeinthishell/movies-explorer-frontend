import React, { useState } from "react";
import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";

function SearchForm({ onSubmit, onChange, onClick, isFilmShort, value }) {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <div className="search-form__container">
        <img
          className="search-form__img"
          src={searchIcon}
          alt="иконка поиска"
        />
        <input
          value={value}
          onChange={(evt) => {
            onChange && onChange(evt.target.value);
          }}
          className="search-form__input"
          type="text"
          placeholder="Фильм"
          required
        />
        <button className="search-form__btn" />
      </div>
      <div className="search-form__thumbler-container">
        <div
          onClick={onClick}
          className={`search-form__thumbler ${
            isFilmShort ? "" : "search-form__thumbler_off"
          }`}
        />
        <span className="search-form__thumbler-text">Короткометражки</span>
      </div>
    </form>
  );
}

export default SearchForm;
