import React, { useEffect, useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import example from "../../images/example.png";
import Preloader from "../Preloader/Preloader";
import * as movieApi from "../../utils/MovieApi";

function Movies() {
  const [inititalMovies, setInitialMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [moviesItems, setMoviesItems] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const [isFilmShort, setIsFilmShort] = useState(false);
  const [filmSlice, setFilmSlice] = useState(0);
  const [sliceStep, setSliceStep] = useState(0);
  const [message, setMessage] = useState("");

  function submitSerchForm(e) {
    e.preventDefault();
    setIsLoading(true);
    setMessage("Ничего не найдено");
    movieApi
      .getMovies()
      .then((movies) => {
        const findMovies = movies.filter((dataItem) => {
          const findMovie = dataItem.nameRU
            .toLowerCase()
            .includes(filterBy.toLowerCase());
          if (isFilmShort && findMovie) {
            return dataItem.duration < 40;
          }
          return findMovie;
        });
        setMoviesItems(findMovies);
        setIsButton(true);
        localStorage.setItem("movies", JSON.stringify(findMovies));
        localStorage.setItem("isFilmShort", JSON.stringify(isFilmShort));
        localStorage.setItem("filterBy", JSON.stringify(filterBy));
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setMessage(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
        console.log(err);
      });
  }

  const filterShortFilm = () => {
    localStorage.setItem("filterBy", JSON.stringify(filterBy));
    if (!isFilmShort) {
      setIsFilmShort(true);
      localStorage.setItem("isFilmShort", JSON.stringify(!isFilmShort));
      const initialFilterMovies = inititalMovies.filter((dataItem) => {
        const findMovie = dataItem.nameRU
          .toLowerCase()
          .includes(filterBy.toLowerCase()) && dataItem.duration < 40;
        return findMovie
      });
      localStorage.setItem("movies", JSON.stringify(initialFilterMovies));
      setMoviesItems(initialFilterMovies);
    } else {
      setIsFilmShort(false);
      const initialFilterMovies = inititalMovies.filter((dataItem) => {
        const findMovie = dataItem.nameRU
          .toLowerCase()
          .includes(filterBy.toLowerCase());
        return findMovie;
      });
      setMoviesItems(initialFilterMovies);
      localStorage.setItem("isFilmShort", JSON.stringify(!isFilmShort));
      localStorage.setItem("movies", JSON.stringify(initialFilterMovies));
    }
  };

  useEffect(() => {
    movieApi
      .getMovies()
      .then((movies) => {
        setInitialMovies(movies);
      })
      .catch((err) => console.log(err));
    if (
      localStorage.movies &&
      localStorage.isFilmShort &&
      localStorage.filterBy
    ) {
      setMoviesItems(JSON.parse(localStorage.movies));
      setIsFilmShort(JSON.parse(localStorage.isFilmShort));
      setFilterBy(JSON.parse(localStorage.filterBy));
      setIsButton(true);
      setMessage("Ничего не найдено");
    } else {
      setIsButton(true);
      setMoviesItems(inititalMovies);
    }
  }, []);

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
    handleResize(window);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [moviesItems]);

  return (
    <main className="main">
      <section className="movies">
        <SearchForm
          value={filterBy}
          onSubmit={submitSerchForm}
          onChange={(value) => setFilterBy(value)}
          onClick={filterShortFilm}
          isFilmShort={isFilmShort}
        />
        {isLoading ? (
          <Preloader />
        ) : moviesItems.length === 0 ? (
          <div className="movies__container">
            <span className="movies__not-found">{message}</span>
          </div>
        ) : (
          <div className="movies__container">
            <MoviesCardList movies={moviesItems.slice(0, filmSlice)} />
            <button
              onClick={() => setFilmSlice(filmSlice + sliceStep)}
              className={`movies__button ${
                !isButton || filmSlice >= moviesItems.length
                  ? "movies__button_hidden"
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

export default Movies;
