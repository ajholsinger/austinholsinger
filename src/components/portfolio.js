import React from "react";
import project3 from "../images/finalproject.png";
import project2 from "../images/project2.png";
import project1 from "../images/project1.png";
import bootstrap from "../images/bootstrap-round.png";
import JS from "../images/javascriptround.png";
import mysql from "../images/mysqlround.png";
import node from "../images/noderound.png";
import firebase from "../images/firebaseround.png";
import reactround from "../images/reactround.png";
import jquery from "../images/jqueryround.png";
import mongo from "../images/mongodbround.png";
import python from "../images/pythonround.png";
import csharp from "../images/csharpround.png";

const Portfolio = () => (
  <div className="container-fluid">
    <div className="row jumboRow">
      <div className="opening">
        <div className="projects">
          <a
            href="https://maidiep.github.io/TeamGilbert/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={project1} alt="project2" className="project-img" />
          </a>
          <a
            href="https://arcane-basin-79264.herokuapp.com/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={project2} alt="project2" className="project-img" />
          </a>
          <a
            href="https://ancient-inlet-44561.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={project3} alt="project3" className="project-img" />
          </a>
        </div>
        <div className="row lang-row">
          <div className="lang-logos">
            <img src={python} alt="yeah" className="lang-logo-img" />
            <img src={csharp} alt="yeah" className="lang-logo-img" />
            <img src={JS} alt="yeah" className="lang-logo-img" />
            <img src={reactround} alt="yeah" className="lang-logo-img" />
            <img src={bootstrap} alt="yeah" className="lang-logo-img" />
          </div>
        </div>
        <div className="row lang-row">
          <div className="lang-logos">
            <img src={mysql} alt="yeah" className="lang-logo-img" />
            <img src={jquery} alt="yeah" className="lang-logo-img" />
            <img src={node} alt="yeah" className="lang-logo-img" />
            <img src={firebase} alt="yeah" className="lang-logo-img" />
            <img src={mongo} alt="yeah" className="lang-logo-img" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;
