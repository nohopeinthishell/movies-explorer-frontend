import React, { useEffect, useState } from "react";
import "./MoviesCard.css";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../utils/MainApi";
import * as movieApi from "../../utils/MovieApi";

function MoviesCard({ movie, setSavedMovies }) {
  const [savedFilms, setSavedFilms] = useState([]);
  const location = useLocation();
  const filmDuration = Math.floor(movie.duration / 60);
  const [isSaved, setIsSaved] = useState(false);
  const [savedFilm, setSavedFilm] = useState({});

  const navigate = useNavigate();

  const saveFilmCard = () => {
    const token = localStorage.getItem("token");
    if (isSaved) {
      setIsSaved(false);
      api.deleteMovie(savedFilm._id, token);
    } else {
      api.postMovie(movie, token).then((res) => {
        setSavedFilm(res);
        setIsSaved(true);
      });
    }
  };

  const deleteMovie = () => {
    const token = localStorage.getItem("token");
    api.deleteMovie(movie._id, token).then(() => {
      setSavedMovies((state) => state.filter((item) => item._id !== movie._id));
    });
  };

  useEffect(() => {
    savedFilms.forEach((item) => {
      if (item.nameRU === movie.nameRU) {
        setSavedFilm(item);
        setIsSaved(true);
      }
    });
  }, [movie, savedFilms]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    api.getMovies(token).then((items) => setSavedFilms(items));
  }, []);

  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text-container">
          <h3 className="movies-card__title">{movie.nameRU}</h3>
          <p className="movies-card__duration">{`${
            filmDuration === 0 ? "" : `${filmDuration} ч. `
          } ${movie.duration % 60} м.`}</p>
        </div>
        {location.pathname === "/saved-movies" ? (
          <button
            className="movies-card__btn movies-card__btn_del"
            onClick={deleteMovie}
          />
        ) : (
          <button
            onClick={saveFilmCard}
            className={` movies-card__btn ${
              isSaved ? "movies-card__btn_on" : "movies-card__btn_off"
            }`}
          />
        )}
      </div>
      {location.pathname === "/saved-movies" ? (
        <a
          href={movie.trailerLink}
          target="_blank"
          className="movies-card__link"
          rel="noreferrer"
        >
          <img
            src={movie.image}
            className="movies-card__img"
            alt="превью фильма"
          />
        </a>
      ) : (
        <a
          href={movie.trailerLink}
          target="_blank"
          className="movies-card__link"
          rel="noreferrer"
        >
          <img
            src={`https://api.nomoreparties.co${movie.image.url}`}
            alt="превью фильма"
            className="movies-card__img"
          />
        </a>
      )}
    </li>
  );
}

export default MoviesCard;
