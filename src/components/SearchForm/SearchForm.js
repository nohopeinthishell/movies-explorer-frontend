import React, { useState } from "react";
import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";

function SearchForm() {
  const [thumbler, setThumbler] = useState(false);

  return (
    <div className="search-form">
      <div className="search-form__container">
        <img className="search-form__img" src={searchIcon} alt="search-icon" />
        <input className="search-form__input" type="text" placeholder="Фильм" />
        <button className="search-form__btn" />
      </div>
      <div className="search-form__thumbler-container">
        <button
          onClick={() => setThumbler(!thumbler)}
          className={`search-form__thumbler ${
            thumbler ? "search-form__thumbler_off" : ""
          }`}
        />
        <span className="search-form__thumbler-text">Короткометражки</span>
      </div>
    </div>
  );
}

export default SearchForm;
