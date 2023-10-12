import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main className="main">
      <section className="notfound">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__subtitle">Страница не найдена</p>
        <button className="notfound__btn" onClick={() => navigate(-1)}>
          Назад
        </button>
      </section>
    </main>
  );
}

export default PageNotFound;
