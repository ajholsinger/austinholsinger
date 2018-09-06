import React from "react";
import blogImg from "../images/blog-image.png";

const Blog = () => (
  <div className="container-fluid">
    <div className="row jumboRow">
      <div className="opening">
        <div className="blog-area">
          <div className="blog-entry">
            <img className="entry-img" src={blogImg} alt="img" />
            <div className="name-date">
              <div className="entry-name">ajholsinger</div>
              <div className="entry-date">September 5, 2018</div>
            </div>
            <div className="entry-desc">
              The first blog post! Look here for updates, news, and other things
              in my life.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;
