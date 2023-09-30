import React, { useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import example from "../../images/example.png";
import Preloader from "../Preloader/Preloader";

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const cardExampleList = [
    { name: "33 слова о дизайне", duration: "1ч 47м", image: example },
    { name: "33 слова о дизайне", duration: "1ч 47м", image: example },
    { name: "33 слова о дизайне", duration: "1ч 47м", image: example },
    { name: "33 слова о дизайне", duration: "1ч 47м", image: example },
    { name: "33 слова о дизайне", duration: "1ч 47м", image: example },
    { name: "33 слова о дизайне", duration: "1ч 47м", image: example },
    { name: "33 слова о дизайне", duration: "1ч 47м", image: example },
    { name: "33 слова о дизайне", duration: "1ч 47м", image: example },
    { name: "33 слова о дизайне", duration: "1ч 47м", image: example },
    { name: "33 слова о дизайне", duration: "1ч 47м", image: example },
    { name: "33 слова о дизайне", duration: "1ч 47м", image: example },
    { name: "33 слова о дизайне", duration: "1ч 47м", image: example },
  ];
  return (
    <div className="movies">
      <SearchForm />
      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          <MoviesCardList cards={cardExampleList} />
          <button className="movies__button">Ещё</button>
        </div>
      )}
    </div>
  );
}

export default Movies;
