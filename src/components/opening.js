import React from "react";

const Opening = () => (
  <div className="container-fluid">
    <div className="row jumboRow">
      <div className="opening">
        <h1 className="h1A">Austin Holsinger</h1>
        <p className="p1A">> Full Stack Web Developer</p>
        <p className="p1C">> Graphic Designer</p>
        <p className="p1B">> Video Editor</p>
        <div className="row otherRow">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 click">
            <a href="portfolio">
              <div className="open-portfolio">Portfolio</div>
            </a>
            <a href="about">
              <div className="open-about">About</div>
            </a>
            <a href="blog">
              <div className="open-blog">Blog</div>
            </a>
            <a href="services">
              <div className="open-services">Services</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Opening;
