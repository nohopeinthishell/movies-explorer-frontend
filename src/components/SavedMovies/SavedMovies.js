import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import example from "../../images/example.png";

function SavedMovies() {
  const cardExampleList = [
    { name: "33 слова о дизайне", duration: "1ч 47м", image: example },
    { name: "33 слова о дизайне", duration: "1ч 47м", image: example },
    { name: "33 слова о дизайне", duration: "1ч 47м", image: example },
  ];
  return (
    <div className="saved-movies">
      <SearchForm />
      <MoviesCardList cards={cardExampleList} />
    </div>
  );
}

export default SavedMovies;
