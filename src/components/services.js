import React from "react";

const Services = () => (
  <div className="container-fluid">
    <div className="row jumboRow">
      <div className="opening">
        <div className="services-dev">
          <a href="services-fullstack">
            <div className="services-web">
              <h2 className="fullstack">Full Stack Web Development</h2>
            </div>
          </a>
          <a href="services-graphic">
            <div className="services-graphic">
              <h2 className="graphic">Graphic Design</h2>
            </div>
          </a>
          <a href="services-video">
            <div className="services-video">
              <h2 className="videoediting">Videography</h2>
            </div>
          </a>
          <p className="click-links">Touch one of the cards to learn more!</p>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
