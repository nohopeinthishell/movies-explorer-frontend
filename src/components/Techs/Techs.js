import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__main-title">Технологии</h2>
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__tools">
          <li className="techs__tool">
            <p className="techs__tool-text">HTML</p>
          </li>
          <li className="techs__tool">
            <p className="techs__tool-text">CSS</p>
          </li>
          <li className="techs__tool">
            <p className="techs__tool-text">JS</p>
          </li>
          <li className="techs__tool">
            <p className="techs__tool-text">React</p>
          </li>
          <li className="techs__tool">
            <p className="techs__tool-text">Git</p>
          </li>
          <li className="techs__tool">
            <p className="techs__tool-text">Express.js</p>
          </li>
          <li className="techs__tool">
            <p className="techs__tool-text">mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
