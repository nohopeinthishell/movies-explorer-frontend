import React, { useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, setSavedMovies }) {
  return (
    <section className="card-list">
      <ul className="card-list__container">
        {movies.map((movie, index) => {
          return (
            <MoviesCard
              setSavedMovies={setSavedMovies}
              movie={movie}
              key={index}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
