import React, { useEffect, useState } from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import example from "../../images/example.png";
import api from "../../utils/MainApi";

function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [moviesItems, setMoviesItems] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const [isFilmShort, setIsFilmShort] = useState(false);
  const [filmSlice, setFilmSlice] = useState(0);
  const [sliceStep, setSliceStep] = useState(0);
  const [isButton, setIsButton] = useState(true);
  const [message, setMessage] = useState("");

  function loadSavedMovies() {
    const token = localStorage.getItem("token");
    api
      .getMovies(token)
      .then((movies) => {
        setMoviesItems(movies);
        setSavedMovies(movies);
      })
      .catch((err) => console.log(err));
  }

  const filterShortFilm = () => {
    if (!isFilmShort) {
      setIsFilmShort(true);
      const findMovies = moviesItems.filter((dataItem) => {
        return dataItem.duration < 40;
      });
      setMoviesItems(findMovies);
    } else {
      setIsFilmShort(false);
      const initialFilterMovies = savedMovies.filter((dataItem) => {
        const findMovie = dataItem.nameRU
          .toLowerCase()
          .includes(filterBy.toLowerCase());
        return findMovie;
      });
      setMoviesItems(initialFilterMovies);
    }
  };

  function submitSerchForm(e) {
    e.preventDefault();
    const findMovies = savedMovies.filter((dataItem) => {
      const findMovie = dataItem.nameRU
        .toLowerCase()
        .includes(filterBy.toLowerCase());
      if (isFilmShort && findMovie) {
        return dataItem.duration < 40;
      }
      return findMovie;
    });
    if (findMovies.length === 0) {
      setMessage("Ничего не найдено");
    }
    setIsButton(true);
    setMoviesItems(findMovies);
  }

  const handleResize = (e) => {
    let width = e.target ? e.target.innerWidth : e.innerWidth;
    if (width >= 1280) {
      setFilmSlice(9);
      setSliceStep(3);
    } else if (width < 1280 && width > 480) {
      setFilmSlice(6);
      setSliceStep(2);
    } else if (width <= 480) {
      setFilmSlice(5);
      setSliceStep(1);
    }
  };

  useEffect(() => {
    loadSavedMovies();

    handleResize(window);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="main">
      <section className="saved-movies">
        <SearchForm
          value={filterBy}
          onSubmit={submitSerchForm}
          onChange={(value) => setFilterBy(value)}
          onClick={filterShortFilm}
          isFilmShort={isFilmShort}
        />
        {moviesItems.length === 0 ? (
          <div className="saved-movies__container">
            <span className="saved-movies__not-found">{message}</span>
          </div>
        ) : (
          <div className="saved-movies__container">
            <MoviesCardList
              movies={moviesItems.slice(0, filmSlice)}
              setSavedMovies={setMoviesItems}
            />
            <button
              onClick={() => setFilmSlice(filmSlice + sliceStep)}
              className={`saved-movies__button ${
                !isButton || filmSlice >= moviesItems.length
                  ? "saved-movies__button_hidden"
                  : ""
              }`}
            >
              Ещё
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default SavedMovies;
