import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__main-title">Технологии</h2>
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="techs__tools">
        <div className="techs__tool">
          <p className="techs__tool-text">HTML</p>
        </div>
        <div className="techs__tool">
          <p className="techs__tool-text">CSS</p>
        </div>
        <div className="techs__tool">
          <p className="techs__tool-text">JS</p>
        </div>
        <div className="techs__tool">
          <p className="techs__tool-text">React</p>
        </div>
        <div className="techs__tool">
          <p className="techs__tool-text">Git</p>
        </div>
        <div className="techs__tool">
          <p className="techs__tool-text">Express.js</p>
        </div>
        <div className="techs__tool">
          <p className="techs__tool-text">mongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default Techs;
