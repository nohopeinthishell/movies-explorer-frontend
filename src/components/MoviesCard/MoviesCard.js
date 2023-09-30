import React, { useState } from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ name, duration, image }) {
  const location = useLocation();
  const [thumbler, setThumbler] = useState(false);

  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text-container">
          <h3 className="movies-card__title">{name}</h3>
          <p className="movies-card__duration">{duration}</p>
        </div>
        <button
          onClick={() => setThumbler(!thumbler)}
          className={` movies-card__btn ${
            location.pathname === "/saved-movies" ? "movies-card__btn_del" : ""
          } ${thumbler ? "movies-card__btn_off" : "movies-card__btn_on"}`}
        />
      </div>
      <img src={image} alt="preview of film" className="movies-card__img" />
    </li>
  );
}

export default MoviesCard;
