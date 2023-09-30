import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ cards }) {
  return (
    <section className="card-list">
      <ul className="card-list__container">
        {cards.map((card) => {
          return (
            <MoviesCard
              name={card.name}
              duration={card.duration}
              image={card.image}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
